"use client"; // bileşenin client tarafında çalışmasını için

import React from "react";
import { useRouter } from "next/navigation";

const MuziklerButon: React.FC = () => {
  const router = useRouter(); // Router kullanımı için hook

  const playSound = () => {
    const audio = new Audio("/best-sound.mp3");
    audio.play();
    router.push("/muzikler"); // Aynı sekmede /muzikler sayfasına yönlendir
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-300 to-orange-300 group-hover:from-yellow-300 group-hover:to-orange-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800"
    >
      <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Müzikler
      </span>
    </button>
  );
};

export default MuziklerButon;
