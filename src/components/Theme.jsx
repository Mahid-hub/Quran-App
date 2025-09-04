import React, { useState, useEffect } from "react";

function Theme() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  return { darkMode, toggleTheme };
}


export default Theme;