import React from "react";

function NavBar(props) {
  NavBar.defaultProps = {
    title: "Quran.com",
    bgClr: "bg-[#1f2125]",
    textClr: "text-white",
    icons: ["fa-globe", "fa-gear", "fa-magnifying-glass"],
  };
  return (
    <>
      <nav className={`${props.bgClr} ${props.textClr}`}>
        <div className="px-4 py-3 flex items-center justify-between w-full max-w-[1440px] mx-auto">
          {/* Title */}
          <div>
            <a className="text-xl md:text-2xl font-bold tracking-wide">
              {props.title}
            </a>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-8 text-lg">
            {props.icons.map((icon, i) => (
              <i key={i} className={`fa-solid ${icon} cursor-pointer`}></i>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
