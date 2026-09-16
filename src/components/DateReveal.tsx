import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, Sparkles, Clock, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DateReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      // Trigger golden confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#B5965A', '#ECCF8E', '#6E1F2E', '#F8F0E3'],
        });
      } catch {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics calendar download
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ranbir & Alia Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-ranbir-alia-20270131@shaadi.com',
      'SUMMARY:Ranbir & Alia Wedding Ceremony',
      'DESCRIPTION:Join us for the auspicious wedding vows of Ranbir Kapoor & Alia Bhatt in Udaipur.',
      'LOCATION:The Oberoi Udaivilas, Lake Pichola, Udaipur, Rajasthan',
      'DTSTART:20270131T110000Z',
      'DTEND:20270131T180000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Ranbir-Alia-Wedding-Jan31-2027.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Ranbir & Alia Wedding Ceremony'
  )}&dates=20270131T110000Z/20270131T180000Z&details=${encodeURIComponent(
    'Wedding celebrations and sacred vows of Ranbir Kapoor and Alia Bhatt'
  )}&location=${encodeURIComponent('The Oberoi Udaivilas, Udaipur, Rajasthan')}`;

  return (
    <section
      id="date-reveal"
      className="relative w-full py-20 px-4 bg-ivory-200/60 flex flex-col items-center justify-center overflow-hidden border-t border-b border-gold-500/20"
      aria-label="Interactive Reveal the Date"
    >
      <div className="max-w-xl w-full mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-maroon-800 font-semibold mb-2 block">
          Mark Your Calendars
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900 mb-3">
          The Auspicious Muhurat
        </h3>
        <p className="font-sans text-xs sm:text-sm text-royalbrown-800/75 mb-8 max-w-md mx-auto">
          Under the alignment of holy nakshatras, our sacred vows await your gracious presence.
        </p>

        {/* The Sealed Royal Letter / Envelope */}
        <div className="relative bg-ivory-50 border border-gold-500/30 rounded-lg p-6 sm:p-10 shadow-gold-subtle min-h-[260px] flex flex-col items-center justify-center">
          
          <AnimatePresence mode="wait">
            {!isRevealed ? (
              <motion.div
                key="sealed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                {/* Royal Wax Seal Button */}
                <button
                  onClick={handleReveal}
                  type="button"
                  aria-label="Break royal seal to reveal wedding date"
                  className="group relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-900 border-2 border-amber-300/60 shadow-lg shadow-maroon-950/30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
                >
                  <div className="absolute inset-1 rounded-full border border-dashed border-amber-200/40" />
                  <span className="font-serif font-bold text-amber-200 text-lg sm:text-xl tracking-wider group-hover:scale-110 transition-transform">
                    R &amp; A
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-amber-100/80 mt-1 font-sans">
                    2027
                  </span>

                  {/* Pulsing ring indicator */}
                  <span className="absolute -inset-1.5 rounded-full border border-gold-400/40 animate-ping pointer-events-none" style={{ animationDuration: '2.5s' }} />
                </button>

                <p className="mt-5 text-xs sm:text-sm font-medium text-maroon-900 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  Tap Royal Seal to Reveal Date
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                </p>
                <p className="text-[11px] text-royalbrown-800/60 mt-1">
                  Click to unlock the wedding schedule
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full flex flex-col items-center"
              >
                {/* Revealed Date Display */}
                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-gold-600" />
                </div>

                <span className="text-[11px] uppercase tracking-[0.25em] text-maroon-800 font-semibold">
                  Auspicious Wedding Day
                </span>

                <div className="my-2">
                  <h4 className="font-serif text-4xl sm:text-5xl text-maroon-900 font-bold tracking-tight">
                    31 JANUARY 2027
                  </h4>
                  <p className="font-cormorant italic text-lg sm:text-xl text-gold-700 font-medium mt-1">
                    Sunday &bull; Magha Shukla Trayodashi
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-royalbrown-800/80 font-sans mt-1 mb-6">
                  <Clock className="w-3.5 h-3.5 text-maroon-800" />
                  <span>Baraat: 4:30 PM &bull; Sunset Pheras: 6:00 PM</span>
                </div>

                {/* Calendar Add Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-sm">
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-sm bg-maroon-800 text-ivory-50 text-xs font-medium uppercase tracking-wider hover:bg-maroon-900 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-800"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Google Cal
                  </a>

                  <button
                    onClick={handleAddToCalendar}
                    type="button"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-sm border border-gold-500 text-royalbrown-900 bg-ivory-100 hover:bg-ivory-200/80 text-xs font-medium uppercase tracking-wider transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    {hasCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        Saved (.ics)
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-gold-600" />
                        Apple / Outlook
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
