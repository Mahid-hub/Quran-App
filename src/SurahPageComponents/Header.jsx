import React from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = ({
  title,
  currentPage,
  totalPages,
  currentSurah,
  bgClr,
  textClr,
}) => {
  return (
    <header className={`${bgClr} ${textClr} sticky top-0 z-50 shadow-md`}>
      {/* Header content */}
      <div className="px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-medium">{title}</h1>
          <button className="text-xl">
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div className="text-sm">
          {currentPage} / {totalPages} - Page 1
        </div>
      </div>

      {/* Scroll progress bar under header */}
      <ScrollProgressBar resetTrigger={currentSurah} bgClr={bgClr} />
    </header>
  );
};

export default Header;
