import React, { useState, useRef } from "react";

const Verse = ({
  verseNumber,
  arabicText,
  translation,
  onCopy,
  onBookmark,
  bgClr,
  textClr,
  source,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleClick = () => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={`${bgClr} ${textClr} px-6 py-6`}>
      <audio
        ref={audioRef}
        src={source}
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <div className="flex items-start space-x-4 max-w-[1100px] mx-auto border-t-[1px] border-gray-500">
        {/* ICONS - LEFT SIDE */}
        <div className="flex-shrink-0">
          <div className="flex flex-col space-y-4 text-gray-500">
            <button
              onClick={() => onCopy(verseNumber)}
              className="p-2 hover:text-gray-300"
              title="Copy verse"
            >
              <i class="fa-regular fa-copy"></i>
            </button>

            <button
              onClick={() => onBookmark(verseNumber)}
              className="p-2 hover:text-gray-300"
              title="Bookmark verse"
            >
              <i class="fa-regular fa-bookmark"></i>
            </button>

            <button
              onClick={toggleClick}
              className="p-2 hover:text-gray-300"
              title="Play verse"
            >
              {isPlaying ? (
                <>
                  {" "}
                  <i className="fa-regular fa-circle-pause"></i>
                </>
              ) : (
                <>
                  {" "}
                  <i className="fa-regular fa-circle-play"></i>
                </>
              )}
            </button>

            <button className="p-2 hover:text-gray-300" title="Comment">
              <i class="fa-regular fa-message"></i>
            </button>

            <button className="p-2 hover:text-gray-300" title="More options">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>

        {/* VERSE CONTENT */}
        <div className="flex-1 font-arabic">
          {/* Arabic text */}
          <div className="text-right mt-3">
            <p className="text-2xl leading-relaxed mb-2">
              {arabicText} <span className="text-base">﴿{verseNumber}</span>
            </p>
          </div>

          {/* Translation */}
          <div className="text-left">
            <p className="leading-relaxed mb-4">{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verse;
