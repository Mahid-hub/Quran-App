import React, { useState } from "react";
import NavigationTabs from "./NavigationTabs";
import Verse from "./Verse";
import ReadingView from "./ReadingView";
import "../dummy data/datadummyData";

export const QuranView = () => {
  const [activeTab, setActiveTab] = useState("translation");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handlePlay = (verseNumber) => {
    console.log("Play", verseNumber);
  };

  const handleCopy = (verseNumber) => {
    console.log("Copy", verseNumber);
  };

  const handleBookmark = (verseNumber) => {
    console.log("Bookmark", verseNumber);
  };

  return (
    <div>
      <NavigationTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === "translation" && (
        <Verse
          verseNumber={dummyVerse.verseNumber}
          arabicText={dummyVerse.arabicText}
          translation={dummyVerse.translation}
          onPlay={handlePlay}
          onCopy={handleCopy}
          onBookmark={handleBookmark}
        />
      )}

      {activeTab === "reading" && <ReadingView />}
    </div>
  );
};

export default QuranView;
