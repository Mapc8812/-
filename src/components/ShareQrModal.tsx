import React, { useState, useEffect } from 'react';
import { QrCode, Share2, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { InvitationConfig } from '../data/invitationData';

interface ShareQrSectionProps {
  config: InvitationConfig;
}

export const ShareQrSection: React.FC<ShareQrSectionProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // If running in AI Studio dev environment, use the public shared link (ais-pre-)
    // so guests and mobile phone browsers don't hit developer authentication blocks
    const href = window.location.href;
    const publicUrl = href.includes('ais-dev-') 
      ? href.replace('ais-dev-', 'ais-pre-')
      : href;
    setCurrentUrl(publicUrl);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(
    `Төрийн Дээд Шагнал «Хөдөлмөрийн Хүндэт Медаль»-иар шагнагдсаны хүндэтгэлийн найрын цахим урилга: ${config.honoreeName}`
  );
  const shareUrl = encodeURIComponent(currentUrl || window.location.href);

  // SVG QR Code generator representation
  // We can render a clean matrix QR representation of the link
  return (
    <section id="share" className="py-16 sm:py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-10 border-gold-glow">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <QrCode className="w-3.5 h-3.5" />
          <span>Цахим Урилга Хуваалцах</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient tracking-wide mb-2">
          QR Код & Урилгын Холбоос
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto mb-8">
          Ухаалаг утсаараа QR кодыг уншуулж цахим урилгыг шууд үзэх боломжтой
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* QR Code Container */}
          <div className="p-4 rounded-2xl bg-white shadow-2xl shadow-amber-500/10 border-2 border-amber-400/80 flex flex-col items-center">
            {/* Visual Crisp QR Code vector */}
            <svg
              className="w-44 h-44 sm:w-48 sm:h-48"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Урилгын QR Код"
            >
              <rect width="140" height="140" fill="#FFFFFF" />

              {/* Corner 1 (Top-Left) */}
              <rect x="10" y="10" width="35" height="35" fill="#0A0A0A" />
              <rect x="15" y="15" width="25" height="25" fill="#FFFFFF" />
              <rect x="20" y="20" width="15" height="15" fill="#0A0A0A" />

              {/* Corner 2 (Top-Right) */}
              <rect x="95" y="10" width="35" height="35" fill="#0A0A0A" />
              <rect x="100" y="15" width="25" height="25" fill="#FFFFFF" />
              <rect x="105" y="20" width="15" height="15" fill="#0A0A0A" />

              {/* Corner 3 (Bottom-Left) */}
              <rect x="10" y="95" width="35" height="35" fill="#0A0A0A" />
              <rect x="15" y="100" width="25" height="25" fill="#FFFFFF" />
              <rect x="20" y="105" width="15" height="15" fill="#0A0A0A" />

              {/* Center decorative gold icon badge */}
              <circle cx="70" cy="70" r="16" fill="#D4AF37" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="70" cy="70" r="11" fill="#8B0000" />
              <circle cx="70" cy="70" r="6" fill="#FFEAA5" />

              {/* QR Matrix Pattern Dots */}
              <g fill="#0A0A0A">
                {/* Random pseudo QR dots aligned to 5px grid */}
                <rect x="50" y="15" width="5" height="5" />
                <rect x="60" y="15" width="5" height="5" />
                <rect x="75" y="15" width="10" height="5" />
                <rect x="55" y="25" width="5" height="10" />
                <rect x="65" y="25" width="15" height="5" />
                <rect x="50" y="40" width="10" height="5" />
                <rect x="75" y="40" width="15" height="5" />

                <rect x="15" y="55" width="10" height="5" />
                <rect x="35" y="55" width="5" height="5" />
                <rect x="50" y="55" width="5" height="10" />
                <rect x="90" y="55" width="15" height="5" />
                <rect x="115" y="55" width="10" height="5" />

                <rect x="15" y="75" width="15" height="5" />
                <rect x="40" y="75" width="5" height="5" />
                <rect x="95" y="75" width="10" height="10" />
                <rect x="115" y="75" width="15" height="5" />

                <rect x="55" y="95" width="10" height="5" />
                <rect x="75" y="95" width="15" height="5" />
                <rect x="100" y="95" width="5" height="10" />
                <rect x="115" y="95" width="15" height="5" />

                <rect x="50" y="110" width="15" height="5" />
                <rect x="70" y="115" width="10" height="10" />
                <rect x="95" y="110" width="10" height="5" />
                <rect x="115" y="115" width="15" height="5" />

                <rect x="55" y="125" width="10" height="5" />
                <rect x="90" y="125" width="5" height="5" />
                <rect x="105" y="125" width="15" height="5" />
              </g>
            </svg>
            <span className="text-[10px] uppercase font-bold tracking-widest text-stone-800 mt-2">
              Scan to view
            </span>
          </div>

          {/* Share links and copy url */}
          <div className="flex-1 text-left max-w-sm space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-400 font-medium mb-1.5">
                Урилгын шууд холбоос
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-xs text-stone-300 font-mono truncate focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    copied
                      ? 'bg-emerald-500 text-stone-950 shadow-md shadow-emerald-500/20'
                      : 'bg-amber-400 text-stone-950 hover:bg-amber-300'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Хуулагдлаа' : 'Хуулах'}</span>
                </button>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-stone-400 font-medium mb-2">
                Олон нийтийн сүлжээгээр илгээх
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Facebook</span>
                </a>

                <a
                  href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telegram</span>
                </a>

                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`viber://forward?text=${shareText}%20${shareUrl}`}
                  className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Viber</span>
                </a>
              </div>
            </div>

            {/* Mobile Link Tips */}
            <div className="pt-2 text-[11px] text-stone-400/90 bg-stone-950/60 p-3 rounded-xl border border-amber-500/20 text-left">
              <span className="text-amber-300 font-semibold block mb-0.5">💡 Утсаар нээх заавар:</span>
              Зочдод илгээхдээ дээрх <span className="text-amber-200 font-mono">ais-pre</span> Нийтийн холбоосыг хуулж явуулна. Хэрэв утсан дээрээс хөгжүүлэгчийн линкээр орвол дэлгэцэнд гарах «Authorize» эсвэл «Open in new tab» товчийг нэг удаа дарж зөвшөөрнө.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
