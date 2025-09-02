import React from "react";

function SurahCard({
  number,
  name,
  meaning,
  nameArabic,
  ayahs,
  bg,
  text,
  border = "border-gray-700",
  hoverBorder = "hover:border-[#2ca4ab]",
  diamondBg = "bg-[#343a40]",
  diamondHover = "group-hover:bg-[#2ca4ab]",
  hoverAccent = "group-hover:text-[#2ca4ab]",
  className,
}) {
  return (
    <div
      className={`group ${bg} ${text} border ${border} ${hoverBorder} rounded-md p-4 flex items-center justify-between ${className}`}
    >
      {/* Left: number + name */}
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 ${diamondBg} flex items-center justify-center rounded rotate-45 ${diamondHover}`}
        >
          <span className="font-semibold -rotate-45 group-hover:text-black">
            {number}
          </span>
        </div>

        {/* Names */}
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className={`text-gray-400 text-sm ${hoverAccent}`}>{meaning}</p>
        </div>
      </div>

      {/* Right: Arabic + ayahs */}
      <div className="text-right">
        <h3 className="text-lg">{nameArabic}</h3>
        <p className={`text-gray-400 text-sm ${hoverAccent}`}>{ayahs} Ayahs</p>
      </div>
    </div>
  );
}

export default SurahCard;
