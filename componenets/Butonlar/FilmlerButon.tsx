"use client"; // bileşenin client tarafında çalışmasını için

import React from "react";
import { useRouter } from "next/navigation";

const FilmlerButon: React.FC = () => {
  const router = useRouter(); // Router kullanımı için hook

  const playSound = () => {
    const audio = new Audio("/best-sound.mp3");
    audio.play();
    router.push("/filmler"); // Aynı sekmede /filmler sayfasına yönlendir
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-rose-500 to-amber-400 group-hover:from-rose-500 group-hover:to-amber-400 hover:text-white dark:text-white"
    >
      <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        🎬 Film
      </span>
    </button>
  );
};

export default FilmlerButon;
