import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Invitation } from './components/Invitation';
import { DateReveal } from './components/DateReveal';
import { Functions } from './components/Functions';
import { CoupleStory } from './components/CoupleStory';
import { InstagramSection } from './components/InstagramSection';
import { VideoSection } from './components/VideoSection';
import { Countdown } from './components/Countdown';
import { ThingsToKnow } from './components/ThingsToKnow';
import { RSVP } from './components/RSVP';
import { WishesWall } from './components/WishesWall';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { Heart } from 'lucide-react';

export const App: React.FC = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating header navigation once past initial hero scroll
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Blessing', href: '#invitation' },
    { label: 'Celebrations', href: '#celebrations' },
    { label: 'Story', href: '#story' },
    { label: 'Trailer', href: '#film' },
    { label: 'Concierge', href: '#things-to-know' },
    { label: 'RSVP', href: '#rsvp' },
    { label: 'Wishes', href: '#wishes' },
  ];

  return (
    <div className="relative min-h-screen bg-ivory-100 text-royalbrown-900 selection:bg-maroon-800 selection:text-ivory-100">
      
      {/* Floating Sticky Navigation Bar when scrolled */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolledPastHero
            ? 'translate-y-0 opacity-100 bg-ivory-100/95 backdrop-blur-md border-b border-gold-500/30 shadow-sm py-3'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-1.5 font-serif text-lg font-bold text-maroon-900 tracking-wider hover:opacity-80 transition-opacity"
          >
            <span>Ranbir</span>
            <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-600 inline" />
            <span>Alia</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-sans font-medium text-royalbrown-900/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-maroon-800 transition-colors focus:outline-none focus:text-maroon-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#rsvp"
            className="px-3.5 py-1.5 rounded-xs bg-maroon-800 text-ivory-50 text-xs font-semibold uppercase tracking-wider hover:bg-maroon-900 transition-colors shadow-xs"
          >
            RSVP
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero: Bright sky-blue, temple mandap, door portal scroll */}
        <Hero />

        {/* 2. Invitation blessing with Ganesh motif & family names */}
        <Invitation />

        {/* 3. Interactive "Reveal the Date" card */}
        <DateReveal />

        {/* 4. Deep maroon "The Celebrations" (Mehndi, Sangeet, Wedding, Banquet) */}
        <Functions />

        {/* 5. Bride & Groom story section with couple image carousel */}
        <CoupleStory />

        {/* 6. Instagram hashtag section */}
        <InstagramSection />

        {/* 7. Pre-wedding YouTube video teaser section */}
        <VideoSection />

        {/* 8. Live countdown timer to wedding date */}
        <Countdown />

        {/* 9. Things to Know cards: venue, contact, reminders */}
        <ThingsToKnow />

        {/* 10. Validated RSVP flow */}
        <RSVP />

        {/* 11. Wishes wall saved in localStorage */}
        <WishesWall />
      </main>

      {/* 12. Ivory closing footer */}
      <Footer />

      {/* Ambient Indian wedding music player */}
      <MusicPlayer />
    </div>
  );
};

export default App;
