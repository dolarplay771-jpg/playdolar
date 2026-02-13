import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gold-grad" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#E3BC53" />
        <stop offset="0.5" stopColor="#F3E2B5" />
        <stop offset="1" stopColor="#D4AF37" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Outer Rings */}
    <circle cx="100" cy="100" r="90" stroke="url(#gold-grad)" strokeWidth="5" />
    <circle cx="100" cy="100" r="82" stroke="url(#gold-grad)" strokeWidth="2" opacity="0.6" />

    {/* Monogram P */}
    <path d="M75 65 V 135" stroke="url(#gold-grad)" strokeWidth="12" strokeLinecap="square" />
    <path d="M75 65 H 105 C 130 65 130 105 105 105 H 75" stroke="url(#gold-grad)" strokeWidth="12" strokeLinecap="round" />

    {/* Monogram D (Intertwined) */}
    <path d="M95 95 V 135" stroke="url(#gold-grad)" strokeWidth="12" strokeLinecap="square" />
    <path d="M95 95 H 115 C 140 95 140 135 115 135 H 95" stroke="url(#gold-grad)" strokeWidth="12" strokeLinecap="round" />

    {/* Arrow */}
    <path d="M65 135 L 140 60" stroke="url(#gold-grad)" strokeWidth="10" strokeLinecap="round" />
    <path d="M110 60 H 140 V 90" stroke="url(#gold-grad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Logo;