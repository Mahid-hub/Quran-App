import React from "react";

function Languages({ bgClr = "bg-[#1f2125]", textClr = "text-white" }) {
  const languages = [
    "فارسی",
    "Français",
    "Indonesia",
    "Italiano",
    "Dutch",
    "Português",
    "русский",
    "Shqip",
    "ภาษาไทย",
    "Türkçe",
    "اردو",
    "简体中文",
    "Melayu",
    "Español",
  ];

  return (
    <div className={`${bgClr} ${textClr} w-48 p-2 space-y-2`}>
      {languages.map((lang, index) => (
        <a
          key={index}
          href="#"
          className="block px-2 py-1 hover:bg-gray-500"
        >
          {lang}
        </a>
      ))}
    </div>
  );
}

export default Languages;
