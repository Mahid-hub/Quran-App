import React, { useEffect, useState } from "react";

function ScrollProgressBar({ resetTrigger, bgClr }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset progress when Surah changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setProgress(0);
  }, [resetTrigger]);

  return (
    <div className={`w-full h-1 ${bgClr}`}>
      <div
        className="h-1 bg-[#2ca4ab] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
