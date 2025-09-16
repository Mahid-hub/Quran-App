import React, { useState, useEffect, useRef } from "react";

const Verse = ({
  verseNumber,
  arabicText,
  translation,
  bgClr,
  textClr,
  source,
  id,
  playingId,
  setPlayingId,
  className,
  ...rest
}) => {
  const handleCopy = () => {
    const textToCopy = `${arabicText}\n\n${translation}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Show a small toast notification
      const toast = document.createElement("div");
      toast.textContent = "Copied to clipboard!";
      toast.className =
        "fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md text-sm animate-fade";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    });
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleClick = () => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.pause();
      setPlayingId(null);
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setPlayingId(id);
      setIsPlaying(true);
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
    <div
      id={id}
      className={`${bgClr} ${textClr} px-2 py-1 md:px-6 md:py-3 ${className || ""}`}
      {...rest}
    >
      <div className={`${bgClr} ${textClr} px-2 md:px-6`}>
        <audio
          ref={audioRef}
          src={source}
          onEnded={() => setPlayingId(null)}
        ></audio>
        <div className="flex items-start space-x-4 max-w-[1100px] mx-auto border-t-[1px] border-gray-500">
          {/* ICONS - LEFT SIDE */}
          <div className="flex-shrink-0">
            <div className="flex flex-col space-y-4 text-gray-500">
              <button
                onClick={handleCopy}
                className="p-2 hover:text-gray-300"
                title="Copy verse"
              >
                <i className="fa-regular fa-copy"></i>
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

              <button className="p-2 hover:text-gray-300" title="More options">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>

          {/* VERSE CONTENT */}
          <div className="flex-1 font-arabic">
            {/* Arabic text */}
            <div className="text-right mt-3">
              <p className="text-base md:text-2xl leading-relaxed mb-2">
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
    </div>
  );
};

export default Verse;
