import React, { useEffect, useState } from "react";

function QuranApp() {
  const [quran, setQuran] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/quran/quran-uthmani")
      .then((res) => res.json())
      .then((data) => {
        setQuran(data.data); // The Quran data is inside data.data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Quran:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading Quran...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">القرآن الكريم</h1>
      {quran.surahs.map((surah) => (
        <div key={surah.number} className="mb-10">
          {/* Surah name */}
          <h2 className="text-2xl font-semibold text-center mb-4">
            ﷽ {surah.englishName} ({surah.name})
          </h2>

          {/* Ayahs */}
          <div
            dir="rtl"
            className="leading-loose text-2xl text-right font-[Scheherazade] tracking-wide"
          >
            {surah.ayahs.map((ayah) => (
              <span key={ayah.numberInSurah} className="ayah mx-2">
                {ayah.text} <span className="text-sm">﴿{ayah.numberInSurah}﴾</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


export default QuranApp;