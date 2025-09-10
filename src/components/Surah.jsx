import React, { useState, useEffect } from "react";
import SurahCard from "./SurahCard";
import { Link } from "react-router-dom";

function Surah({ bgClr, textClr }) {
  const [surahs, setSurahs] = useState([]);
  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSurahClick = (surah) => {
    const surahData = {
      number: surah.number,
      nameArabic: surah.name,
      nameEnglish: surah.englishName,
      nameEnglishTranslation: surah.englishNameTranslation,
      ayahs: surah.numberOfAyahs,
    };

    localStorage.setItem("lastSurah", JSON.stringify(surahData));
  };

  return (
    <div className={`${bgClr} p-6`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahs.map((surah) => (
          <Link
            key={surah.number}
            to={`/surah/${surah.number}`}
            onClick={() => handleSurahClick(surah)}
          >
            <SurahCard
              number={surah.number}
              name={surah.englishName}
              meaning={surah.englishNameTranslation}
              nameArabic={surah.name}
              ayahs={surah.numberOfAyahs}
              bg={bgClr}
              text={textClr}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Surah;
