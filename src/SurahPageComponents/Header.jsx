import React, { useEffect, useState } from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = ({
  title,
  currentSurah,
  bgClr,
  textClr,
  juz,
  hizb,
  currentPage,
}) => {
  const [showMeta, setShowMeta] = useState(true); // show/hide juz+hizb
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        // scrolling down → hide meta
        setShowMeta(false);
      } else {
        // scrolling up → show meta
        setShowMeta(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${bgClr} ${textClr} sticky top-0 z-50 shadow-md`}>
      <div className="px-3 md:px-6 md:py-2 flex justify-between items-center">
        {/* Surah Title (left) */}
        <h1 className="text-sm md:text-lg font-semibold font-arabic">{title}</h1>

        {/* Details (right) */}
        <p className="text-xs md:text-sm flex items-center space-x-1">
          <span
            className={`
              flex items-center space-x-1
              transition-all duration-500 ease-in-out
              ${
                showMeta
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }
            `}
          >
            {juz && <span>Juz{juz}</span>}
            {hizb && (
              <>
                <span>/</span>
                <span>Hizb{hizb}</span>
                <span className="font-bold text-2xl">-</span>
              </>
            )}
          </span>
          {currentPage && <span>Page {currentPage}</span>}
        </p>
      </div>

      {/* Scroll progress bar */}
      <ScrollProgressBar
        bgClr={`${bgClr} dark:bg-[#1F2125]`}
        resetTrigger={currentSurah}
      />
    </header>
  );
};

export default Header;
