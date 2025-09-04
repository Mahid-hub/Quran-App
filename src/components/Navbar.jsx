import React from "react";

function NavBar({ title, bgClr, textClr, icons, onIconClick }) {
  return (
    <nav className={`${bgClr} ${textClr} sticky`}>
      <div className="px-4 py-3 flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Title */}
        <a
          className="text-2xl font-bold tracking-wide select-none cursor-pointer"
          onClick={() => location.reload()}
        >
          {title}
        </a>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-6 text-lg">
          {icons.map((icon, i) => (
            <i
              key={i}
              className={`fa-solid ${icon} cursor-pointer`}
              onClick={() => onIconClick && onIconClick(icon, i)}
            ></i>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
