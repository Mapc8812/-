import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface EventDetailsProps {
  config: InvitationConfig;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ config }) => {
  return (
    <section id="details" className="py-16 sm:py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl font-serif font-bold text-gold-gradient mb-8">
        Хүндэтгэлийн Найрын Мэдээлэл
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

        <div className="glass-gold-card glass-gold-card-hover rounded-2xl p-5 border-amber-500/30 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center mb-3 text-amber-400">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Эхлэх цаг</span>
          <p className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-1">
            {config.eventDisplayTime}
          </p>
        </div>

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
      </div>
    </section>
  );
};