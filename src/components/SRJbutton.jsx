import React, { useState } from "react";
import Juz from "./Juz";
import Surah from "./Surah";

function SJRbutton({ bgClr, textClr }) {
  const [activeView, setActiveView] = useState("surah");
  const defaultStyle = `text-sm md:text-lg font-semibold ${textClr}`;

  return (
    <div>
      <div className={`${bgClr} py-4 px-4`}>
        <div className="flex flex-row space-x-8 max-w-[1440px] mx-auto">
          {/* Surah Button */}
          <button
            className={`${defaultStyle} ${
              activeView === "surah" ? "underline underline-offset-4" : ""
            }`}
            onClick={() => setActiveView("surah")}
          >
            Surah
          </button>

          {/* Juz Button */}
          <button
            className={`${defaultStyle} ${
              activeView === "juz" ? "underline underline-offset-4" : ""
            }`}
            onClick={() => setActiveView("juz")}
          >
            Juz
          </button>

          {/* Revelation Order Button */}
          <button
            className={`${defaultStyle} ${
              activeView === "revelation" ? "underline underline-offset-4" : ""
            }`}
            onClick={() => setActiveView("revelation")}
          >
            Revelation Order
          </button>
        </div>
        <hr className="border-t border-gray-700 w-auto" />
      </div>

      <div>
        {activeView === "surah" && <Surah />}
        {activeView === "juz" && <Juz />}
        {activeView === "revelation" && <Surah />}
      </div>
    </div>
  );
}

export default SJRbutton;
