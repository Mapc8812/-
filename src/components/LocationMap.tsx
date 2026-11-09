import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Car, PhoneCall } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface LocationMapProps {
  config: InvitationConfig;
}

export const LocationMap: React.FC<LocationMapProps> = ({ config }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Direct navigation links
  const googleMapsUrl = config.mapDirectionsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.venueName + ' ' + config.venueAddress)}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(config.venueName)}&address=${encodeURIComponent(config.venueAddress)}`;

  return (
    <section id="location" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Найрын Байршил</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide">
          Хүлээн Авах Газар & Зам Заалт
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
          {config.venueName} · {config.venueRoom}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Venue Info Card */}
        <div className="lg:col-span-5 glass-gold-card rounded-3xl p-6 sm:p-8 border-gold-glow flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-amber-400/80 font-medium">Танхим</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 mt-1">
                {config.venueName}
              </h3>
              <p className="text-sm text-amber-300/90 font-medium mt-0.5">
                {config.venueRoom}
              </p>
            </div>

            <div className="pt-4 border-t border-amber-500/20 space-y-3">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.venueAddress}</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Зочдод зориулсан B1, B2 дулаан зогсоол чөлөөтэй</span>
              </div>
            </div>

            {/* Contact Phones */}
            <div className="pt-4 border-t border-amber-500/20">
              <span className="text-[11px] uppercase tracking-widest text-stone-400 font-medium block mb-2">
                Холбоо барих утас:
              </span>
              <div className="flex flex-wrap gap-2">
                {config.contactPhones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-300 hover:border-amber-500/50 text-xs font-mono transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Directions Navigation Buttons */}
          <div className="pt-6 mt-6 border-t border-amber-500/20 space-y-2.5">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
            >
              <Navigation className="w-4 h-4" />
              <span>Google Maps-ээр зам заалгах</span>
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-stone-900/80 border border-stone-700/60 text-stone-300 hover:text-white hover:border-amber-400/50 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Apple Maps дээр нээх</span>
            </a>
          </div>
        </div>

        {/* Right Map Embed Frame */}
        <div className="lg:col-span-7 glass-gold-card rounded-3xl overflow-hidden border-gold-glow relative min-h-[320px] sm:min-h-[420px]">
          {!mapLoaded && (
            <div className="absolute inset-0 bg-stone-950/70 flex flex-col items-center justify-center text-amber-400 gap-2">
              <Compass className="w-8 h-8 animate-spin" />
              <span className="text-xs tracking-wider">Газрын зураг ачаалж байна...</span>
            </div>
          )}
          <iframe
            title="Google Maps Location"
            src={config.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '340px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};
