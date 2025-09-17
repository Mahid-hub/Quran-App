import React from "react";
import { useTranslation } from "react-i18next";

function Languages({ bgClr = "bg-[#1f2125]", textClr = "text-white", onSelected }) {
  const { i18n } = useTranslation();

  const options = [
    { label: "English", code: "en" },
    { label: "اردو", code: "ur" },
  ];

  const handleSelect = (code) => {
    if (code && code !== i18n.language) {
      i18n.changeLanguage(code);
    }
    if (onSelected) onSelected(code);
  };

  return (
    <div className={`${bgClr} ${textClr} w-40 p-2 rounded-md shadow-lg border border-gray-600 space-y-1`}>
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => handleSelect(opt.code)}
          className={`w-full text-left px-2 py-1 rounded hover:bg-gray-500 ${i18n.language === opt.code ? "font-semibold" : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default Languages;
