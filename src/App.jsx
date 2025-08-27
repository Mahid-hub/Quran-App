import React from "react";
import Button from "./components/CustomButtons.jsx";
import NavBar from "./components/Navbar.jsx";
import InputField from "./components/InputField.jsx";
import SurahCard from "./components/SurahCard.jsx";

function App() {
  return (
    <>
      <div className="prose bg-gray-500 p-6 space-x-4">
        <Button
          varient="border"
          click={() => alert("Clicked!")}
          text="Navigate Quran"
        />
        <Button
          varient="unborder"
          click={() => alert("Clicked!")}
          text="Non-Border"
        />
      </div>

      <div>
        <NavBar
          title="Quran.com"
          bgClr="bg-[#1f2125]"
          textClr="text-white"
          icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
        />
      </div>

      <div>
        <InputField
          placeHolder="Search the Quran..."
          bgClr="bg-[#2c3237]"
          placeholderClr="text-slate-200"
          textClr="text-slate-400"
        />
      </div>

      <div className="p-2 bg-[#1f2125] mx-auto max-w-[1440px]">
        <a className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <SurahCard
            number={96}
            name="Al-'Alaq"
            meaning="The Clot"
            nameArabic="ٱلْعَلَق"
            ayahs={19}
            bg="bg-[#1f2125]"
            text="text-white"
            border="border-gray-700"
            hoverBorder="hover:border-[#2ca4ab]"
            hoverAccent="group-hover:text-[#2ca4ab]"
            diamondBg="bg-[#2c3237]"
            diamondHover="group-hover:bg-[#2ca4ab]"
          />
        </a>
      </div>
    </>
  );
}

export default App;
