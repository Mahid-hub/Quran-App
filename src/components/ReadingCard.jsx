import React from "react";
import Button from "./Button";

function ReadingCard({
  bgClr,
  textClr,
  surahNameArabic,
  number,
  surahNameEnglish,
  surahNameEnglishTranslation,
}) {
  return (
    <div
      className={`max-w-full lg:max-w-[50%] rounded-xl py-3 px-6 flex flex-col space-y-4 ${bgClr} ${textClr}`}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
    >
      <h2 className="text-3xl text-left">{surahNameArabic}</h2>
      <div className="flex justify-between">
        <p className="text-sm md:text-lg font-semibold">
          {number}. {surahNameEnglish}{" "}
          <span className="text-xs font-normal">
            ({surahNameEnglishTranslation})
          </span>
        </p>
        <Button
          bgClr="bg-black dark:bg-white"
          textClr="text-white dark:text-black"
          varient="border"
          click={() => alert("Button Clicked!")}
          text="Begin"
          className="h-8 w-16 flex justify-center items-center text-sm"
        />
      </div>
    </div>
  );
}

export default ReadingCard;
