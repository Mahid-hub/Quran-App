import React, { useRef } from "react";

export default function QuranAudioPlayer() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Surah An-Nas (Alafasy)</h2>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/55.mp3"
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
        >
          ▶ Play
        </button>
        <button
          onClick={handlePause}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
        >
          ⏸ Pause
        </button>
      </div>
    </div>
  );
}
