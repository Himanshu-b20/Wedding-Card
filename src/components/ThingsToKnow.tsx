import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Sun, Info, MapPin, CheckCircle2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const ThingsToKnow: React.FC = () => {
  const { thingsToKnow } = weddingData;

  return (
    <section
      id="things-to-know"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 overflow-hidden"
      aria-label="Important Guest Information"
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
              Guest Concierge
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-maroon-900 tracking-tight mb-3">
              Things To Know
            </h2>
            <p className="font-cormorant italic text-lg sm:text-xl text-royalbrown-800/80">
              Thoughtful details to make your stay effortless and memorable.
            </p>
          </motion.div>
        </div>

        {/* 3 Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Venue & Travel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-8 shadow-gold-subtle flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-maroon-900/10 border border-gold-500/40 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-maroon-900" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
                Destination &amp; Stay
              </span>
              <h3 className="font-serif text-2xl text-maroon-900 mb-2">
                Venue &amp; Arrival
              </h3>
              <p className="text-xs font-semibold text-royalbrown-900 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                {thingsToKnow.venue.name}
              </p>
              <p className="font-sans text-xs text-royalbrown-800/80 leading-relaxed mb-4">
                {thingsToKnow.venue.airportInfo}
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-3 text-[11px] text-royalbrown-800/70">
              <span className="font-medium text-maroon-900">Valet: </span>
              {thingsToKnow.venue.parkingInfo}
            </div>
          </motion.div>

          {/* Card 2: Weather & Wardrobe */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-8 shadow-gold-subtle flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-maroon-900/10 border border-gold-500/40 flex items-center justify-center mb-5">
                <Sun className="w-6 h-6 text-maroon-900" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
                Climate &amp; Attire
              </span>
              <h3 className="font-serif text-2xl text-maroon-900 mb-2">
                Weather &amp; Comfort
              </h3>
              <p className="font-sans text-xs text-royalbrown-800/80 leading-relaxed mb-4">
                {thingsToKnow.weather}
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-3 text-[11px] text-royalbrown-800/70">
              <span className="font-medium text-maroon-900">Note: </span>
              Heaters and cashmere stoles will be provided at all outdoor lakeside gatherings.
            </div>
          </motion.div>

          {/* Card 3: Contact & Hospitality Desk */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-8 shadow-gold-subtle flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-maroon-900/10 border border-gold-500/40 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-maroon-900" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
                24/7 Assistance
              </span>
              <h3 className="font-serif text-2xl text-maroon-900 mb-2">
                Family Concierge
              </h3>
              <div className="space-y-3 mt-3">
                {thingsToKnow.contacts.map((c) => (
                  <div key={c.role} className="text-xs">
                    <p className="font-medium text-maroon-900">{c.name} <span className="text-[10px] text-royalbrown-800/60">({c.relation})</span></p>
                    <p className="text-[11px] text-gold-700 font-medium">{c.role}</p>
                    <a href={`tel:${c.phone}`} className="text-[11px] text-royalbrown-800/80 hover:text-maroon-900 hover:underline">
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gold-500/20 pt-3 text-[11px] text-royalbrown-800/70">
              Feel free to call anytime regarding travel, airport pickups, or check-in.
            </div>
          </motion.div>
        </div>

        {/* Reminders / Etiquette banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ivory-50 border border-gold-500/30 rounded-sm p-6 sm:p-8 shadow-gold-subtle"
        >
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-gold-600" />
            <h4 className="font-serif text-lg text-maroon-900 font-semibold">
              Gentle Reminders For Our Loved Ones
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {thingsToKnow.guidelines.map((guide, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-royalbrown-800/85">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span>{guide}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
