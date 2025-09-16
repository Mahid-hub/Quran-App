import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ReadingCard({ bgClr, textClr }) {
  const [lastSurah, setLastSurah] = useState(null);

  useEffect(() => {
    const getDefault = () => ({
      number: 1,
      nameArabic: "ٱلْفَاتِحَة",
      nameEnglish: "Al-Fatiha",
      nameEnglishTranslation: "The Opening",
      ayahs: 7,
    });

    try {
      const stored = localStorage.getItem("lastSurah");
      if (!stored) {
        setLastSurah(getDefault());
        return;
      }

      const parsed = JSON.parse(stored);
      const normalized = {
        number: parsed.number,
        nameArabic: parsed.nameArabic || parsed.name,
        nameEnglish: parsed.nameEnglish || parsed.englishName,
        nameEnglishTranslation: parsed.nameEnglishTranslation || parsed.englishNameTranslation,
        ayahs: parsed.ayahs || parsed.numberOfAyahs,
      };

      setLastSurah(normalized.number ? normalized : getDefault());
    } catch {
      setLastSurah(getDefault());
    }
  }, []);

  // If no lastSurah exists yet
  if (!lastSurah) {
    return null;
  }

  // If lastSurah exists, show it
  return (
    <div
      className={`max-w-full lg:max-w-[50%] rounded-xl py-3 px-6 flex flex-col space-y-4 ${bgClr} ${textClr}`}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
    >
      <h2 className="text-2xl text-left font-arabic">{lastSurah.nameArabic}</h2>
      <div className="flex justify-between items-center">
        <p className="text-sm md:text-lg font-semibold">
          {lastSurah.number}. {lastSurah.nameEnglish}{" "}
          <span className="text-xs font-normal">
            {lastSurah.nameEnglishTranslation}
          </span>
        </p>
        <Link to={`/surah/${lastSurah.number}`}>
          <Button
            bgClr="bg-black dark:bg-white"
            textClr="text-white dark:text-black"
            varient="border"
            click={() => {}}
            text="Begin"
            className="h-8 w-20 flex justify-center items-center text-sm"
          />
        </Link>
      </div>
    </div>
  );
}

export default ReadingCard;
