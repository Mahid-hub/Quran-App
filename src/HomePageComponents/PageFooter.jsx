import React, { useState } from "react";
import Button from "./Button";
import Languages from "./Languages";
import { Link } from "react-router-dom";

function PageFooter({ bgClr, textClr, darkMode, isDarkMode }) {
  const [language, setLanguage] = useState(false);
  return (
    <footer
      className={`border-t border-gray-700 px-6 py-12 ${bgClr} ${textClr}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-extrabold">Quran.com</h2>
          <p className="mt-4 text-sm leading-relaxed">
            <span className="font-bold text-lg">
              Read, Listen, Search, and Reflect on the Quran
            </span>
            <br />
            Quran.com is a trusted platform used by millions worldwide to read,
            search, listen to, and reflect on the Quran in multiple languages.
            It provides translations, tafsir, recitations, word-by-word
            translation, and tools for deeper study, making the Quran accessible
            to everyone.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            As a Sadaqah Jariyah, Quran.com is dedicated to helping people
            connect deeply with the Quran. Supported by{" "}
            <a
              href="https://quran.foundation"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-400"
            >
              Quran.Foundation
            </a>
            , a 501(c)(3) non-profit organization, Quran.com continues to grow
            as a free and valuable resource for all, Alhamdulillah.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "Reciters",
                "About Us",
                "Developers",
                "Product Updates",
                "Feedback",
                "Help",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/surah/2#ayah-255" className="hover:underline">
                  Ayatul Kursi
                </a>
              </li>
              <li>
                <a href="surah/36" className="hover:underline">
                  Yaseen
                </a>
              </li>
              <li>
                <a href="surah/67" className="hover:underline">
                  Al-Mulk
                </a>
              </li>
              <li>
                <a href="surah/55" className="hover:underline">
                  Ar-Rahmaan
                </a>
              </li>
              <li>
                <a href="surah/56" className="hover:underline">
                  Al-Waqi'ah
                </a>
              </li>
              <li>
                <a href="surah/18" className="hover:underline">
                  Al-Kahf
                </a>
              </li>
              <li>
                <a href="surah/73" className="hover:underline">
                  Al-Muzzammil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm max-w-[1440px] mx-auto">
        {/* Left links */}
        <div className="space-x-5 mb-3 md:mb-0">
          {["Sitemap", "Privacy", "Terms and Conditions"].map((link, idx) => (
            <a key={idx} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>

        {/* Center copyright */}
        <p className="mb-3 md:mb-0">
          &copy; 2025{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            Quran.com
          </a>
          . All Rights Reserved
        </p>

        {/* Right buttons */}
        <div className="flex space-x-3">
          <Button
            bgClr="bg-black dark:bg-white"
            textClr="text-white dark:text-black"
            varient="border"
            click={darkMode}
            text={isDarkMode ? "Light Mode" : "Dark Mode"}
          />
          <div className="relative">
            <Button
              bgClr="bg-black dark:bg-white"
              textClr="text-white dark:text-black"
              varient="border"
              click={() => setLanguage(!language)}
              text="Language"
            />
            {language && (
              <div className="absolute bottom-full mb-2 right-0">
                <Languages
                  bgClr={bgClr}
                  textClr={textClr}
                  onSelected={() => setLanguage(false)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
