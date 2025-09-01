import React from "react";
import Button from "./CustomButtons";

function QuranInYear(props) {
  return (
    <div
      className={`mx-auto rounded-xl px-2 py-2 md:px-4 md:py-4 space-y-6 ${props.bgClr} ${props.textClr}`}
      style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)" }}
    >
      <p className="text-base md:text-xl leading-loose text-right">
        {props.todayAyah}
      </p>

      <p className="leading-loose text-base md:text-xl">{props.Translation}</p>

      <p className="text-xs md:text-sm text-[#777777]">{props.Refrence}</p>

      <div className="flex justify-end">
        <Button
          text="This Week’s Reading >"
          varient="border"
          bgClr="bg-transparent"
          textClr="text-md text-white"
          className="hover:text-gray-300 text-sm md:text-inherit"
          click={() => {
            window.location.href = "#";
          }}
        />
      </div>
    </div>
  );
}

export default QuranInYear;
