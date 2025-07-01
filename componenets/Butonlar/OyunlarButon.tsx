"use client"; // bileşenin client tarafında çalışmasını için

import React from "react";
import { useRouter } from "next/navigation";

const OyunlarButon: React.FC = () => {
  const router = useRouter();

  const playSound = () => {
    const audio = new Audio("/best-sound.mp3");
    audio.play();
    router.push("/oyunlar"); // Aynı sekmede /oyunlar sayfasına yönlendir
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-xl font-semibold text-gray-900 rounded-lg group bg-gradient-to-br from-pink-400 to-violet-400 group-hover:from-pink-400 group-hover:to-violet-400 hover:text-white dark:text-white"
    >
      <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        🎮 Oyun
      </span>
    </button>
  );
};

export default OyunlarButon;
