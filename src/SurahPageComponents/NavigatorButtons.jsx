import React, { useState } from "react";
import Button from "../components/Button";

function NavigatorButtons({bgClr, textClr}) {
  const [currentSurah, setCurrentSurah] = useState(1); // starting surah
  const totalSurahs = 114;

  const goToBeginning = () => setCurrentSurah(1);
  const goToPrevious = () => currentSurah > 1 && setCurrentSurah(currentSurah - 1);
  const goToNext = () => currentSurah < totalSurahs && setCurrentSurah(currentSurah + 1);

  return (
    <div className={`${bgClr} flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pb-20 p-4 border-t-[1px] border-gray-500`}>
      {/* Beginning Button */}
      <Button
        text="Beginning of Surah"
        varient="border"
        bgClr={bgClr}
        textClr={textClr}
        height="h-12"
        width="w-44"
        click={goToBeginning}
        className="border border-gray-500 rounded-lg"
      />

      {/* Previous Button (hidden on Surah 1) */}
      {currentSurah > 1 && (
        <Button
          text="Previous Surah"
          varient="border"
          bgClr={bgClr}
          textClr={textClr}
          height="h-12"
          width="w-40"
          click={goToPrevious}
          className="border border-gray-500 rounded-lg"
        />
      )}

      {/* Next Button (hidden on last Surah) */}
      {currentSurah < totalSurahs && (
        <Button
          text="Next Surah →"
          varient="border"
          bgClr={bgClr}
          textClr={textClr}
          height="h-12"
          width="w-40"
          click={goToNext}
          className="border border-gray-500 rounded-lg"
        />
      )}
    </div>
  );
}

export default NavigatorButtons;
