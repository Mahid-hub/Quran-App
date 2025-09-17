import React, { useState } from "react";
import { Link } from "react-router-dom";
import Languages from "./Languages";

function NavBar({ title, bgClr, textClr, icons, onIconClick }) {
  const [showLanguage, setShowLanguage] = useState(false);

  const handleIcon = (icon, i) => {
    if (icon === "fa-globe") {
      setShowLanguage((v) => !v);
      return;
    }
    onIconClick && onIconClick(icon, i);
  };

  return (
    <nav className={`${bgClr} ${textClr} sticky`}>
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Title */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide select-none cursor-pointer"
        >
          {title}
        </Link>

        {/* Icons */}
        <div className="relative flex items-center gap-3 md:gap-6 text-lg">
          {icons.map((icon, i) => (
            <i
              key={i}
              className={`fa-solid ${icon} cursor-pointer`}
              onClick={() => handleIcon(icon, i)}
            ></i>
          ))}
          {showLanguage && (
            <div className="absolute top-full right-0 mt-2 z-50">
              <Languages
                bgClr={bgClr}
                textClr={textClr}
                onSelected={() => setShowLanguage(false)}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
