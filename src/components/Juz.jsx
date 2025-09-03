import React, { useState, useEffect } from "react";
import SurahCard from "./SurahCard";

function JuzList() {
  const [juzs, setJuzs] = useState([]);

  useEffect(() => {
    async function fetchJuzData() {
      const promises = [];
      for (let i = 0; i < 30; i++) {
        promises.push(
          fetch(`https://api.alquran.cloud/v1/juz/${i + 1}/quran-uthmani`)
        );
      }

      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map((res) => res.json()));

      const formatted = data.map((item, i) => ({
        juzNumber: i + 1,
        surahs: item.data.surahs
          ? Object.values(item.data.surahs).map((s) => ({
              number: s.number,
              name: s.englishName,
              meaning: s.englishNameTranslation,
              nameArabic: s.name,
              ayahs: s.ayahs,
            }))
          : [],
      }));

      setJuzs(formatted);
    }

    fetchJuzData();
  }, []);

  return (
    <div className="bg-[#1f2125] p-4">
      <div className="grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-4 max-w-[1440px] mx-auto">
        {juzs.map((juz) => (
          <div
            key={juz.juzNumber}
            className="bg-[#2a2d31] h-fit rounded-md p-2 sm:p-6"
          >
            <div className="flex justify-between items-center border-b border-gray-600 mb-5">
              <h2 className="text-lg font-semibold text-white">
                Juz {juz.juzNumber}
              </h2>
              <a href="#" className="text-sm text-white hover:underline">
                Read Juz
              </a>
            </div>

            <div className="space-y-4">
              {juz.surahs.map((surah) => (
                <SurahCard
                  key={`${juz.juzNumber}-${surah.number}`}
                  number={surah.number}
                  name={surah.name}
                  meaning={surah.meaning}
                  nameArabic={surah.nameArabic}
                  ayahs={surah.ayahs}
                  bg="bg-[#1f2125]"
                  text="text-white"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JuzList;
