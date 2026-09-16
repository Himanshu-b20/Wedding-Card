import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareHeart, Send, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';

interface WishItem {
  id: string;
  name: string;
  relation: string;
  message: string;
  date: string;
}

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<WishItem[]>([]);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Load from localStorage or initialize with weddingData.initialWishes
  useEffect(() => {
    const saved = localStorage.getItem('shaadi_guest_wishes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
          return;
        }
      } catch {
        // Fallback
      }
    }
    setWishes(weddingData.initialWishes);
  }, []);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please fill in both your name and your blessing.');
      return;
    }

    const newWish: WishItem = {
      id: 'wish_' + Date.now(),
      name: name.trim(),
      relation: relation.trim() || 'Well-wisher & Friend',
      message: message.trim(),
      date: 'Just now',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('shaadi_guest_wishes', JSON.stringify(updated));
    } catch {
      // Storage fallback
    }

    // Celebrate with gold confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#B5965A', '#6E1F2E', '#F8F0E3'],
      });
    } catch {
      // Ignore
    }

    setName('');
    setRelation('');
    setMessage('');
    setError('');
  };

  return (
    <section
      id="wishes"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 overflow-hidden"
      aria-label="Guest Wishes and Blessings Wall"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-maroon-800 font-semibold block mb-2">
              Love &amp; Good Wishes
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-maroon-900 tracking-tight mb-3">
              The Blessings Wall
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold-500/40" />
              <MessageSquareHeart className="w-4 h-4 text-gold-600" />
              <span className="h-[1px] w-12 bg-gold-500/40" />
            </div>
            <p className="font-cormorant italic text-lg sm:text-xl text-royalbrown-800/80">
              Leave a warm prayer or blessing for Ranbir &amp; Alia as they begin their sacred journey together.
            </p>
          </motion.div>
        </div>

        {/* Input Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-8 shadow-gold-subtle mb-16"
        >
          <form onSubmit={handlePostWish} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="wish-name" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                  Your Name <span className="text-maroon-800">*</span>
                </label>
                <input
                  id="wish-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Deepika & Ranveer"
                  className="w-full px-3.5 py-2 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                />
              </div>
              <div>
                <label htmlFor="wish-relation" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                  Relation / City
                </label>
                <input
                  id="wish-relation"
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Childhood Friend, Mumbai"
                  className="w-full px-3.5 py-2 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800"
                />
              </div>
            </div>

            <div>
              <label htmlFor="wish-message" className="block text-xs font-semibold uppercase tracking-wider text-royalbrown-900 mb-1">
                Your Blessing Message <span className="text-maroon-800">*</span>
              </label>
              <textarea
                id="wish-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers, blessings, or sweet memories..."
                className="w-full px-3.5 py-2 bg-ivory-100/70 border border-gold-500/30 rounded-sm text-royalbrown-900 text-sm focus:outline-none focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 resize-none"
              />
            </div>

            {error && <p className="text-xs text-rose-700">{error}</p>}

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-maroon-800 hover:bg-maroon-900 text-ivory-50 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <Send className="w-3.5 h-3.5 text-gold-400" />
              <span>Post Blessing</span>
            </button>
          </form>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishes.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 shadow-gold-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-gold-500/15 pb-2">
                  <span className="text-[11px] font-sans font-medium text-gold-700">
                    {item.relation}
                  </span>
                  <span className="text-[10px] text-royalbrown-800/50">
                    {item.date}
                  </span>
                </div>
                <p className="font-cormorant italic text-base text-royalbrown-900 leading-relaxed">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between">
                <span className="font-serif text-sm font-semibold text-maroon-900">
                  {item.name}
                </span>
                <Heart className="w-3.5 h-3.5 text-maroon-800/40 fill-maroon-800/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
