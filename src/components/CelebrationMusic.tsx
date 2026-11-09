import React, { useState } from 'react';
import { Music, Youtube, ExternalLink, Sparkles, Volume2, Upload } from 'lucide-react';

export const CelebrationMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
  const youtubeVideoId = "KgKpFhxwP7w";
  const youtubeUrl = "https://www.youtube.com/watch?v=KgKpFhxwP7w&list=RDKgKpFhxwP7w&start_radio=1";

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioUrl(url);
      setIsPlaying(true);
    }
  };

  return (
    <section id="music" className="relative py-12 px-4 max-w-4xl mx-auto">
      <div className="glass-gold-card rounded-3xl p-6 sm:p-8 border-gold-glow relative overflow-hidden">
        {/* Golden ambient background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Music className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                  Хүндэтгэлийн Найрын Ая
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[10px]">
                  <Youtube className="w-3 h-3 text-red-400" />
                  <span>Албан ёсны эх дуу</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold-gradient mt-0.5">
                «Дэлгэр найрын хоймор»
              </h3>
              <p className="text-xs text-stone-400">
                МУГЖ Л.Болдбаатар, дуучин А.Мөнхбат
              </p>
            </div>
          </div>

          {/* Quick YouTube Direct Link */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-200 text-xs font-medium transition-all shadow-md self-start sm:self-auto"
          >
            <Youtube className="w-4 h-4 text-red-400" />
            <span>YouTube дээр нээх</span>
            <ExternalLink className="w-3 h-3 text-red-300/80" />
          </a>
        </div>

        {/* Custom MP3 Audio player if user uploaded an MP3 */}
        {customAudioUrl && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-amber-400 animate-bounce" />
              <div>
                <p className="text-xs font-semibold text-amber-200">Таны хуулсан MP3 ая эгшиглэж байна</p>
                <p className="text-[11px] text-stone-400">Шууд төхөөрөмжөөс тоглуулав</p>
              </div>
            </div>
            <audio controls autoPlay src={customAudioUrl} className="w-full sm:w-64 h-8" />
          </div>
        )}

        {/* Embedded Authentic YouTube Player */}
        <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-stone-950">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&enablejsapi=1`}
            title="Дэлгэр найрын хоймор - Хүндэтгэлийн ая"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Note & Custom upload option */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-400 border-t border-amber-500/10 pt-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Дээрх тоглуулагчийн <strong>Play (▶)</strong> товчийг даран жинхэнэ «Дэлгэр найрын хоймор» дууг шууд сонсоорой.</span>
          </div>

          <label className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer shrink-0">
            <Upload className="w-3.5 h-3.5 text-amber-400" />
            <span>Өөрийн MP3 файлаа сонгож тоглуулах</span>
            <input
              type="file"
              accept="audio/mp3,audio/*"
              onChange={handleCustomUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </section>
  );
};
