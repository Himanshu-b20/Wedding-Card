import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Camera, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const InstagramSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(weddingData.hashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="hashtag"
      className="relative w-full py-20 px-4 bg-ivory-200/50 flex flex-col items-center justify-center overflow-hidden border-t border-gold-500/20"
      aria-label="Instagram Wedding Hashtag"
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-ivory-50 border border-gold-500/30 rounded-sm p-8 sm:p-12 shadow-gold-subtle"
        >
          {/* Decorative Instagram Icon */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mx-auto mb-5 shadow-md">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-maroon-800 font-semibold block mb-2">
            Share Your Moments
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-maroon-900 mb-3">
            Capture &amp; Tag The Magic
          </h3>
          <p className="font-sans text-xs sm:text-sm text-royalbrown-800/75 max-w-md mx-auto mb-6 leading-relaxed">
            Help us collect every candid tear, dance move, and golden sunset. Tag your photos and reels with our official wedding hashtag!
          </p>

          {/* Hashtag Copy Box */}
          <div className="inline-flex items-center justify-center gap-3 bg-ivory-200/80 border border-gold-500/50 rounded-sm px-6 py-3 shadow-inner my-2">
            <span className="font-serif text-2xl sm:text-3xl text-maroon-900 font-bold tracking-tight">
              {weddingData.hashtag}
            </span>
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy official wedding hashtag"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-maroon-800 text-ivory-50 hover:bg-maroon-900 text-xs uppercase tracking-wider font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gold-300" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-royalbrown-800/75 border-t border-gold-500/20 pt-6">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-gold-600" />
              <span>Vintage Photo-Booth by the Lawn</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>Live Social Memory Feed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
