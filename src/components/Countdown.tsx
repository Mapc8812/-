import React, { useState, useEffect } from 'react';
import { Clock, CalendarPlus } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface CountdownProps {
  config: InvitationConfig;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({ config }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(config.eventDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [config.eventDate]);

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Хөдөлмөрийн Гавьяаны Улаан Тугийн Одонгийн хүндэтгэлийн найр - ${config.honoreeName}`);
    const details = encodeURIComponent(`Монгол Улсын Хөдөлмөрийн гавьяаны улаан тугийн одонгоор шагнагдсаны хүндэтгэлийн найр.\nБайршил: ${config.venueName}, ${config.venueRoom}\nДэг жаяг: ${config.dressCode}`);
    const location = encodeURIComponent(`${config.venueName}, ${config.venueAddress}`);
    
    // Formatting event dates (20261121T090000Z format approx)
    const startDate = new Date(config.eventDate);
    const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000); // 5 hours duration
    const formatCalDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${formatCalDate(startDate)}/${formatCalDate(endDate)}`;
  };

  const timerItems = [
    { label: 'ӨДӨР', value: timeLeft.days },
    { label: 'ЦАГ', value: timeLeft.hours },
    { label: 'МИНУТ', value: timeLeft.minutes },
    { label: 'СЕКУНД', value: timeLeft.seconds }
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-10 border-gold-glow text-center">
        {/* Glow backdrop */}
        <div 
          className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent rounded-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="flex items-center justify-center gap-2 text-amber-400 text-xs sm:text-sm font-medium tracking-widest uppercase mb-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Найр Эхлэх Хүртэл</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif text-stone-100 mb-8 font-medium">
          {timeLeft.isPast 
            ? "Хүндэтгэлийн найр амжилттай зохион байгуулагдлаа!" 
            : `${config.eventDisplayDate} · ${config.eventDisplayTime}`}
        </h3>

        {/* 4 Countdown blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {timerItems.map((item, index) => (
            <div
              key={index}
              className="relative p-4 sm:p-6 rounded-2xl bg-stone-950/70 border border-amber-500/30 flex flex-col items-center justify-center group hover:border-amber-400/60 transition-all duration-300"
            >
              {/* Gold corner accent */}
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-amber-400/50" />
              
              <span className="text-3xl sm:text-5xl font-bold font-serif tabular-nums text-gold-gradient group-hover:scale-105 transition-transform">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest uppercase text-stone-400 font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar button */}
        <div className="mt-8 flex justify-center">
          <a
            href={createGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-200 hover:text-amber-100 text-xs sm:text-sm font-medium transition-all duration-200"
          >
            <CalendarPlus className="w-4 h-4 text-amber-400" />
            <span>Google Календарт тэмдэглэх</span>
          </a>
        </div>
      </div>
    </section>
  );
};
