import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track natural scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale temple as visitor walks into it
  const templeScale = useTransform(scrollYProgress, [0, 0.75], [1, shouldReduceMotion ? 1 : 1.35]);

  // Doors split outward
  const leftDoorX = useTransform(scrollYProgress, [0.08, 0.8], ['0%', shouldReduceMotion ? '0%' : '-42%']);
  const rightDoorX = useTransform(scrollYProgress, [0.08, 0.8], ['0%', shouldReduceMotion ? '0%' : '42%']);

  // Warm central golden glow behind the doors
  const glowOpacity = useTransform(scrollYProgress, [0.08, 0.65], [0, shouldReduceMotion ? 0 : 0.95]);
  const glowScale = useTransform(scrollYProgress, [0.08, 0.75], [0.8, shouldReduceMotion ? 1 : 1.4]);

  // Text fades and glides upward smoothly
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textTranslateY = useTransform(scrollYProgress, [0, 0.35], ['0px', '-40px']);

  // Scroll cue fades quickly
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Whole hero fades smoothly at the very end to hand over to ivory section
  const heroFade = useTransform(scrollYProgress, [0.75, 1], [1, 0.1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[130vh] overflow-hidden select-none"
      aria-label="Wedding Invitation Hero"
    >
      {/* Sticky viewport frame to allow natural scrolling through the portal */}
      <motion.div
        style={{ opacity: heroFade }}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between"
      >
        {/* Bright sky-blue background with celestial gradient */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#2E8BCC] via-[#5CB1E6] to-[#BEE3F8]"
          aria-hidden="true"
        >
          {/* Subtle sun radiance in sky */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/35 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Soft stylized drifting white clouds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
            {/* Cloud 1 */}
            <div className="absolute top-[12%] -left-[10%] w-[550px] h-[160px] bg-white/40 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '8s' }} />
            {/* Cloud 2 */}
            <div className="absolute top-[22%] -right-[5%] w-[600px] h-[180px] bg-white/45 rounded-full blur-2xl" />
            {/* Cloud 3 - lower horizon */}
            <div className="absolute bottom-[20%] left-[15%] w-[750px] h-[190px] bg-white/30 rounded-full blur-3xl" />
          </div>

          {/* Subtle golden dust particles / sparkles */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
        </div>

        {/* Top & Upper-Third Content: Typography */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textTranslateY,
          }}
          className="relative z-20 pt-14 md:pt-20 px-4 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Small uppercase eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 md:w-10 bg-white/70" />
            <p className="text-white/95 text-xs md:text-sm font-medium tracking-[0.35em] uppercase font-sans drop-shadow-sm">
              A celebration of love
            </p>
            <span className="h-[1px] w-6 md:w-10 bg-white/70" />
          </div>

          {/* Large elegant white serif heading */}
          <h1 className="font-serif italic text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)] mb-4">
            {weddingData.groom.firstName} <span className="font-light not-italic font-sans text-3xl sm:text-4xl md:text-5xl text-amber-200/90 mx-1">&amp;</span> {weddingData.bride.firstName}
          </h1>

          {/* Auspicious Date */}
          <p className="text-amber-100 font-cinzel text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-medium drop-shadow-sm">
            31 January 2027
          </p>
          <p className="text-white/80 font-serif italic text-xs md:text-sm mt-1 tracking-wider">
            Udaipur, Rajasthan
          </p>
        </motion.div>

        {/* Portal: Central Warm Glow revealed when doors open */}
        <motion.div
          style={{
            opacity: glowOpacity,
            scale: glowScale,
          }}
          aria-hidden="true"
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[85vw] max-w-[850px] h-[85vw] max-h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(255,249,239,1)_0%,_rgba(237,212,156,0.85)_40%,_rgba(181,150,90,0.3)_65%,_transparent_80%)] blur-2xl" />
        </motion.div>

        {/* Bottom Center Temple Mandap Artwork with Portal Split */}
        <motion.div
          style={{ scale: templeScale }}
          className="relative z-10 w-full max-w-4xl mx-auto px-2 flex justify-center items-end self-end pb-0 origin-bottom"
        >
          <div className="relative w-auto h-[62vh] sm:h-[66vh] md:h-[72vh] aspect-[682/1024] max-w-full">
            
            {/* Left Door Half of Temple */}
            <motion.div
              style={{
                x: leftDoorX,
                clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
              }}
              className="absolute inset-0 w-full h-full flex items-end justify-center will-change-transform"
            >
              <img
                src="/temple-mandap.png"
                alt="Sacred Royal Mandap Gateway Left"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                loading="eager"
              />
            </motion.div>

            {/* Right Door Half of Temple */}
            <motion.div
              style={{
                x: rightDoorX,
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
              }}
              className="absolute inset-0 w-full h-full flex items-end justify-center will-change-transform"
            >
              <img
                src="/temple-mandap.png"
                alt="Sacred Royal Mandap Gateway Right"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
                loading="eager"
              />
            </motion.div>

            {/* Golden base light wash */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-gradient-to-t from-amber-200/40 to-transparent blur-lg pointer-events-none" />
          </div>
        </motion.div>

        {/* Scroll To Explore Indicator at bottom */}
        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="relative z-20 pb-4 flex flex-col items-center justify-center text-center text-white/90"
        >
          <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.3em] font-medium drop-shadow-sm mb-1">
            Scroll to enter
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-amber-200 drop-shadow" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
