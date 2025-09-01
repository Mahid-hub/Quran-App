import React, { useState } from "react";
import Juz from "./Juz";
import Surah from "./Surah";

function SJRbutton(props) {
  const [activeView, setActiveView] = useState("surah");
  return (
    <div>
      <div className={`${props.bgClr} py-4 px-4`}>
        <div className="flex flex-row space-x-8 max-w-[1440px] mx-auto">
          {/* Surah Button */}
          <button
            className={`text-sm md:text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
            onClick={() => setActiveView("surah")}
          >
            Surah
          </button>

          {/* Juz Button */}
          <button
            className={`text-sm md:text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
            onClick={() => setActiveView("juz")}
          >
            Juz
          </button>

          {/* Revelation Order Button */}
          <button
            className={`text-sm md:text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
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
