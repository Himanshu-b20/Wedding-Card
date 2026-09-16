import React from 'react';

interface GaneshMotifProps {
  className?: string;
}

export const GaneshMotif: React.FC<GaneshMotifProps> = ({ className = 'w-20 h-20' }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECCF8E" />
            <stop offset="50%" stopColor="#B5965A" />
            <stop offset="100%" stopColor="#8C6A2E" />
          </linearGradient>
        </defs>
        {/* Crown / Mukut */}
        <path
          d="M50 8 L55 18 L60 14 L57 26 L43 26 L40 14 L45 18 Z"
          fill="url(#ganeshGold)"
        />
        <circle cx="50" cy="14" r="1.5" fill="#6E1F2E" />

        {/* Head & Forehead Tilak */}
        <path
          d="M36 28 C36 24, 64 24, 64 28 C64 34, 60 40, 50 40 C40 40, 36 34, 36 28 Z"
          fill="url(#ganeshGold)"
          opacity="0.9"
        />
        {/* Red / Sandalwood Tilak */}
        <path
          d="M48 24 L52 24 L51 32 L49 32 Z"
          fill="#6E1F2E"
        />
        <circle cx="50" cy="35" r="1.5" fill="#6E1F2E" />

        {/* Large Ears */}
        {/* Left Ear */}
        <path
          d="M36 28 C26 26, 20 34, 25 44 C28 50, 34 46, 35 40"
          stroke="url(#ganeshGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Ear */}
        <path
          d="M64 28 C74 26, 80 34, 75 44 C72 50, 66 46, 65 40"
          stroke="url(#ganeshGold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Trunk graceful curve to the left with Modak */}
        <path
          d="M50 36 C52 46, 52 56, 47 64 C42 72, 33 72, 32 64 C31 58, 38 56, 40 60"
          stroke="url(#ganeshGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Modak on trunk tip */}
        <circle cx="41" cy="60" r="3.2" fill="url(#ganeshGold)" />
        <circle cx="41" cy="60" r="1.8" fill="#ECCF8E" />

        {/* Tusk */}
        <path d="M54 44 L58 46" stroke="url(#ganeshGold)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Halo / Aura circles */}
        <circle
          cx="50"
          cy="42"
          r="38"
          stroke="url(#ganeshGold)"
          strokeWidth="0.75"
          strokeDasharray="2,3"
          opacity="0.6"
        />
        <circle
          cx="50"
          cy="42"
          r="43"
          stroke="url(#ganeshGold)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export const GoldFlourish: React.FC<{ className?: string }> = ({ className = 'w-48 h-6' }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 text-gold-500 opacity-80 ${className}`}>
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500" />
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
      </svg>
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500" />
    </div>
  );
};
