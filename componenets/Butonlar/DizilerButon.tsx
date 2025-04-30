"use client"; // Bu direktif bileşenin client tarafında çalışmasını sağlar

// components/DizilerButon.tsx
import React from "react";

const DizilerButon: React.FC = () => {
  // Ses çalma fonksiyonu
  const playSound = () => {
    // Ses dosyasını yükle
    const audio = new Audio("/best-sound.mp3"); // Ses dosyasının yolu public/ altında
    audio.play(); // Ses dosyasını çal
    window.open("/diziler", "_blank"); // yeni sekmede aç
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Diziler
      </span>
    </button>
  );
};

export default DizilerButon;
