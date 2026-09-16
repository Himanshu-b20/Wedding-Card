import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const targetDate = new Date(weddingData.targetWeddingDate).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full py-20 px-4 bg-ivory-50 border-t border-b border-gold-500/20 overflow-hidden"
      aria-label="Wedding Countdown Timer"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-maroon-800 font-semibold block mb-2">
            Counting Every Breath
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon-900 tracking-tight mb-3">
            Until We Say &ldquo;I Do&rdquo;
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-royalbrown-800/75 max-w-md mx-auto mb-10">
            31 January 2027 &bull; The sacred union at dusk
          </p>

          {/* Countdown Dials */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="relative bg-ivory-100 border border-gold-500/40 rounded-sm p-4 sm:p-6 shadow-gold-subtle flex flex-col items-center justify-center group hover:border-gold-500 transition-colors"
              >
                {/* Vintage Corner Accents */}
                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-gold-500/50" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-gold-500/50" />
                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-gold-500/50" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-gold-500/50" />

                <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-maroon-900 font-bold tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-cinzel text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold-700 mt-2">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-royalbrown-800/60 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Under the auspicious stars of Udaipur</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
