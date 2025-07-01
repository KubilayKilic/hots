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
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900"
    >
      <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        📚 Kitap
      </span>
    </button>
  );
};

export default KitaplarButon;
