"use client"; // Bu direktif bileşenin client tarafında çalışmasını sağlar

// components/FilmButon.tsx
import React from "react";

const FilmButon: React.FC = () => {
  // Ses çalma fonksiyonu
  const playSound = () => {
    // Ses dosyasını yükle
    const audio = new Audio("/best-sound.mp3"); // Ses dosyasının yolu public/ altında
    audio.play(); // Ses dosyasını çal
    window.open("/filmler", "_blank"); // yeni sekmede aç
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Filmler
      </span>
    </button>
  );
};

export default FilmButon;
