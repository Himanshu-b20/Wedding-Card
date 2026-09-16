import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Film } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="film"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-maroon-950 text-ivory-100 overflow-hidden"
      aria-label="Pre-wedding Cinematic Film"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-medium block mb-2">
              Cinematic Trailer
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory-50 tracking-tight mb-3">
              A Glimpse Into Forever
            </h2>
            <p className="font-cormorant italic text-lg sm:text-xl text-ivory-200/80">
              The prelude to our sacred vows, captured among the whispering waters of Lake Pichola.
            </p>
          </motion.div>
        </div>

        {/* Video Player Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video w-full rounded-sm overflow-hidden bg-royalbrown-950 border-gold-double shadow-maroon-rich"
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${weddingData.youtubeVideoId}?autoplay=1&rel=0`}
              title={weddingData.youtubeVideoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Cover Poster Image */}
              <img
                src="/images/couple-royal.jpg"
                alt="Pre-wedding film thumbnail"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              />

              {/* Dark tint overlay */}
              <div className="absolute inset-0 bg-maroon-950/40 group-hover:bg-maroon-950/20 transition-colors" />

              {/* Central Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  type="button"
                  aria-label="Play pre-wedding trailer"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 text-maroon-950 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold-400"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                </button>
                <span className="mt-4 font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-ivory-100 font-medium drop-shadow">
                  Watch Wedding Teaser
                </span>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-royalbrown-950/70 border border-gold-500/40 text-[10px] uppercase tracking-widest text-gold-300 backdrop-blur-sm">
                <Film className="w-3 h-3" />
                <span>4K Official Teaser</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
