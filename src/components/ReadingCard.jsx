import React from "react";
import Button from "./CustomButtons";

function ReadingCard(props) {
  return (
    <div>
      <div
        className={`max-w-[50%] rounded-xl p-6 flex flex-col space-y-4 ${props.bgClr} ${props.textClr}`}
        style={{ boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)" }}
      >
        <h2 className="text-3xl text-right">{props.surahNameArabic}</h2>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            {props.number}. {props.surahNameEnglish}{" "}
            <span class={`${props.textClr} font-normal`}>
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
          />
        </div>
      </div>
    </div>
  );
}

export default ReadingCard;
