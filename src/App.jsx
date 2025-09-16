import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SurahPage from "./SurahPage.jsx";
import JuzPage from "./JuzPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surah/:number" element={<SurahPage />} />
      <Route path="/juz/:number" element={<JuzPage />} /> {/* 👈 fix here */}
    </Routes>
  );
}

export default App;
