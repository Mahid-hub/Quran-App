import React, { useState } from "react";
import Juz from "./Juz";
import Surah from "./Surah";
import RevelationOrder from "./RevelationOrder";

function SJRbutton({ bgClr, textClr }) {
  const [activeView, setActiveView] = useState("surah");
  const defaultStyle = `text-sm md:text-lg font-semibold ${textClr}`;

  return (
    <div>
      <div className={`${bgClr} p-4`}>
        <div className="flex flex-row space-x-5 max-w-[1440px] mx-auto">
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
        {activeView === "surah" && <Surah bgClr={bgClr} textClr={textClr} />}
        {activeView === "juz" && <Juz bgClr={bgClr} textClr={textClr} />}
        {activeView === "revelation" && <RevelationOrder bgClr={bgClr} textClr={textClr} />}
      </div>
    </div>
  );
}
export default SJRbutton;