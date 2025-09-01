import React from "react";
import Button from "./CustomButtons";

function ReadingCard(props) {
  return (
    <div>
      <div
        className={`max-w-full lg:max-w-[50%] rounded-xl py-3 px-6 flex flex-col space-y-4 ${props.bgClr} ${props.textClr}`}
        style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)" }}
      >
        <h2 className="text-3xl text-right">{props.surahNameArabic}</h2>
        <div className="flex justify-between">
          <p className="text-sm md:text-lg font-semibold">
            {props.number}. {props.surahNameEnglish}{" "}
            <span class={`${props.textClr} text-xs font-normal`}>
              ({props.surahNameEnglishTranslation})
            </span>
          </p>
          <Button
            bgClr={props.bgClr == "bg-[#1f2125]" ? "bg-white" : "bg-[#1f2125]"}
            textClr={
              props.textClr == "text-[#1f2125]" ? "text-white" : "text-black"
            }
            varient="border"
            click={() => alert("Button Clicked!")}
            text="Begin"
            className="h-8 w-16 flex justify-center items-center text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default ReadingCard;
