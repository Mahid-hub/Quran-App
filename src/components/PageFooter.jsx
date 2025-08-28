function PageFooter() {
  return (
    <footer className="border-t border-gray-700 bg-[#1f2125] text-gray-300 px-6 py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-white">Quran.com</h2>
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
              className="text-blue-400 underline hover:text-blue-300"
            >
              Quran.Foundation
            </a>
            , a 501(c)(3) non-profit organization, Quran.com continues to grow
            as a free and valuable resource for all, Alhamdulillah.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Quran Radio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reciters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Product Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Popular Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Ayatul Kursi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Yaseen
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Al Mulk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ar-Rahman
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Al Waqi'ah
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Al Kahf
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Al Muzzammil
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        {/* Left links */}
        <div className="space-x-5 mb-3 md:mb-0">
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </div>

        {/* Center copyright */}
        <p className="mb-3 md:mb-0">
          © 2025{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Quran.com
          </a>
          . All Rights Reserved
        </p>

        {/* Right buttons */}
        <div className="flex space-x-3">
          <button
            aria-label="Toggle theme"
            className="bg-gray-800 px-3 py-1.5 rounded-md flex items-center space-x-2 hover:bg-gray-700"
          >
            <span>
              {" "}
              <i class="fa-duotone fa-solid fa-circle-moon"></i>Dark
            </span>
          </button>
          <button
            className="bg-gray-800 px-3 py-1.5 rounded-md flex items-center space-x-2 hover:bg-gray-700"
          >
            <span>
              {" "}
              <i class="fa-solid fa-globe"></i>English
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
