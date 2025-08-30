import React from "react";
import Button from "./CustomButtons";

function QuranInYear(props) {
  return (
    <div
      className={`mx-auto rounded-xl px-8 space-y-6 ${props.bgClr} ${props.textClr}`}
      style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)" }}
    >
      <p className="text-xl leading-loose text-right">{props.todayAyah}</p>

      <p className="leading-relaxed text-xl">{props.Translation}</p>

      <p className="text-sm text-[#777777]">{props.Refrence}</p>

      <div className="flex justify-end">
        <Button
          text="This Week’s Reading >"
          varient="border"
          bgClr="bg-transparent"
          textClr="text-md text-white"
          className="hover:text-gray-300"
          click={() => {
            window.location.href = "#";
          }}
        />
      </div>
    </div>
  );
}

export default QuranInYear;
