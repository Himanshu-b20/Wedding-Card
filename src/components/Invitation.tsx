import React from 'react';
import { motion } from 'framer-motion';
import { GaneshMotif, GoldFlourish } from './GaneshMotif';
import { weddingData } from '../data/weddingData';

export const Invitation: React.FC = () => {
  return (
    <section
      id="invitation"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-ivory-100 flex flex-col items-center justify-center overflow-hidden"
      aria-label="Auspicious Wedding Invitation Blessing"
    >
      {/* Background subtle texture / motif */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#42131E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Main Ivory Card with Double Gold Border */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full bg-ivory-50 border-gold-double rounded-sm p-8 sm:p-12 md:p-16 shadow-gold-subtle text-center"
      >
        {/* Ornate Corner Accents */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold-500/60 pointer-events-none" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold-500/60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold-500/60 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold-500/60 pointer-events-none" />

        {/* Ganesh Motif */}
        <div className="mb-4">
          <GaneshMotif className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
        </div>

        {/* Auspicious Shloka */}
        <div className="mb-6 space-y-2">
          <p className="font-hindi text-base sm:text-lg text-maroon-900 tracking-wide font-medium whitespace-pre-line leading-relaxed">
            {weddingData.shlokaHindi}
          </p>
          <p className="font-cormorant italic text-xs sm:text-sm text-royalbrown-800/75 max-w-md mx-auto">
            &ldquo;{weddingData.shlokaEnglish}&rdquo;
          </p>
        </div>

        <GoldFlourish className="mb-8" />

        {/* The Invitation Text */}
        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-600 font-semibold mb-2">
          With the divine blessings of our elders
        </p>

        {/* Family Names */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-left md:text-center border-y border-gold-500/20 py-8">
          {/* Groom's Family */}
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-gold-500/20 pb-6 md:pb-0 md:pr-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-maroon-800 font-semibold block">
              Groom's Family
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-royalbrown-900 font-medium">
              {weddingData.groom.parents}
            </h4>
            <p className="text-xs text-royalbrown-800/70 font-sans leading-relaxed">
              Grandson of {weddingData.groom.grandparents}
            </p>
          </div>

          {/* Bride's Family */}
          <div className="space-y-2 md:pl-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-maroon-800 font-semibold block">
              Bride's Family
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-royalbrown-900 font-medium">
              {weddingData.bride.parents}
            </h4>
            <p className="text-xs text-royalbrown-800/70 font-sans leading-relaxed">
              Granddaughter of {weddingData.bride.grandparents}
            </p>
          </div>
        </div>

        {/* Cordial Invite Statement */}
        <p className="font-cormorant italic text-base sm:text-xl text-royalbrown-900/90 max-w-xl mx-auto leading-relaxed my-6">
          {weddingData.invitationText}
        </p>

        {/* Couple Names Highlight */}
        <div className="my-8 py-4">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-maroon-900 tracking-tight leading-tight">
            {weddingData.groom.fullName}
          </h2>
          <div className="my-2 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gold-500/40" />
            <span className="font-serif italic text-gold-600 text-2xl sm:text-3xl">&amp;</span>
            <span className="h-[1px] w-12 bg-gold-500/40" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-maroon-900 tracking-tight leading-tight">
            {weddingData.bride.fullName}
          </h2>
        </div>

        {/* Date & Destination */}
        <div className="mt-8 pt-6 border-t border-gold-500/20">
          <p className="font-cinzel text-base sm:text-lg tracking-[0.2em] text-gold-700 font-medium uppercase">
            {weddingData.dateText}
          </p>
          <p className="font-sans text-xs sm:text-sm text-royalbrown-800/70 uppercase tracking-widest mt-1">
            The Oberoi Udaivilas &bull; Lake Pichola, Udaipur
          </p>
        </div>
      </motion.div>
    </section>
  );
};
