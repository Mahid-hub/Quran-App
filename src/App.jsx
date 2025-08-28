import React from "react";
import Button from "./components/CustomButtons.jsx";
import NavBar from "./components/Navbar.jsx";
import InputField from "./components/InputField.jsx";
import Surah from "./components/Surah.jsx";
import PageFooter from "./components/PageFooter.jsx";

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
      {/* surah card  */}
      <div>
        <Surah />
      </div>
      {/* footer  */}
      <div>
        <PageFooter bgClr="bg-[#1f2125]"  textClr="text-white" />
      </div>
    </>
  );
}

export default App;
