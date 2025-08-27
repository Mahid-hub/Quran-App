import React from "react";

function SurahCard(props) {
  return (
    <div
      className={`group ${props.bg} ${props.text} border ${props.border} ${props.hoverBorder} rounded-md p-4 flex items-center justify-between ${props.className}`}
    >
      {/* Left: number + name */}
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 ${props.diamondBg} flex items-center justify-center rounded transform rotate-45 ${props.diamondHover}`}
        >
          <span className="transform -rotate-45 font-semibold group-hover:text-black">
            {props.number}
          </span>
        </div>

        {/* Names */}
        <div>
          <h3 className="font-semibold">{props.name}</h3>
          <p className={`text-gray-400 text-sm ${props.hoverAccent}`}>
            {props.meaning}
          </p>
        </div>
      </div>

      {/* Right: Arabic + ayahs */}
      <div className="text-right">
        <h3 className="text-lg">{props.nameArabic}</h3>
        <p className={`text-gray-400 text-sm ${props.hoverAccent}`}>
          {props.ayahs} Ayahs
        </p>
      </div>
    </div>
  );
}

export default SurahCard;
