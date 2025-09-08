import React, { useState, useRef } from "react";
import { Info, Pause, Play } from "lucide-react";

const SurahHeader = ({
  name,
  translation,
  translator,
  onSurahInfo,
  onClick,
  bgClr,
  textClr,
  source,
}) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const toogleClick = () => {
    if (!audioRef.current) {
      return;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
    if (onClick) {
      onClick(!playing);
    }
  };

  return (
    <div className={`${bgClr} ${textClr} px-6 py-8`}>
      <audio
        ref={audioRef}
        src={source}
        onEnded={() => setPlaying(false)}
      ></audio>
      ;<h2 className="text-3xl text-center mb-12">{name}</h2>
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
            onClick={toogleClick}
            className="flex items-center space-x-2 text-[#2ca4ab] hover:bg-[#3e5354]"
          >
            {playing ? (
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
