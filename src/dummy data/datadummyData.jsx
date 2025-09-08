
import { Languages, BookOpen } from 'lucide-react';

export const headerData = {
  title: "Al-Fatihah",
  currentPage: "Juz 1",
  totalPages: "Hizb 1"
};

export const tabs = [
  {
    id: 'translation',
    name: 'Translation',
    icon: <Languages size={18} />
  },
  {
    id: 'reading',
    name: 'Reading',
    icon: <BookOpen size={18} />
  }
  
];

export const surahData = {
  name: "سُورَةُ الفَاتِحَة",
  translation: "The Opening",
  translator: "Dr. Mustafa Khattab, The Clear Quran"
};

export const verses= [
  {
    number: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    translation: "In the Name of Allah—the Most Compassionate, Most Merciful."
  },
  {
    number: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "All praise is for Allah—Lord of all worlds,"
  },
  {
    number: 3,
    arabic: "الرَّحْمَنِ الرَّحِيمِ",
    translation: "the Most Compassionate, Most Merciful,"
  },
  {
    number: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    translation: "Master of the Day of Judgment."
  },
  {
    number: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    translation: "You ˹alone˺ we worship and You ˹alone˺ we ask for help."
  },
  {
    number: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    translation: "Guide us along the Straight Path,"
  },
  {
    number: 7,
    arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    translation: "the Path of those You have blessed—not those You are displeased with, or those who are astray."
  }
];

export const surahs = [
  { id: 1, name: "Al-Fatiha", totalAyahs: 7 },
  { id: 2, name: "Al-Baqarah", totalAyahs: 286 },
  { id: 3, name: "Al-Imran", totalAyahs: 200 },

];
