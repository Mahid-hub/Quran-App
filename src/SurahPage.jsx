import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Header from "./SurahPageComponents/Header.jsx";
import NavigationTabs from "./SurahPageComponents/NavigationTabs.jsx";
import SurahHeader from "./SurahPageComponents/SurahHeader.jsx";
import Verse from "./SurahPageComponents/Verse.jsx";
import PageFooter from "./components/PageFooter.jsx";
import ReadingView from "./SurahPageComponents/ReadingView.jsx";
import NavigatorButtons from "./SurahPageComponents/NavigatorButtons.jsx";
import Theme from "./components/Theme.jsx";
import {
  headerData,
  tabs,
  surahData,
  verses,
  surahs,
} from "./dummy data/datadummyData.jsx";

function SurahPage() {
  const { toggleTheme } = Theme();
  const [activeTab, setActiveTab] = useState("translation");

  // Event handlers (placeholder for future features)
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    console.log(`Switched to ${tabId} tab`);
  };

  const handleClick = (playing) => {
    console.log("Audio is now:", playing ? "Playing" : "Paused");
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-[#1f2125]">
        <div className="max-w-[1440px] mx-auto">
          <NavBar
            title="Quran.com"
            bgClr="bg-white dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
            icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
            onIconClick={(icon) => {
              if (icon === "fa-globe") {
                alert("Switch Language");
              } else if (icon === "fa-gear") {
                alert("Open Settings");
              } else if (icon === "fa-magnifying-glass") {
                alert("Search something");
              }
            }}
          />

          <div className="bg-gray-900">
            <Header
              bgClr="bg-gray-200 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              title={headerData.title}
              currentPage={headerData.currentPage}
              totalPages={headerData.totalPages}
              currentAyah={surahs.id}
            />

            <NavigationTabs
              bgClr="bg-gray-100 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            <SurahHeader
              bgClr="bg-gray-100 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              name={surahData.name}
              translation={surahData.translation}
              translator={surahData.translator}
              onSurahInfo={() => console.log("Show surah info")}
              onClick={handleClick}
              source="./public/audio/SurahFatiha.mp3"
            />

            <div>
              {activeTab === "translation" ? (
                verses.map((verse) => (
                  <Verse
                    bgClr="bg-gray-100 dark:bg-[#1f2125]"
                    textClr="text-black dark:text-white"
                    key={verse.number}
                    verseNumber={verse.number}
                    arabicText={verse.arabic}
                    translation={verse.translation}
                    onPlay={() => console.log(`Play verse ${verseNumber}`)}
                    onCopy={() => console.log(`Copy verse ${verseNumber}`)}
                    onBookmark={() =>
                      console.log(`Bookmark verse ${verseNumber}`)
                    }
                  />
                ))
              ) : activeTab === "reading" ? (
                <ReadingView
                  bgClr="bg-gray-100 dark:bg-[#1f2125]"
                  textClr="text-black dark:text-white"
                  verses={verses.map((v) => v.arabic)}
                />
              ) : null}

              <div>
                <NavigatorButtons
                  bgClr="bg-gray-100 dark:bg-[#1f2125]"
                  textClr="text-black dark:text-white"
                />

                <div>
                  <PageFooter
                    bgClr="bg-gray-100 dark:bg-[#1f2125]"
                    textClr="text-black dark:text-white"
                    darkMode={toggleTheme}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SurahPage;
