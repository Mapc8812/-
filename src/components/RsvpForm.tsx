import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, User, Phone, Users, MessageSquare, Award, Sparkles, ListFilter, Download, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GuestRSVP } from '../data/invitationData';

export const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'declined'>('attending');
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [rsvps, setRsvps] = useState<GuestRSVP[]>([]);
  const [showHostModal, setShowHostModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Load registered RSVPs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('celebration_rsvps');
      if (stored) {
        setRsvps(JSON.parse(stored));
      } else {
        // Initial sample RSVPs to make host view informative
        const initialSamples: GuestRSVP[] = [
          {
            id: '1',
            name: 'Б.Төмөрбаатар (Хамт олон)',
            phone: '9911-XXXX',
            attendance: 'attending',
            guestCount: 2,
            message: 'Хөдөлмөрийн хүндэт медалиар шагнагдсанд чин сэтгэлийн халуун баяр хүргэе!',
            createdAt: '2026-11-09T01:30:00.000Z'
          },
          {
            id: '2',
            name: 'С.Мөнхжаргал (Ахан дүүс)',
            phone: '8811-XXXX',
            attendance: 'attending',
            guestCount: 3,
            message: 'Эх орондоо хийсэн их бүтээл тань төрийн дээд шагналаар мялаагдсанд баярлаад баршгүй ээ.',
            createdAt: '2026-11-09T02:00:00.000Z'
          }
        ];
        setRsvps(initialSamples);
        localStorage.setItem('celebration_rsvps', JSON.stringify(initialSamples));
      }
    } catch {
      // Ignore
    }
  }, []);

  const triggerCelebrationConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF4D0', '#E6C875', '#AA8222', '#FFFFFF']
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Зочны нэрээ оруулна уу');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Холбогдох утасны дугаараа оруулна уу');
      return;
    }

    const newRsvp: GuestRSVP = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      attendance,
      guestCount: attendance === 'attending' ? guestCount : 0,
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    const updated = [newRsvp, ...rsvps];
    setRsvps(updated);
    try {
      localStorage.setItem('celebration_rsvps', JSON.stringify(updated));
    } catch {
      // storage unavailable fallback
    }

    setIsSubmitted(true);
    setErrorMsg('');
    triggerCelebrationConfetti();
  };

  const totalAttendingGuests = rsvps
    .filter(r => r.attendance === 'attending')
    .reduce((acc, curr) => acc + (curr.guestCount || 1), 0);

  const exportCSV = () => {
    const headers = "Нэр,Утас,Оролцох эсэх,Хүний тоо,Баярын үг\n";
    const rows = rsvps.map(r => 
      `"${r.name}","${r.phone}","${r.attendance === 'attending' ? 'Очиж баяр хүргэнэ' : 'Амжихгүй'}",${r.guestCount},"${(r.message || '').replace(/"/g, '""')}"`
    ).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `RSVP_Zochid_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyGuestList = () => {
    const text = rsvps.map((r, i) => `${i + 1}. ${r.name} (${r.phone}) - ${r.attendance === 'attending' ? `Очино (${r.guestCount} хүн)` : 'Амжихгүй'} ${r.message ? `[${r.message}]` : ''}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs tracking-widest uppercase mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Хүрэлцэн Ирэх Баталгаажуулалт</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient tracking-wide">
          RSVP Бүртгэл
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto">
          Хүлээн авалтын зочдын ширээ, зоог бэлтгэлд зориулан таны ирцийг урьдчилан бүртгэж байна
        </p>
      </div>

      <div className="relative glass-gold-card rounded-3xl p-6 sm:p-10 border-gold-glow">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-300 shadow-lg shadow-amber-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-amber-200">
              Таны бүртгэл амжилттай баталгаажлаа!
            </h3>
            <p className="text-sm text-stone-300 max-w-md mx-auto font-light leading-relaxed">
              Таны ирцийн мэдээллийг хүлээн авлаа. Хүндэтгэлийн найрын өдөр уулзахыг тэсэн ядан хүлээж байна.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="px-5 py-2.5 rounded-full bg-stone-900 border border-stone-700 text-stone-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Өөр зочин бүртгэх
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Attendance Choice Buttons */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-2.5">
                Та найранд оролцох боломжтой юу? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('attending')}
                  className={`p-3.5 rounded-2xl border text-sm font-medium flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                    attendance === 'attending'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md shadow-amber-500/10'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Тийм, бид очиж баяр хүргэнэ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('declined')}
                  className={`p-3.5 rounded-2xl border text-sm font-medium flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                    attendance === 'declined'
                      ? 'bg-stone-800 border-stone-500 text-stone-200'
                      : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <span>Харамсалтай нь амжихгүй</span>
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-1.5">
                Таны нэр (эсвэл гэр бүл, хамт олны нэр) *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Жишээ: Ц.Батболд гэр бүлийн хамт"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900/90 border border-stone-700/80 focus:border-amber-400 focus:outline-none text-stone-100 text-sm placeholder:text-stone-600 transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-1.5">
                Холбоо барих утасны дугаар *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Жишээ: 9911-XXXX"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900/90 border border-stone-700/80 focus:border-amber-400 focus:outline-none text-stone-100 text-sm placeholder:text-stone-600 transition-colors"
                />
              </div>
            </div>

            {/* Guest Count (if attending) */}
            {attendance === 'attending' && (
              <div>
                <label className="block text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-1.5">
                  Хүрэлцэн ирэх зочдын нийт тоо (хүн)
                </label>
                <div className="relative flex items-center">
                  <Users className="w-4 h-4 text-stone-500 absolute left-3.5" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900/90 border border-stone-700/80 focus:border-amber-400 focus:outline-none text-stone-100 text-sm transition-colors cursor-pointer"
                  >
                    <option value={1} className="bg-stone-900">1 хүн (Өөрөө)</option>
                    <option value={2} className="bg-stone-900">2 хүн (Хосоор / Ханьтайгаа)</option>
                    <option value={3} className="bg-stone-900">3 хүн (Гэр бүлээрээ)</option>
                    <option value={4} className="bg-stone-900">4 хүн (Гэр бүлээрээ)</option>
                    <option value={5} className="bg-stone-900">5+ хүн (Хамт олон / Төлөөлөл)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Congratulatory note */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-amber-300/90 font-medium mb-1.5">
                Баярын ерөөл, сэтгэгдэл (Заавал биш)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Шагнагдсан эрхэмд хандаж чин сэтгэлийн ерөөлийн үгс үлдээх..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-900/90 border border-stone-700/80 focus:border-amber-400 focus:outline-none text-stone-100 text-sm placeholder:text-stone-600 transition-colors"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-stone-950 font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-stone-950" />
              <span>Хүрэлцэн ирэх хариу илгээх</span>
            </button>
          </form>
        )}

        {/* Organizer Host Utility link */}
        <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Одоогоор <strong>{totalAttendingGuests}</strong> зочин хүрэлцэн ирэхээ мэдэгдсэн байна.</span>
          </div>

          <button
            onClick={() => setShowHostModal(true)}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Зочдын жагсаалт үзэх</span>
          </button>
        </div>
      </div>

      {/* Organizer Guest List Modal */}
      {showHostModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative glass-gold-card rounded-3xl p-6 sm:p-8 border-gold-glow max-w-2xl w-full max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
              <div>
                <h3 className="text-xl font-serif font-bold text-amber-200">
                  Бүртгэгдсэн Зочдын Жагсаалт
                </h3>
                <p className="text-xs text-stone-400">
                  Нийт ирэх: {totalAttendingGuests} хүн · {rsvps.length} бүртгэл
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyGuestList}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-xs text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  title="Хуулах"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Хуулагдлаа' : 'Хуулах'}</span>
                </button>
                <button
                  onClick={exportCSV}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/40 text-xs text-amber-200 hover:bg-amber-500/30 flex items-center gap-1.5 cursor-pointer"
                  title="CSV татах"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Excel/CSV</span>
                </button>
                <button
                  onClick={() => setShowHostModal(false)}
                  className="w-8 h-8 rounded-full bg-stone-900 text-stone-400 hover:text-white flex items-center justify-center ml-2 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* List */}
            <div className="overflow-y-auto my-4 space-y-2.5 pr-1 max-h-[50vh]">
              {rsvps.length === 0 ? (
                <p className="text-xs text-stone-500 py-6 text-center">Одоогоор бүртгэл хийгдээгүй байна.</p>
              ) : (
                rsvps.map((rsvp, idx) => (
                  <div
                    key={rsvp.id || idx}
                    className="p-3.5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-100 text-sm">{rsvp.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          rsvp.attendance === 'attending'
                            ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300'
                            : 'bg-rose-950 border border-rose-500/40 text-rose-300'
                        }`}>
                          {rsvp.attendance === 'attending' ? `Очино (${rsvp.guestCount} хүн)` : 'Амжихгүй'}
                        </span>
                      </div>
                      <span className="text-stone-400 font-mono mt-0.5 block">{rsvp.phone}</span>
                      {rsvp.message && (
                        <p className="text-stone-300 italic mt-1 font-serif">"{rsvp.message}"</p>
                      )}
                    </div>
                    <span className="text-[10px] text-stone-500 whitespace-nowrap">
                      {new Date(rsvp.createdAt).toLocaleDateString('mn-MN')}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-stone-800 text-right">
              <button
                onClick={() => setShowHostModal(false)}
                className="px-5 py-2 rounded-xl bg-stone-900 text-stone-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
