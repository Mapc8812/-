import React from 'react';
import { InvitationConfig } from '../data/invitationData';
import { Sparkles, Award, Heart } from 'lucide-react';

interface GreetingProps {
  config: InvitationConfig;
  onEditClick?: () => void;
}

export const Greeting: React.FC<GreetingProps> = ({ config, onEditClick }) => {
  return (
    <section id="greeting" className="relative py-16 sm:py-24 px-4 max-w-4xl mx-auto">
      {/* Decorative Traditional Mongolian Ornament Knot (Өлзий хээний дүрслэл) */}
      <div className="flex justify-center mb-6">
        <svg 
          className="w-16 h-16 text-amber-400/80 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
          role="img"
          aria-label="Өлзий хээ"
        >
          {/* Endless Knot / Khas Ulzii pattern */}
          <path d="M 50 15 L 75 40 L 50 65 L 25 40 Z" />
          <path d="M 50 35 L 75 60 L 50 85 L 25 60 Z" />
          <path d="M 35 25 L 65 25 L 80 40 L 80 60 L 65 75 L 35 75 L 20 60 L 20 40 Z" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Main Greeting Card with Glassmorphic Golden Framing */}
      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-12 text-center border-gold-glow overflow-hidden">
        {/* Subtle corner ornamental brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/60 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/60 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/60 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/60 rounded-br-sm pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-6">
          <Award className="w-3.5 h-3.5" />
          <span>Урилгын Мэндчилгээ</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide mb-6">
          Эрхэм хүндэт таныг хүрэлцэн ирэхийг урьж байна
        </h3>

        {/* Heartfelt Mongolian Prose (Self-Hosted in 1st Person) */}
        <div className="space-y-4 text-stone-200 text-base sm:text-lg leading-relaxed font-serif max-w-2xl mx-auto">
          <p>
            Эрхэм хүндэт ахан дүүс, хамт олон, эрхэм нөхөд та бүхний түмэн амгаланг айлтган мэндчилье.
          </p>
          <p className="text-amber-200/90 italic font-normal">
            «Хүн нэгээр, мод бүлээр өсдөг» хэмээх ардын сайхан үгийн учиг бэлгэдэл мэт, миний бие эх орон, ард түмнийхээ бүтээн байгуулалт, хөгжил дэвшлийн их үйлсэд олон арван жилийн нөр их хөдөлмөр, чин үнэнч зүтгэлээ зориулсныг Монгол Төр маань өндрөөр үнэлж, Төрийн дээд шагнал
            {' '}<span className="text-gold-gradient font-bold">«ХӨДӨЛМӨРИЙН ГАВЬЯАНЫ УЛААН ТУГИЙН ОДОН»</span>-оор шагнасны баярыг хуваалцахаар энэхүү хүндэтгэлийн найрыг зохион байгуулж байна.
          </p>
          <p>
            Ажил амьдралын минь алтан шар замд үргэлж хамт байж, урам дэм, нөхөрлөл сэтгэлээ хайрлаж ирсэн эрхэм хүндэт Таныг
          хувь ерөөлийг бэлгэдэн баярт мөчийг хамтдаа хуваалцах хүндэтгэлийн найранд  хүрэлцэн ирэхийг урьж байна.
          </p>
        </div>

        {/* Traditional Mongolian Verse (Ерөөл) */}
        <div className="mt-8 pt-8 border-t border-amber-500/20 max-w-xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400/70 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Баярын Төрийн Ерөөл</span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>
          <blockquote className="font-serif italic text-sm sm:text-base text-stone-300 leading-relaxed">
            «Ариун цагаан хөдөлмөрийн үр шим нь дэлгэрч,<br />
            Алдар хүнд тань түмний дунд мандан бадарч,<br />
            Айл хотлоороо элбэг баян, эрүүл энх оршиж,<br />
            Төрийн сүлд тань үргэлж өөдөө ивээх болтугай!»
          </blockquote>
        </div>

        {/* Host signature */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-800 text-xs sm:text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-amber-500" />
            <span>Хүндэтгэн урьсан: <strong className="text-stone-200">{config.honoreeName}</strong></span>
          </div>

          {onEditClick && (
            <button
              onClick={onEditClick}
              className="text-amber-400/70 hover:text-amber-300 underline underline-offset-4 text-xs transition-colors cursor-pointer"
            >
              (Урилгын мэдээлэл засах)
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
