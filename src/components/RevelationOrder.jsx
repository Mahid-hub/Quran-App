import React, { useState, useEffect } from "react";
import SurahCard from "./SurahCard";

function RevelationOrder() {
  const [surahs, setSurahs] = useState([]);
  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        setSurahs(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#1f2125] min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1440px] mx-auto">
        {surahs.map((surah) => (
          <SurahCard
            key={surah.number} // Always give a key when rendering lists
            number={surah.number}
            name={surah.englishName}
            meaning={surah.englishNameTranslation}
            nameArabic={surah.name}
            ayahs={surah.numberOfAyahs}
            bg="bg-[#1f2125]"
            text="text-white"
          />
        ))}
      </div>
    </div>
  );
}

export default RevelationOrder;
