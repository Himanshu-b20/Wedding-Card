import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, UserCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no';
  guestCount: number;
  dietary: string;
  events: string[];
  message: string;
}

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    attending: 'yes',
    guestCount: 2,
    dietary: 'Pure Vegetarian',
    events: weddingData.events.map((e) => e.id),
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if previously RSVPed in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('shaadi_rsvp_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.fullName) {
          setIsSubmitted(true);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.attending === 'yes' && formData.events.length === 0) {
      newErrors.events = 'Please select at least one celebration you will attend.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save to localStorage
    try {
      localStorage.setItem('shaadi_rsvp_data', JSON.stringify({ ...formData, submittedAt: new Date().toISOString() }));
    } catch {
      // Storage fallback
    }

    // Launch celebratory confetti if attending
    if (formData.attending === 'yes') {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#B5965A', '#ECCF8E', '#6E1F2E', '#F8F0E3'],
        });
      } catch {
        // Ignore
      }
    }

    setIsSubmitted(true);
  };

  const toggleEvent = (id: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(id);
      return {
        ...prev,
        events: exists ? prev.events.filter((e) => e !== id) : [...prev.events, id],
      };
    });
  };

  return (
    <section
      id="rsvp"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-ivory-200/60 overflow-hidden border-t border-gold-500/20"
      aria-label="RSVP Response Form"
    >
      <div className="relative max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-maroon-800 font-semibold block mb-2">
              Respond By 15th December 2026
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-maroon-900 tracking-tight mb-3">
              Will You Join Us?
            </h2>
            <p className="font-cormorant italic text-lg sm:text-xl text-royalbrown-800/80">
              Your presence will make our union truly auspicious and complete.
            </p>
          </motion.div>
        </div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-10 shadow-gold-subtle"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-maroon-900">
                  Thank You, {formData.fullName || 'Beloved Guest'}!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-royalbrown-800/80 max-w-md mx-auto leading-relaxed">
                  {formData.attending === 'yes'
                    ? 'We have recorded your confirmation with warmth and joy. Our family concierge will reach out closer to the date with your stay itinerary.'
                    : 'We understand you will not be able to attend in person. You will be missed dearly, and we deeply cherish your love and blessings!'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  type="button"
                  className="mt-4 text-xs font-medium text-gold-700 hover:text-maroon-900 underline uppercase tracking-wider"
                >
                  Edit My RSVP Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Attending Toggle Options */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900">
                    Will you be attending? <span className="text-maroon-800">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'yes' })}
                      className={`p-4 rounded-sm border text-center transition-all ${
                        formData.attending === 'yes'
                          ? 'bg-maroon-900 text-ivory-50 border-gold-500 shadow-md ring-1 ring-gold-500'
                          : 'bg-ivory-100 text-royalbrown-800 border-gold-500/30 hover:border-gold-500'
                      }`}
                    >
                      <span className="font-serif text-base sm:text-lg block font-medium">Joyfully Accept</span>
                      <span className="text-[10px] opacity-80 uppercase tracking-widest mt-0.5 block">Can't wait to celebrate</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: 'no' })}
                      className={`p-4 rounded-sm border text-center transition-all ${
                        formData.attending === 'no'
                          ? 'bg-maroon-900 text-ivory-50 border-gold-500 shadow-md ring-1 ring-gold-500'
                          : 'bg-ivory-100 text-royalbrown-800 border-gold-500/30 hover:border-gold-500'
                      }`}
                    >
                      <span className="font-serif text-base sm:text-lg block font-medium">Regretfully Decline</span>
                      <span className="text-[10px] opacity-80 uppercase tracking-widest mt-0.5 block">Will be with you in spirit</span>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="rsvp-fullname" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                    Your Full Name <span className="text-maroon-800">*</span>
                  </label>
                  <input
                    id="rsvp-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aadar Jain & Family"
                    className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1 text-xs text-rose-700 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rsvp-email" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                      Email Address <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      id="rsvp-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-rose-700 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="rsvp-phone" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                      Phone Number <span className="text-maroon-800">*</span>
                    </label>
                    <input
                      id="rsvp-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1 text-xs text-rose-700 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* If attending, show guest count, events, dietary */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 border-t border-gold-500/20 pt-6"
                  >
                    {/* Guest Count & Dietary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rsvp-guests" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                          Total Number of Guests
                        </label>
                        <select
                          id="rsvp-guests"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                          className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                        >
                          <option value={1}>1 Guest (Just Myself)</option>
                          <option value={2}>2 Guests (Couple)</option>
                          <option value={3}>3 Guests</option>
                          <option value={4}>4 Guests (Family)</option>
                          <option value={5}>5 Guests (Family)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="rsvp-dietary" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                          Dietary Preference
                        </label>
                        <select
                          id="rsvp-dietary"
                          value={formData.dietary}
                          onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                          className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                        >
                          <option value="Pure Vegetarian">Pure Vegetarian (No Egg)</option>
                          <option value="Jain Vegetarian">Jain Vegetarian (No Root Veg)</option>
                          <option value="Standard Royal">Standard (Royal Mughlai / Non-Veg)</option>
                          <option value="Vegan">Vegan</option>
                        </select>
                      </div>
                    </div>

                    {/* Events attending checkboxes */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-2">
                        Which celebrations will you attend?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {weddingData.events.map((ev) => {
                          const checked = formData.events.includes(ev.id);
                          return (
                            <button
                              type="button"
                              key={ev.id}
                              onClick={() => toggleEvent(ev.id)}
                              className={`flex items-center gap-2.5 p-2.5 rounded-sm border text-left transition-colors ${
                                checked
                                  ? 'bg-maroon-900/10 border-maroon-800 text-maroon-950 font-medium'
                                  : 'bg-ivory-100/60 border-gold-500/20 text-royalbrown-800/70 hover:border-gold-500'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-xs border flex items-center justify-center shrink-0 ${
                                  checked ? 'bg-maroon-800 border-maroon-800 text-ivory-50' : 'border-gold-500/50'
                                }`}
                              >
                                {checked && <Check className="w-3 h-3" />}
                              </div>
                              <span className="text-xs">{ev.title}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.events && (
                        <p className="flex items-center gap-1 text-xs text-rose-700 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.events}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Personal Note */}
                <div>
                  <label htmlFor="rsvp-message" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                    Warm Note for the Couple (Optional)
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your prayers, song requests, or heartfelt wishes..."
                    className="w-full px-4 py-2.5 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-maroon-800 via-maroon-900 to-maroon-800 text-ivory-50 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Submit RSVP Confirmation</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
