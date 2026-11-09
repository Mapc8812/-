import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt, Award } from 'lucide-react';
import { InvitationConfig, EventProgramItem } from '../data/invitationData';

interface EventDetailsProps {
  config: InvitationConfig;
  timeline: EventProgramItem[];
}

export const EventDetails: React.FC<EventDetailsProps> = ({ config, timeline }) => {
  return (
    <section id="details" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Арга Хэмжээний Мэдээлэл</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide">
          Хүндэтгэлийн Найрын Тов & Хөтөлбөр
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
          Төрийн дээд шагнал гардуулах хүндэтгэлийн хүлээн авалтын албан ёсны дараалал
        </p>
      </div>

      {/* 4 Essential Info Cards with Gold Framing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {/* Date */}
        <div className="glass-gold-card glass-gold-card-hover rounded-2xl p-5 border-amber-500/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Огноо</span>
          <p className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-1">
            {config.eventDisplayDate}
          </p>
          <span className="text-xs text-stone-400 mt-0.5">{config.eventDayOfWeek}</span>
        </div>

        {/* Time */}
        <div className="glass-gold-card glass-gold-card-hover rounded-2xl p-5 border-amber-500/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Эхлэх Цаг</span>
          <p className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-1">
            {config.eventDisplayTime}
          </p>
          <span className="text-xs text-stone-400 mt-0.5">Зочдыг 17:00 цагт угтана</span>
        </div>

        {/* Venue */}
        <div className="glass-gold-card glass-gold-card-hover rounded-2xl p-5 border-amber-500/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Байршил</span>
          <p className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-1">
            {config.venueName}
          </p>
          <span className="text-xs text-stone-400 mt-0.5">{config.venueRoom}</span>
        </div>

        {/* Dress code */}
        <div className="glass-gold-card glass-gold-card-hover rounded-2xl p-5 border-amber-500/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400">
            <Shirt className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Дэг Жаяг (Dress Code)</span>
          <p className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-1">
            Үндэсний Дээл
          </p>
          <span className="text-xs text-stone-400 mt-0.5">Эсвэл Dark Formal Suit</span>
        </div>
      </div>

      {/* Program Timeline in Golden Framed Glass Card */}
      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-12 border-gold-glow">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-400" />
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100">
                Хүндэтгэлийн Найрын Хөтөлбөр
              </h3>
              <p className="text-xs text-stone-400">Баярт зориулсан онцгой дэс дараалал</p>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-amber-400/80 font-medium">
            2026.11.21 · 17:00 - 21:00
          </span>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Gold Pin Indicator */}
              <div 
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-amber-400 border-amber-200 shadow-[0_0_12px_rgba(212,175,55,0.8)] scale-110' 
                    : 'bg-stone-900 border-amber-400/60 group-hover:bg-amber-500'
                }`}
              />

              {/* Time pill */}
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-serif font-bold text-lg sm:text-xl text-amber-300 tracking-wider">
                  {item.time}
                </span>
                {item.highlight && (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full">
                    Онцлох ёслол
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h4 className="text-base sm:text-lg font-serif font-semibold text-stone-100 group-hover:text-amber-200 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
