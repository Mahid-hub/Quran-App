import React from "react";
import Button from "./Button";

function QuranInYear({ bgClr, textClr, todayAyah, Translation, Refrence }) {
  return (
    <div
      className={`mx-auto rounded-xl px-4 py-4 text-xl ${bgClr} ${textClr}`}
      style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)" }}
    >
      <p className="text-right">{todayAyah}</p>

      <p>{Translation}</p>

      <p className="text-sm text-[#777777]">{Refrence}</p>

      <div className="flex justify-end">
        <Button
          text="This Week’s Reading >"
          varient="border"
          bgClr="bg-transparent"
          textClr="text-white"
          click={() => (window.location.href = "#")}
          className="text-sm"
        />
      </div>
    </div>
  );
}

export default QuranInYear;
