import React, { useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

const Mp3Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-amber-500 text-black shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {playing ? <Pause size={24} /> : <Play size={24} />}
      </button>

      <div className="fixed bottom-24 right-6 bg-black/80 text-amber-400 px-3 py-2 rounded-xl text-sm border border-amber-500">
        <Music className="inline mr-2" size={16} />
        🎵 Найрын хөгжим
      </div>
    </>
  );
};

export default Mp3Player;