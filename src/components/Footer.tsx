import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';
import { GaneshMotif, GoldFlourish } from './GaneshMotif';
import { weddingData } from '../data/weddingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full py-16 px-4 bg-ivory-200/80 border-t border-gold-500/30 text-center overflow-hidden"
      aria-label="Wedding Invitation Footer"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Back to top floating pill */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top of wedding invitation"
          className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory-50 border border-gold-500/40 text-royalbrown-900 hover:text-maroon-900 text-xs font-sans uppercase tracking-widest shadow-gold-subtle hover:border-gold-500 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <ChevronUp className="w-4 h-4 text-gold-600" />
          <span>Back to Top</span>
        </button>

        {/* Small Ganesh Blessing */}
        <GaneshMotif className="w-12 h-12 mb-3" />

        <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900 mb-2">
          {weddingData.groom.firstName} &amp; {weddingData.bride.firstName}
        </h3>

        <p className="font-cormorant italic text-base sm:text-lg text-royalbrown-800/80 max-w-md mx-auto mb-4">
          &ldquo;Two souls, one destiny. Held together by the love of family, friends, and the grace of the Almighty.&rdquo;
        </p>

        <GoldFlourish className="my-4" />

        {/* Family Acknowledgement */}
        <div className="text-xs text-royalbrown-800/70 font-sans space-y-1 mb-8">
          <p className="font-medium text-maroon-900 uppercase tracking-widest">
            Kapoor &amp; Bhatt Families
          </p>
          <p>Udaipur, Rajasthan &bull; January 2027</p>
        </div>

        {/* Bottom Tagline */}
        <div className="border-t border-gold-500/20 pt-6 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-royalbrown-800/60 font-sans">
          <span>Official Wedding Invitation &bull; Ranbir &amp; Alia</span>
          <span className="flex items-center gap-1 mt-2 sm:mt-0">
            Crafted with <Heart className="w-3 h-3 text-rose-700 fill-rose-700" /> for eternal memories
          </span>
        </div>
      </div>
    </footer>
  );
};
