import React from 'react';
import { MongolianEmblem } from './MongolianEmblem';
import { Calendar, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface HeroProps {
  config: InvitationConfig;
  onOpenRsvp: () => void;
  onOpenDetails: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenRsvp, onOpenDetails }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Background radial gold glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] bg-gradient-to-b from-amber-500/20 via-amber-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Traditional Mongolian Border Elements on top */}
      <div className="flex items-center gap-3 mb-6 opacity-75">
        <span className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-amber-400/90 text-sm tracking-widest font-serif uppercase">
          Монгол Төрийн Хүндэтгэл
        </span>
        <span className="w-12 sm:w-24 h-px bg-gradient-to-l from-transparent to-amber-400" />
      </div>

      {/* Central Golden Order of the Red Banner of Labour */}
      <div className="relative animate-float-gentle my-3 z-10 flex flex-col items-center">
        <div 
          className="absolute -inset-6 bg-radial from-amber-400/40 via-amber-600/20 to-transparent blur-3xl rounded-full animate-pulse-glow pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative group">
          <img
            src="/assets/aistudio/image_46c61168.png"
            alt="Монгол Улсын Хөдөлмөрийн гавьяаны улаан тугийн одон"
            className="w-52 h-52 sm:w-64 sm:h-64 object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)] drop-shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-transform duration-500 hover:scale-105 select-none"
          />
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-300/90">
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-amber-400" />
          <span>Төрийн Дээд Одон</span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-amber-400" />
        </div>
      </div>

      {/* Main Titles */}
      <div className="max-w-3xl mx-auto mt-5 z-10 space-y-3">
        <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-amber-300/80 font-medium">
          Монгол Улсын Ерөнхийлөгчийн зарлигаар хүртээсэн
        </p>
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif tracking-wide text-gold-gradient text-gold-glow uppercase">
          ХӨДӨЛМӨРИЙН ГАВЬЯАНЫ УЛААН ТУГИЙН ОДОН
        </h1>

        <div className="relative py-2">
          <div className="inline-block relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-200 tracking-wide font-normal">
              Хүндэтгэлийн Найрын Цахим Урилга
            </h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400/80 to-transparent mt-2" />
          </div>
        </div>

        {/* Honoree Name & Role Presentation */}
        <div className="pt-2 pb-1">
          <p className="text-xs sm:text-sm text-stone-400 tracking-wider">Шагнагдсан:</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100 tracking-wide mt-1">
            {config.honoreeName}
          </p>
          <p className="text-xs sm:text-sm text-amber-300/70 max-w-xl mx-auto mt-1 font-light">
            {config.honoreeRole}
          </p>
        </div>
      </div>

      {/* Fast event quick-strip metadata */}
      <div className="mt-8 z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-stone-300/90 font-light max-w-2xl px-4 py-3 rounded-2xl glass-gold-card">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>{config.eventDisplayDate} · {config.eventDisplayTime}</span>
        </div>
        <span className="hidden sm:inline text-amber-500/40">|</span>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span className="truncate max-w-[240px] sm:max-w-none">{config.venueName}</span>
        </div>
      </div>

      {/* Primary Hero Actions */}
      <div className="mt-8 z-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onOpenRsvp}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
        >
          <CheckCircle2 className="w-5 h-5 text-stone-950" />
          <span>Хүрэлцэн ирэхээ мэдэгдэх (RSVP)</span>
        </button>

        <button
          onClick={onOpenDetails}
          className="px-6 py-3.5 rounded-full glass-gold-card text-stone-200 hover:text-amber-300 hover:border-amber-400/60 font-medium text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>Дэлгэрэнгүй хөтөлбөр</span>
          <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
        </button>
      </div>

      {/* Scroll down indicator */}
      <a 
        href="#greeting"
        className="mt-12 text-stone-500 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 text-xs tracking-widest uppercase z-10"
      >
        <span>Доош гүйлгэх</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
