import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Carousel } from './Carousel';

export const CoupleStory: React.FC = () => {
  return (
    <section
      id="story"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 overflow-hidden"
      aria-label="The Story of Ranbir & Alia"
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
              Our Journey Together
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-maroon-900 tracking-tight mb-4">
              The Story of Us
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold-500/40" />
              <Heart className="w-4 h-4 text-gold-600 fill-gold-600/30" />
              <span className="h-[1px] w-12 bg-gold-500/40" />
            </div>
            <p className="font-cormorant italic text-lg sm:text-xl text-royalbrown-800/80 max-w-xl mx-auto leading-relaxed">
              &ldquo;In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Bride & Groom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-ivory-50 border border-gold-500/30 rounded-sm p-8 shadow-gold-subtle relative overflow-hidden text-center"
          >
            <div className="w-16 h-16 rounded-full bg-maroon-900/10 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-2xl font-bold text-maroon-900">R</span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
              The Groom
            </span>
            <h3 className="font-serif text-3xl text-maroon-900 mb-3">
              {weddingData.groom.fullName}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-royalbrown-800/80 leading-relaxed max-w-md mx-auto">
              {weddingData.groom.bio}
            </p>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-ivory-50 border border-gold-500/30 rounded-sm p-8 shadow-gold-subtle relative overflow-hidden text-center"
          >
            <div className="w-16 h-16 rounded-full bg-maroon-900/10 border border-gold-500/40 flex items-center justify-center mx-auto mb-4">
              <span className="font-serif text-2xl font-bold text-maroon-900">A</span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600 font-semibold block mb-1">
              The Bride
            </span>
            <h3 className="font-serif text-3xl text-maroon-900 mb-3">
              {weddingData.bride.fullName}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-royalbrown-800/80 leading-relaxed max-w-md mx-auto">
              {weddingData.bride.bio}
            </p>
          </motion.div>
        </div>

        {/* Love Story Timeline Milestones */}
        <div className="my-20 relative">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold">
              Chapters of Love
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900 mt-1">
              Milestones to Forever
            </h3>
          </div>

          <div className="relative border-l-2 border-gold-500/30 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-12 py-4">
            {weddingData.story.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col ${
                  idx % 2 === 0 ? 'md:items-end md:pr-12 md:text-right' : 'md:items-start md:pl-12 md:text-left'
                } pl-8 md:pl-0 md:w-1/2 ${idx % 2 !== 0 ? 'md:ml-auto' : ''}`}
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[9px] md:left-auto md:-right-[9px] top-1.5 w-4 h-4 rounded-full bg-maroon-800 border-2 border-gold-400 shadow-sm"
                     style={idx % 2 !== 0 ? { left: '-9px', right: 'auto' } : {}}
                />

                <span className="font-cinzel text-xs font-bold text-gold-700 tracking-wider">
                  {milestone.year}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-maroon-900 font-semibold my-1">
                  {milestone.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-royalbrown-800/80 leading-relaxed max-w-sm">
                  {milestone.description}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-maroon-800/70 font-sans mt-2">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  <span>{milestone.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Carousel */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-maroon-800 font-semibold block mb-1">
              Glimpses of Celebration
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900">
              Captured In Time
            </h3>
          </div>
          <Carousel photos={weddingData.carouselPhotos} />
        </div>
      </div>
    </section>
  );
};
