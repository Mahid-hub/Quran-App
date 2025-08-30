import React, { useEffect, useState } from "react";
import Button from "./components/CustomButtons.jsx";
import NavBar from "./components/Navbar.jsx";
import InputField from "./components/InputField.jsx";
import Surah from "./components/Surah.jsx";
import PageFooter from "./components/PageFooter.jsx";
import ReadingCard from "./components/ReadingCard.jsx";
import SJRbutton from "./components/SRJbutton.jsx";
import QuranInYear from "./components/QuranInYear.jsx";

function App() {
  return (
    <>
      {/* Navbar */}
      <div>
        <NavBar
          title="Quran.com"
          bgClr="bg-[#1f2125]"
          textClr="text-white"
          icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
        />
      </div>
      {/* input field */}
      <div className="bg-black text-white flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-bold py-8">Quran.com</h1>
        <InputField
          placeHolder="Search the Quran..."
          bgClr="bg-[#495057]"
          placeholderClr="placeholder-white"
          textClr="text-white"
        />
        <div className="mt-6 mb-10">
          <Button
            bgClr="bg-[#1f2125]"
            textClr="text-white"
            varient="border"
            click={() => alert("Button Clicked!")}
            text="Navigate Quran"
          />
        </div>
      </div>
      {/* Reading Card  */}
      <div className="bg-[#1f2125] py-5">
        <div className="flex justify-between px-3">
          <h2 className="font-bold text-4xl text-white">Continue Reading</h2>
          <Button
            textClr="text-white"
            varient="unborder"
            click={() => alert("Button Clicked!")}
            text="My Quran"
            className="text-xl"
          />
        </div>
        <div className="p-5">
          <ReadingCard
            number={1}
            surahNameArabic="ٱلْفَاتِحَة"
            surahNameEnglish="Al-Fatiha"
            surahNameEnglishTranslation="The Opening"
            bgClr="bg-[#1f2125]"
            textClr="text-white"
          />
        </div>
      </div>
      {/* Quran In Year  */}
      <div className="bg-[#1f2125] py-5">
        <div className="flex justify-between px-3">
          <h2 className="font-bold text-3xl text-white">Quran in a Year</h2>
          <Button
            textClr="text-white"
            varient="unborder"
            click={() => alert("Button Clicked!")}
            text={
              <>
                <i className="fa-solid fa-calendar-days"></i> Calendar
              </>
            }
            className="text-xl"
          />
        </div>
        <div className="p-5">
          <QuranInYear
            todayAyah="وَيُسَبِّحُ ٱلرَّعۡدُ بِحَمۡدِهِۦ وَٱلۡمَلَٰٓئِكَةُ مِنۡ خِيفَتِهِۦ وَيُرۡسِلُ ٱلصَّوَٰعِقَ فَيُصِيبُ بِهَا مَن يَشَآءُ وَهُمۡ يُجَٰدِلُونَ فِي ٱللَّهِ وَهُوَ شَدِيدُ ٱلۡمِحَالِ (١٣)"
            Translation="The thunder glorifies His praises, as do the angels in awe of Him. He sends thunderbolts, striking with them whoever He wills. Yet they dispute about Allah. And He is tremendous in might."
            Refrence="— Dr. Mustafa Khattab, The Clear Quran"
            bgClr="bg-[#1f2125]"
            textClr="text-white"
          />
        </div>
      </div>
      {/* SRJ Button  */}
      <div>
        <SJRbutton bgClr="bg-[#1f2125]" textClr="text-white" />
      </div>
      {/* surah card  */}
      <div>
        <Surah />
      </div>
      {/* footer  */}
      <div>
        <PageFooter bgClr="bg-[#1f2125]" textClr="text-white" />
      </div>
    </>
  );
}

export default App;
