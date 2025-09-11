import React, { useState, useEffect, useRef } from "react";
import { Info } from "lucide-react";

const SurahHeader = ({
  name,
  translator,
  onSurahInfo,
  bgClr,
  textClr,
  source,
  id,
  playingId,
  setPlayingId,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const toggleClick = () => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setPlayingId(null);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setPlayingId(id);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (playingId !== id && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [playingId, id]);

  return (
    <div className={`${bgClr} ${textClr} px-6 py-8`}>
      <audio
        ref={audioRef}
        src={source}
        onEnded={() => setPlayingId(null)}
      ></audio>
      <h2 className="text-3xl text-center mb-12 font-arabic">{name}</h2>
      <div className="flex justify-around items-center">
        <div className="text-sm">
          <p className="text-gray-400">Translation by</p>
          <p>
            {translator}
            <span className="text-[#2ca4ab] ml-1 cursor-pointer hover:underline">
              (Change)
            </span>
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onSurahInfo}
            className="flex items-center space-x-2 hover:text-gray-500"
          >
            <Info size={20} />
            <span>Surah Info</span>
          </button>
          <button
            onClick={toggleClick}
            className="flex items-center space-x-2 text-[#2ca4ab] hover:bg-[#3e5354]"
          >
            {isPlaying ? (
              <>
                {" "}
                <i className="fa-solid fa-pause"></i> <span>Pause Audio</span>
              </>
            ) : (
              <>
                {" "}
                <i className="fa-solid fa-play"></i> <span>Play Audio</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurahHeader;
