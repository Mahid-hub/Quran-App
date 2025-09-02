import React from "react";
import SurahCard from "./SurahCard";

function Surah() {
  // Example: making 114 cards
  const surahs = [];
  for (let i = 0; i < 114; i++) {
    surahs.push(
      <SurahCard
        key={i} // Always give a key when rendering lists
        number={i + 1}
        name="Al-'Alaq"
        meaning="The Clot"
        nameArabic="ٱلْعَلَق"
        ayahs={19}
        bg="bg-[#1f2125]"
        text="text-white"
      />
    );
  }

  return (
    <div className="bg-[#1f2125] min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1440px] mx-auto">
        {surahs}
      </div>
    </div>
  );
}

export default Surah;
