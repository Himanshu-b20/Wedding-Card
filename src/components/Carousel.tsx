import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CarouselPhoto } from '../data/weddingData';

interface CarouselProps {
  photos: CarouselPhoto[];
}

export const Carousel: React.FC<CarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = photos.length - 1;
      if (next >= photos.length) next = 0;
      return next;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photos.length]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.4,
      },
    }),
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Aspect ratio frame with gold double border */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] w-full rounded-sm overflow-hidden bg-royalbrown-950 border-gold-double shadow-maroon-rich">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full relative flex items-end"
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Cinematic bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-royalbrown-950/90 via-royalbrown-950/30 to-transparent pointer-events-none" />

            {/* Photo Title & Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-ivory-50 z-10">
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1 block">
                Moment {currentIndex + 1} of {photos.length}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory-50 font-medium tracking-tight">
                {currentPhoto.title}
              </h4>
              <p className="font-cormorant italic text-sm sm:text-base text-ivory-200/90 mt-1 max-w-xl">
                {currentPhoto.caption}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          type="button"
          aria-label="Previous photo"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-royalbrown-950/60 hover:bg-maroon-900 text-ivory-100 border border-gold-500/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => paginate(1)}
          type="button"
          aria-label="Next photo"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-royalbrown-950/60 hover:bg-maroon-900 text-ivory-100 border border-gold-500/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4" role="tablist" aria-label="Photo carousel pagination">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500 ${
              idx === currentIndex ? 'w-8 bg-gold-600' : 'w-2 bg-gold-500/30 hover:bg-gold-500/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
