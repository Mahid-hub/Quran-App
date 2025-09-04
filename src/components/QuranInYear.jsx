import React from "react";
import Button from "./Button";

function QuranInYear({ bgClr, textClr, todayAyah, Translation, Refrence }) {
  return (
    <div
      className={`mx-auto rounded-xl px-4 py-4 text-base md:text-xl ${bgClr} ${textClr}`}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
    >
      <p className="text-right">{todayAyah}</p>
      <p>{Translation}</p>
      <p className="text-xs md:text-sm leading-normal text-[#777777]">
        {Refrence}
      </p>

      <div className="flex justify-end">
        <Button
          text="This Week’s Reading >"
          varient="unborder"
          bgClr="bg-transparent"
          textClr="text-black dark:text-white"
          click={() => (window.location.href = "#")}
          className="text-sm"
        />
      </div>
    </div>
  );
}

export default QuranInYear;
