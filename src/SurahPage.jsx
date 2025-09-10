import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Header from "./SurahPageComponents/Header.jsx";
import NavigationTabs from "./SurahPageComponents/NavigationTabs.jsx";
import SurahHeader from "./SurahPageComponents/SurahHeader.jsx";
import Verse from "./SurahPageComponents/Verse.jsx";
import PageFooter from "./components/PageFooter.jsx";
import ReadingView from "./SurahPageComponents/ReadingView.jsx";
import NavigatorButtons from "./SurahPageComponents/NavigatorButtons.jsx";
import Theme from "./components/Theme.jsx";
import { headerData, tabs, surahs } from "./dummy data/datadummyData.jsx";

function SurahPage() {
  const { toggleTheme } = Theme();
  const [activeTab, setActiveTab] = useState("translation");

  //Route
  const { number } = useParams();
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [surahInfo, setSurahInfo] = useState(null);

  function getGlobalAyahNumber(surah, ayah) {
    const ayahCounts = [
      7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
      111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
      54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60,
      49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52,
      44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19,
      26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6,
    ];

    // Sum of ayahs before this surah
    const offset = ayahCounts.slice(0, surah - 1).reduce((a, b) => a + b, 0);
    return offset + ayah;
  }

  // Fetch surah verses when number changes
  useEffect(() => {
    if (!number) return;

    const fetchSurah = async () => {
      try {
        setLoading(true);

        // Arabic
        const resArabic = await fetch(
          `https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`
        );
        const dataArabic = await resArabic.json();

        // English
        const resEnglish = await fetch(
          `https://api.alquran.cloud/v1/surah/${number}/en.asad`
        );
        const dataEnglish = await resEnglish.json();

        if (dataArabic.code === 200 && dataEnglish.code === 200) {
          const arabicAyahs = dataArabic.data.ayahs;
          const translationAyahs = dataEnglish.data.ayahs;

          // merge arabic + translation
          const merged = arabicAyahs.map((a, i) => {
            const globalAyah = getGlobalAyahNumber(
              dataArabic.data.number,
              a.numberInSurah
            );

            return {
              number: a.numberInSurah,
              arabic: a.text,
              translation: translationAyahs[i]?.text || "",
              globalNumber: globalAyah,
              audioUrl: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${globalAyah}.mp3`,
            };
          });
          setVerses(merged);

          setSurahInfo({
            number: dataArabic.data.number,
            nameArabic: dataArabic.data.name, // Arabic name
            nameEnglish: dataArabic.data.englishName, // English name
            translation: dataArabic.data.englishNameTranslation,
            translator: "Muhammad Asad",
          });

          // Save in localStorage
          localStorage.setItem("lastSurah", JSON.stringify(dataArabic.data));
        }
      } catch (err) {
        console.error("Error fetching surah:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [number]);

  // Event handlers (placeholder for future features)
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-[#1f2125]">
        <div className="max-w-[1440px] mx-auto">
          <NavBar
            title="Quran.com"
            bgClr="bg-gray-100 dark:bg-[#1f2125]"
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
            {surahInfo && (
              <Header
                bgClr="bg-gray-200 dark:bg-[#1f2125]"
                textClr="text-black dark:text-white"
                title={surahInfo.nameEnglish}
                currentPage={headerData.currentPage}
                totalPages={headerData.totalPages}
              />
            )}

            <NavigationTabs
              bgClr="bg-gray-100 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {surahInfo && (
              <SurahHeader
                bgClr="bg-gray-100 dark:bg-[#1F2125]"
                textClr="text-black dark:text-white"
                name={surahInfo.nameArabic}
                translation={surahInfo.translation}
                translator={surahInfo.translator}
                onSurahInfo={() => console.log("Show surah info")}
                source={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahInfo.number}.mp3`}
              />
            )}

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
                    source={verse.audioUrl}
                    onCopy={() => console.log(`Copy verse ${verse.number}`)}
                    onBookmark={() =>
                      console.log(`Bookmark verse ${verse.number}`)
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
