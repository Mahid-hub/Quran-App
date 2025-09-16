// JuzPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./HomePageComponents/NavBar.jsx";
import Header from "./SurahPageComponents/Header.jsx";
import NavigationTabs from "./SurahPageComponents/NavigationTabs.jsx";
import SurahHeader from "./SurahPageComponents/SurahHeader.jsx";
import Verse from "./SurahPageComponents/Verse.jsx";
import PageFooter from "./HomePageComponents/PageFooter.jsx";
import ReadingView from "./SurahPageComponents/ReadingView.jsx";
import Theme from "./HomePageComponents/Theme.jsx";
import { Languages, BookOpen } from "lucide-react";

function JuzPage() {
  const { toggleTheme } = Theme();
  const [activeTab, setActiveTab] = useState("translation");
  const [playingId, setPlayingId] = useState(null);

  const { number } = useParams(); // dynamic juz number
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
      name: "Translation",
      icon: <Languages size={18} />,
    },
    {
      id: "reading",
      name: "Reading",
      icon: <BookOpen size={18} />,
    },
  ];

  const juzNumber = number ?? currentMeta.juz ?? "";

  // Fetch juz verses when number changes
  useEffect(() => {
    if (!number) return;

    const fetchJuz = async () => {
      try {
        setLoading(true);

        // Arabic
        const resArabic = await fetch(
          `https://api.alquran.cloud/v1/juz/${number}/quran-uthmani`
        );
        const dataArabic = await resArabic.json();

        // English (Muhammad Asad)
        const resEnglish = await fetch(
          `https://api.alquran.cloud/v1/juz/${number}/en.asad`
        );
        const dataEnglish = await resEnglish.json();

        if (dataArabic.code === 200 && dataEnglish.code === 200) {
          const arabicAyahs = dataArabic.data.ayahs || [];
          const translationAyahs = dataEnglish.data.ayahs || [];

          // merge arabic + translation, and include safe fields
          const merged = arabicAyahs.map((a, i) => ({
            numberInSurah: a.numberInSurah,
            globalNumber: a.number, // use the ayah global number
            arabic: a.text,
            translation: translationAyahs[i]?.text || "",
            juz: a.juz,
            page: a.page,
            hizb: a.hizbQuarter,
            // safe surah fields (may or may not exist depending on API)
            surahNameArabic:
              (a.surah && (a.surah.name || a.surah.nameArabic)) ||
              (a.chapter && (a.chapter.name || a.chapter.nameArabic)) ||
              "",
            surahNumber:
              (a.surah && a.surah.number) ||
              (a.chapter && a.chapter.number) ||
              null,
            revelationType:
              (a.surah && a.surah.revelationType) ||
              (a.chapter && a.chapter.revelationType) ||
              "",
            audioUrl: `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${a.number}.mp3`,
          }));

          setVerses(merged);

          // Create a minimal surahInfo based on first ayah's surah (so Header can render)
          if (merged.length > 0) {
            const first = merged[0];
            setSurahInfo({
              number: first.surahNumber,
              name: first.surahName,
              englishName: first.surahName,
              englishNameTranslation:
                dataEnglish.data.ayahs?.[0]?.surah?.englishNameTranslation ||
                "",
              revelationType: first.revelationType || "",
              translator: "Muhammad Asad",
            });

            setCurrentMeta({
              juz: first.juz,
              page: first.page,
              hizb: first.hizb,
              surahName: first.surahName,
              surahNumber: first.surahNumber,
            });
          } else {
            // If no verses, clear states
            setSurahInfo(null);
            setCurrentMeta({ juz: null, page: null, hizb: null });
          }
        } else {
          // API returned non-200 for one of the calls
          console.error("Failed to fetch juz data", dataArabic, dataEnglish);
          setVerses([]);
          setSurahInfo(null);
        }
      } catch (err) {
        console.error("Error fetching Juz:", err);
        setVerses([]);
        setSurahInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJuz();
  }, [number]);

  // Intersection observer to update current meta while scrolling verses
  useEffect(() => {
    if (!verses.length) return;

    let observer;
    let cleanup = () => {};

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

  const handleTabChange = (tabId) => setActiveTab(tabId);

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

          {surahInfo && (
            <Header
              bgClr="bg-gray-200 dark:bg-[#1f2125]"
              textClr="text-black dark:text-white"
              title={juzNumber ? `Juz ${juzNumber}` : "Juz"}
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

          <div>
            {activeTab === "translation" ? (
              verses.map((verse, idx) => {
                const isFirstVerseOfSurah =
                  idx === 0 ||
                  verse.surahNumber !== verses[idx - 1].surahNumber;

                return (
                  <React.Fragment key={verse.globalNumber}>
                    {isFirstVerseOfSurah && (
                      <SurahHeader
                        bgClr="bg-gray-100 dark:bg-[#1F2125]"
                        textClr="text-black dark:text-white"
                        name={verse.surahNameArabic}
                        translation={verse.translation}
                        translator="Muhammad Asad"
                        onSurahInfo={() => console.log("Show surah info")}
                        source={`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${verse.surahNumber}.mp3`}
                        id={`surah-${verse.surahNumber}`}
                        playingId={playingId}
                        setPlayingId={setPlayingId}
                      />
                    )}

                    <Verse
                      className="verse-item"
                      data-juz={verse.juz}
                      data-page={verse.page}
                      data-hizb={verse.hizb}
                      bgClr="bg-gray-100 dark:bg-[#1f2125]"
                      textClr="text-black dark:text-white"
                      verseNumber={verse.numberInSurah}
                      arabicText={verse.arabic}
                      translation={verse.translation}
                      source={verse.audioUrl}
                      id={`verse-${verse.globalNumber}`}
                      playingId={playingId}
                      setPlayingId={setPlayingId}
                      onCopy={() =>
                        console.log(`Copy verse ${verse.numberInSurah}`)
                      }
                    />
                  </React.Fragment>
                );
              })
            ) : activeTab === "reading" ? (
              <ReadingView
                verses={verses}
                bgClr="bg-[#1f2125]"
                textClr="text-white"
              />
            ) : null}
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
    </>
  );
}

export default JuzPage;
