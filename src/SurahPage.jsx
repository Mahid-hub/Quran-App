import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import NavBar from "./HomePageComponents/NavBar.jsx";
import Header from "./SurahPageComponents/Header.jsx";
import NavigationTabs from "./SurahPageComponents/NavigationTabs.jsx";
import SurahHeader from "./SurahPageComponents/SurahHeader.jsx";
import Verse from "./SurahPageComponents/Verse.jsx";
import PageFooter from "./HomePageComponents/PageFooter.jsx";
import ReadingView from "./SurahPageComponents/ReadingView.jsx";
import NavigatorButtons from "./SurahPageComponents/NavigatorButtons.jsx";
import Theme from "./HomePageComponents/Theme.jsx";
import { Languages, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

function SurahPage() {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = Theme();
  const [activeTab, setActiveTab] = useState("translation");
  const [playingId, setPlayingId] = useState(null);
  //Route
  const { number } = useParams();
  const location = useLocation();
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [surahInfo, setSurahInfo] = useState(null);
  const [currentMeta, setCurrentMeta] = useState({
    juz: null,
    page: null,
    hizb: null,
  });

  const tabs = [
    {
      id: "translation",
      name: t("Tabs.translation"),
      icon: <Languages size={18} />,
    },
    {
      id: "reading",
      name: t("Tabs.reading"),
      icon: <BookOpen size={18} />,
    },
  ];

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
              juz: a.juz,
              page: a.page,
              hizb: a.hizbQuarter,
              globalNumber: globalAyah,
              audioUrl: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${globalAyah}.mp3`,
            };
          });
          setVerses(merged);

          const pages = [...new Set(arabicAyahs.map((a) => a.page))];
          const juzSet = [...new Set(arabicAyahs.map((a) => a.juz))];
          const hizbQuarters = [
            ...new Set(arabicAyahs.map((a) => a.hizbQuarter)),
          ];

          setSurahInfo({
            number: dataArabic.data.number,
            name: dataArabic.data.name,
            englishName: dataArabic.data.englishName,
            englishNameTranslation: dataArabic.data.englishNameTranslation,
            revelationType: dataArabic.data.revelationType,
            totalPages: pages.length,
            totalJuz: juzSet.length,
            totalHizbQuarters: hizbQuarters.length,
            translator: "Muhammad Asad",
            audioUrl: `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${dataArabic.data.number}.mp3`,
          });

          // Save in localStorage
          localStorage.setItem("lastSurah", JSON.stringify(dataArabic.data));
          if (merged.length > 0) {
            setCurrentMeta({
              juz: merged[0].juz,
              page: merged[0].page,
              hizb: merged[0].hizb,
            });
          }
        }
      } catch (err) {
        console.error("Error fetching surah:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [number]);

  useEffect(() => {
    if (!verses.length) return;

    let observer;
    let cleanup = () => {};

    // Defer to next frame to ensure DOM is updated after tab switch
    const rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting);
          if (visible.length > 0) {
            visible.sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );
            const topMost = visible[0];
            const { juz, page, hizb } = topMost.target.dataset;
            setCurrentMeta({
              juz: Number(juz),
              page: Number(page),
              hizb: Number(hizb),
            });
          }
        },
        {
          threshold: [0, 0.25],
          root: null,
          rootMargin: "0px 0px -50% 0px",
        }
      );

      const verseEls = document.querySelectorAll(".verse-item");
      verseEls.forEach((el) => observer.observe(el));

      // Initialize immediately to first verse in view (or first verse)
      const initEl =
        Array.from(verseEls).find((el) => {
          const r = el.getBoundingClientRect();
          return r.bottom > 0; // at least partially visible
        }) || verseEls[0];
      if (initEl) {
        const { juz, page, hizb } = initEl.dataset;
        setCurrentMeta({
          juz: Number(juz),
          page: Number(page),
          hizb: Number(hizb),
        });
      }

      cleanup = () => observer && observer.disconnect();
    });

    return () => {
      cancelAnimationFrame(rafId);
      cleanup();
    };
  }, [verses, activeTab]);

  // Scroll to a specific ayah if URL hash is present
  useEffect(() => {
    if (!verses.length) return;

    const hash = location.hash || "";
    if (!hash) return;

    const ayahMatch = hash.match(/^#ayah-(\d+)$/);
    const globalMatch = hash.match(/^#verse-(\d+)$/);

    let targetId = null;
    if (ayahMatch) {
      const ayahInSurah = parseInt(ayahMatch[1], 10);
      if (!Number.isNaN(ayahInSurah)) {
        const globalAyah = getGlobalAyahNumber(
          parseInt(number, 10),
          ayahInSurah
        );
        targetId = `verse-${globalAyah}`;
      }
    } else if (globalMatch) {
      targetId = `verse-${parseInt(globalMatch[1], 10)}`;
    }

    if (targetId) {
      requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    }
  }, [verses, location.hash, number]);

  // Handlers
  const handleTabChange = (tabId) => setActiveTab(tabId);

  return (
    <>
      <div className="bg-gray-100 dark:bg-[#1f2125]">
        <div className="max-w-[1440px] mx-auto">
          <NavBar
            title={t("Home.title")}
            bgClr="bg-gray-100 dark:bg-[#1f2125]"
            textClr="text-black dark:text-white"
            icons={["fa-globe", "fa-gear", "fa-magnifying-glass"]}
            onIconClick={(icon) => {
              if (icon === "fa-globe") {
                const newLang = i18n.language === "en" ? "ur" : "en";
                i18n.changeLanguage(newLang);
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
                title={`${surahInfo.englishName} (${surahInfo.name})`}
                currentPage={currentMeta.page}
                currentSurah={surahInfo.number}
                juz={currentMeta.juz}
                hizb={currentMeta.hizb}
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
                name={surahInfo.name}
                translation={surahInfo.translation}
                translator={surahInfo.translator}
                onSurahInfo={() => console.log("Show surah info")}
                source={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahInfo.number}.mp3`}
                id={`surah-${surahInfo.number}`}
                playingId={playingId}
                setPlayingId={setPlayingId}
              />
            )}

            <div>
              {activeTab === "translation" ? (
                verses.map((verse) => (
                  <Verse
                    key={verse.number}
                    className="verse-item"
                    data-juz={verse.juz}
                    data-page={verse.page}
                    data-hizb={verse.hizb}
                    bgClr="bg-gray-100 dark:bg-[#1f2125]"
                    textClr="text-black dark:text-white"
                    verseNumber={verse.number}
                    arabicText={verse.arabic}
                    translation={verse.translation}
                    source={verse.audioUrl}
                    id={`verse-${verse.globalNumber}`}
                    playingId={playingId}
                    setPlayingId={setPlayingId}
                    onCopy={() => console.log(`Copy verse ${verse.number}`)}
                  />
                ))
              ) : activeTab === "reading" ? (
                <ReadingView
                  bgClr="bg-gray-100 dark:bg-[#1f2125]"
                  textClr="text-black dark:text-white"
                  verses={verses}
                />
              ) : null}
            </div>
            <div>
              <NavigatorButtons
                bgClr="bg-gray-100 dark:bg-[#1f2125]"
                textClr="text-black dark:text-white"
              />
            </div>

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
    </>
  );
}

export default SurahPage;
