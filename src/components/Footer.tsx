import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface FooterProps {
  config: InvitationConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-amber-500/20 bg-stone-950/80 text-center overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-t from-amber-500/15 via-amber-600/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Ulzii Knot SVG */}
      <div className="flex justify-center mb-6">
        <svg
          className="w-12 h-12 text-amber-400/80 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 50 20 L 75 45 L 50 70 L 25 45 Z" />
          <path d="M 35 30 L 65 30 L 80 45 L 65 60 L 35 60 L 20 45 Z" />
          <circle cx="50" cy="45" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Core emotional message requested by user */}
      <div className="max-w-2xl mx-auto space-y-3 z-10 relative">
        <p className="text-xl sm:text-3xl font-serif font-bold text-gold-gradient text-gold-glow tracking-wide animate-pulse-glow">
          "Таны хүрэлцэн ирэх нь бидний баярыг улам гэрэлтүүлнэ"
        </p>

        <p className="text-xs sm:text-sm text-stone-400 font-serif italic pt-1">
          Монгол түмний минь хийморь золбоо өнө мөнхөд өөдөө дэлгэрэх болтугай.
        </p>

        {/* Host acknowledgment */}
        <div className="pt-6 pb-2 text-xs text-amber-300/80 flex items-center justify-center gap-1.5 font-light">
          <Heart className="w-3.5 h-3.5 text-amber-500" />
          <span>Гүнээ хүндэтгэсэн: {config.hostFamily}</span>
        </div>
      </div>

      {/* Back to top button */}
      <div className="mt-8 flex justify-center z-10 relative">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-stone-900 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
          aria-label="Хуудасны дээд хэсэг рүү очих"
          title="Дээш очих"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-10 text-[11px] text-stone-600 tracking-wider">
        © 2026 Хөдөлмөрийн Гавьяаны Улаан Тугийн Одонгийн Хүндэтгэлийн Найр · Цахим Урилга
      </div>
    </footer>
  );
};
