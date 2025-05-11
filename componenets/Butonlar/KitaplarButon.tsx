"use client"; // bileşenin client tarafında çalışmasını için

import React from "react";
import { useRouter } from "next/navigation";

const KitaplarButon: React.FC = () => {
  const router = useRouter();

  const playSound = () => {
    const audio = new Audio("/best-sound.mp3");
    audio.play();
    router.push("/kitaplar"); // Aynı sekmede /kitaplar sayfasına yönlendir
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Kitaplar
      </span>
    </button>
  );
};

export default KitaplarButon;
