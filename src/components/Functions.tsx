import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Shirt, ExternalLink, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Functions: React.FC = () => {
  return (
    <section
      id="celebrations"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-ivory-100 overflow-hidden"
      aria-label="The Wedding Celebrations and Itinerary"
    >
      {/* Background Mandala / Jali motif */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B5965A_1.5px,transparent_1.5px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-medium block mb-2">
              Three Days of Festivities
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory-50 tracking-tight mb-4">
              The Celebrations
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold-500/40" />
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="h-[1px] w-12 bg-gold-500/40" />
            </div>
            <p className="font-cormorant italic text-lg sm:text-xl text-ivory-200/80 max-w-xl mx-auto leading-relaxed">
              We look forward to rejoicing with you across every musical, rhythmic, and sacred milestone.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingData.events.map((event, idx) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group relative bg-maroon-950/70 border border-gold-500/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 shadow-maroon-rich backdrop-blur-xs"
            >
              {/* Corner accents */}
              <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t border-l border-gold-500/40" />
              <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t border-r border-gold-500/40" />
              <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b border-l border-gold-500/40" />
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b border-r border-gold-500/40" />

              <div>
                {/* Event Tag */}
                <div className="flex items-center justify-between mb-3 border-b border-gold-500/20 pb-2">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-gold-400">
                    {event.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-ivory-200/75">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 tracking-tight mb-1 group-hover:text-amber-200 transition-colors">
                  {event.title}
                </h3>
                <p className="font-cormorant italic text-base text-gold-300 mb-4">
                  {event.subtitle}
                </p>

                <p className="font-sans text-xs sm:text-sm text-ivory-200/80 leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Details list */}
                <div className="space-y-3 font-sans text-xs sm:text-sm border-t border-gold-500/20 pt-4 text-ivory-200/90">
                  {/* Time */}
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ivory-100">Time: </span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ivory-100">Venue: </span>
                      <span>{event.venueName}</span>
                      <p className="text-[11px] text-ivory-200/60 mt-0.5">{event.venueAddress}</p>
                    </div>
                  </div>

                  {/* Attire Guide */}
                  <div className="flex items-start gap-2.5">
                    <Shirt className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-ivory-100">Dress Code: </span>
                      <span className="text-amber-200">{event.attire}</span>
                      <p className="text-[11px] text-ivory-200/60 mt-0.5">{event.attireColorDescription}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action: Map link */}
              <div className="mt-6 pt-4 border-t border-gold-500/20 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-gold-400/80 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-gold-400" />
                  Udaipur, Rajasthan
                </span>

                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-ivory-100 font-medium hover:text-amber-300 transition-colors focus:outline-none focus:underline"
                  aria-label={`Open Google Maps for ${event.title}`}
                >
                  <span>View Map</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
