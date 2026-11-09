import React from 'react';

interface MongolianEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showGlow?: boolean;
}

export const MongolianEmblem: React.FC<MongolianEmblemProps> = ({
  className = '',
  size = 'lg',
  showGlow = true
}) => {
  const sizeMap = {
    sm: 'w-24 h-36',
    md: 'w-36 h-52',
    lg: 'w-52 h-72',
    xl: 'w-64 h-92'
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Background radial gold glow */}
      {showGlow && (
        <div 
          className="absolute -inset-8 bg-radial from-amber-400/35 via-amber-600/15 to-transparent blur-2xl rounded-full animate-pulse-glow pointer-events-none"
          aria-hidden="true"
        />
      )}

      <svg
        viewBox="0 0 320 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] drop-shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-transform duration-500 hover:scale-105`}
        role="img"
        aria-label="Монгол Улсын Хөдөлмөрийн Хүндэт Медаль"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="goldPlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E0" />
            <stop offset="25%" stopColor="#F5D77F" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#9B7A1C" />
            <stop offset="100%" stopColor="#FFEA9F" />
          </linearGradient>

          <linearGradient id="goldBevelGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C5210" />
            <stop offset="50%" stopColor="#DFB948" />
            <stop offset="100%" stopColor="#FFF7D1" />
          </linearGradient>

          <linearGradient id="ribbonRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A0000" />
            <stop offset="50%" stopColor="#C4151C" />
            <stop offset="100%" stopColor="#7A0000" />
          </linearGradient>

          <linearGradient id="ribbonBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B3060" />
            <stop offset="50%" stopColor="#1B55A8" />
            <stop offset="100%" stopColor="#082245" />
          </linearGradient>

          <radialGradient id="sunburstGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF6CD" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#876615" />
          </radialGradient>

          <radialGradient id="centerGemGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1C6AD4" />
            <stop offset="70%" stopColor="#0B3774" />
            <stop offset="100%" stopColor="#041B3B" />
          </radialGradient>

          <filter id="goldShine" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= TOP RIBBON BAR (ТУУЗ) ================= */}
        {/* Ribbon Mount Frame */}
        <g id="ribbonBar">
          {/* Shadow behind ribbon frame */}
          <rect x="44" y="24" width="232" height="96" rx="8" fill="#14110A" opacity="0.6" />
          
          {/* Golden Outer Frame */}
          <rect x="40" y="20" width="240" height="92" rx="7" fill="url(#goldPlateGrad)" stroke="url(#goldBevelGrad)" strokeWidth="3" />
          <rect x="44" y="24" width="232" height="84" rx="4" fill="#0A0A0A" />

          {/* Ribbon Colors (Mongolian State Tri-color Bar) */}
          {/* Left Red Bar */}
          <rect x="46" y="26" width="70" height="80" fill="url(#ribbonRedGrad)" />
          {/* Center Blue Bar */}
          <rect x="116" y="26" width="88" height="80" fill="url(#ribbonBlueGrad)" />
          {/* Right Red Bar */}
          <rect x="204" y="26" width="70" height="80" fill="url(#ribbonRedGrad)" />

          {/* Ribbon moire/texture lines */}
          <g opacity="0.18" stroke="#FFFFFF" strokeWidth="1">
            <line x1="46" y1="36" x2="274" y2="36" />
            <line x1="46" y1="46" x2="274" y2="46" />
            <line x1="46" y1="56" x2="274" y2="56" />
            <line x1="46" y1="66" x2="274" y2="66" />
            <line x1="46" y1="76" x2="274" y2="76" />
            <line x1="46" y1="86" x2="274" y2="86" />
            <line x1="46" y1="96" x2="274" y2="96" />
          </g>

          {/* Central Golden Soyombo on the Blue Ribbon */}
          <g id="ribbonSoyombo" transform="translate(160, 66) scale(0.68)">
            {/* Fire (Gal) */}
            <path d="M0 -34 C-4 -28, -6 -24, 0 -18 C6 -24, 4 -28, 0 -34 Z" fill="url(#goldPlateGrad)" />
            <path d="M-5 -30 C-9 -25, -5 -20, -1 -17 C-4 -21, -3 -25, -5 -30 Z" fill="url(#goldPlateGrad)" />
            <path d="M5 -30 C9 -25, 5 -20, 1 -17 C4 -21, 3 -25, 5 -30 Z" fill="url(#goldPlateGrad)" />

            {/* Sun & Moon (Nar, Sar) */}
            <circle cx="0" cy="-10" r="5" fill="url(#goldPlateGrad)" />
            <path d="M-8 -6 C-8 -2, 8 -2, 8 -6 C5 -3, -5 -3, -8 -6 Z" fill="url(#goldPlateGrad)" />

            {/* Center Yin Yang (Arga Bileg) */}
            <circle cx="0" cy="5" r="7.5" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="1.8" />
            <path d="M0 -2.5 C2.5 -2.5, 2.5 5, 0 5 C-2.5 5, -2.5 12.5, 0 12.5" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="1.5" />
            <circle cx="0" cy="1" r="1.3" fill="url(#goldPlateGrad)" />
            <circle cx="0" cy="9" r="1.3" fill="url(#goldPlateGrad)" />

            {/* Side bars (Khash bagana) */}
            <rect x="-14" y="-12" width="3.2" height="34" rx="1" fill="url(#goldPlateGrad)" />
            <rect x="11" y="-12" width="3.2" height="34" rx="1" fill="url(#goldPlateGrad)" />

            {/* Top and Bottom Horizontal Triangles/Bars */}
            <path d="M-10 -12 L0 -17 L10 -12 Z" fill="url(#goldPlateGrad)" />
            <path d="M-10 22 L0 27 L10 22 Z" fill="url(#goldPlateGrad)" />
          </g>

          {/* Golden bottom laurel loop on ribbon frame */}
          <path d="M80 112 C120 120, 200 120, 240 112" stroke="url(#goldPlateGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>

        {/* Connecting Ring */}
        <g id="connectingRing">
          <circle cx="160" cy="126" r="12" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="4.5" />
          <circle cx="160" cy="126" r="8" fill="#08080A" />
        </g>

        {/* ================= MAIN GOLD MEDALLION (МЕДАЛИЙН ИХ БЭЕ) ================= */}
        <g id="medallionBody" transform="translate(160, 275)">
          {/* Ambient dropshadow */}
          <circle cx="0" cy="4" r="126" fill="#000000" opacity="0.6" filter="url(#goldShine)" />

          {/* 32 Starburst Gold Rays (Цацрагт алтан одот суурь) */}
          <g id="starburstRays">
            {Array.from({ length: 32 }).map((_, idx) => {
              const angle = (idx * 360) / 32;
              const isMajor = idx % 2 === 0;
              const length = isMajor ? 124 : 110;
              const width = isMajor ? 14 : 10;
              return (
                <path
                  key={idx}
                  d={`M0 0 L-${width / 2} -${length * 0.7} L0 -${length} L${width / 2} -${length * 0.7} Z`}
                  transform={`rotate(${angle})`}
                  fill={isMajor ? 'url(#goldPlateGrad)' : 'url(#goldBevelGrad)'}
                  stroke="#6F5212"
                  strokeWidth="0.8"
                />
              );
            })}
          </g>

          {/* Stepped Gold Rings */}
          <circle cx="0" cy="0" r="92" fill="url(#goldBevelGrad)" stroke="#4A3606" strokeWidth="2" />
          <circle cx="0" cy="0" r="88" fill="url(#goldPlateGrad)" stroke="#FFEAA5" strokeWidth="1.5" />

          {/* Enamelled Red Circular Ring with Inscription */}
          <circle cx="0" cy="0" r="84" fill="#870B13" stroke="#520509" strokeWidth="2" />
          <circle cx="0" cy="0" r="58" fill="url(#goldPlateGrad)" stroke="#3E2C05" strokeWidth="1.5" />

          {/* Text in Red Ring: "ХӨДӨЛМӨРИЙН ХҮНДЭТ МЕДАЛЬ" */}
          <path id="textCircleArcTop" d="M -72 0 A 72 72 0 1 1 72 0" fill="none" />
          <text fill="#FFEAA5" fontSize="10.5" fontWeight="bold" letterSpacing="2.8" fontFamily="Arial, sans-serif">
            <textPath href="#textCircleArcTop" startOffset="50%" textAnchor="middle">
              ХӨДӨЛМӨРИЙН ХҮНДЭТ
            </textPath>
          </text>

          <path id="textCircleArcBottom" d="M 70 5 A 70 70 0 0 1 -70 5" fill="none" />
          <text fill="#FFEAA5" fontSize="11" fontWeight="bold" letterSpacing="4.5" fontFamily="Arial, sans-serif">
            <textPath href="#textCircleArcBottom" startOffset="50%" textAnchor="middle">
              МЕДАЛЬ
            </textPath>
          </text>

          {/* Inner Sky Blue Medallion (Цэнхэр тэнгэр, уулс, бүтээн байгуулалт) */}
          <circle cx="0" cy="0" r="54" fill="url(#centerGemGrad)" stroke="#113D78" strokeWidth="1.5" />

          {/* Sunrise and Mountains inside center */}
          <path d="M-52 14 C-35 -2, -18 8, 0 -6 C18 8, 35 -2, 52 14 L52 54 L-52 54 Z" fill="#0C254B" opacity="0.8" />
          <path d="M-45 24 C-25 12, 0 20, 25 14 C35 18, 45 24, 45 24 L45 54 L-45 54 Z" fill="#061833" />

          {/* Golden Wheat Ears / Laurel surrounding lower half (Тарианы түрүү, алдар хүнд) */}
          <g id="wheatLaurel" stroke="url(#goldPlateGrad)" strokeWidth="1.5" fill="url(#goldPlateGrad)">
            {/* Left Wheat */}
            <path d="M-28 26 Q-38 34 -44 46" fill="none" strokeWidth="2.5" />
            <ellipse cx="-32" cy="30" rx="3" ry="5" transform="rotate(-35 -32 30)" />
            <ellipse cx="-38" cy="36" rx="3" ry="5" transform="rotate(-45 -38 36)" />
            <ellipse cx="-43" cy="44" rx="3" ry="5" transform="rotate(-55 -43 44)" />

            {/* Right Wheat */}
            <path d="M28 26 Q38 34 44 46" fill="none" strokeWidth="2.5" />
            <ellipse cx="32" cy="30" rx="3" ry="5" transform="rotate(35 32 30)" />
            <ellipse cx="38" cy="36" rx="3" ry="5" transform="rotate(45 38 36)" />
            <ellipse cx="43" cy="44" rx="3" ry="5" transform="rotate(55 43 44)" />
          </g>

          {/* Center Golden Soyombo & Labor Symbols */}
          <g id="centerInsignia" transform="scale(0.85)">
            {/* Traditional Soyombo Emblems */}
            {/* Flame */}
            <path d="M0 -38 C-4 -30, -5 -25, 0 -18 C5 -25, 4 -30, 0 -38 Z" fill="url(#goldPlateGrad)" />
            <circle cx="0" cy="-10" r="5" fill="url(#goldPlateGrad)" />
            <path d="M-7 -6 C-7 -2, 7 -2, 7 -6 C4 -3, -4 -3, -7 -6 Z" fill="url(#goldPlateGrad)" />

            {/* Arga Bileg (Fish) */}
            <circle cx="0" cy="5" r="8" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="2" />
            <path d="M0 -3 C3 -3, 3 5, 0 5 C-3 5, -3 13, 0 13" fill="none" stroke="url(#goldPlateGrad)" strokeWidth="1.6" />

            {/* Side bars */}
            <rect x="-14" y="-12" width="3.2" height="34" rx="1" fill="url(#goldPlateGrad)" />
            <rect x="11" y="-12" width="3.2" height="34" rx="1" fill="url(#goldPlateGrad)" />

            {/* Top & Bottom Arrows */}
            <path d="M-10 -12 L0 -17 L10 -12 Z" fill="url(#goldPlateGrad)" />
            <path d="M-10 22 L0 27 L10 22 Z" fill="url(#goldPlateGrad)" />
          </g>

          {/* Central Glass Specular Highlights */}
          <ellipse cx="-20" cy="-25" rx="35" ry="18" transform="rotate(-30 -20 -25)" fill="url(#goldPlateGrad)" opacity="0.22" />
          <circle cx="28" cy="28" r="4" fill="#FFFFFF" opacity="0.4" />
        </g>
      </svg>

      {/* Decorative caption pill beneath emblem */}
      <div className="mt-3 flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-300/80">
        <span className="w-6 h-px bg-gradient-to-r from-transparent to-amber-400" />
        <span>Төрийн Дээд Шагнал</span>
        <span className="w-6 h-px bg-gradient-to-l from-transparent to-amber-400" />
      </div>
    </div>
  );
};
