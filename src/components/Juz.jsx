import React from "react";
import SurahCard from "./SurahCard";

function Juz() {
  const Juzs = [];
  for (let i = 0; i < 30; i++) {
    Juzs.push(
      <SurahCard
        key={i} // Always give a key when rendering lists
        number={i + 1}
        name="Juz"
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
        {Juzs}
      </div>
    </div>
  );
}

export default Juz;
