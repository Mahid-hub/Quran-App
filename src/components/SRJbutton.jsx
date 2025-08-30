import React from "react";

function SJRbutton(props) {
  return (
    <div>
      <div className={`${props.bgClr} py-4 px-4`}>
        <div className="flex flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          {/* Surah Button */}
          <button
            className={`text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
          >
            Surah
          </button>

          {/* Juz Button */}
          <button
            className={`text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
          >
            Juz
          </button>

          {/* Revelation Order Button */}
          <button
            className={`text-lg font-semibold ${props.textClr} focus:underline focus:underline-offset-4`}
          >
            Revelation Order
          </button>
        </div>
        <hr className="border-t border-gray-700 w-auto" />
      </div>
    </div>
  );
}

export default SJRbutton;
