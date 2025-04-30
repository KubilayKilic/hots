"use client"; // Bu direktif bileşenin client tarafında çalışmasını sağlar

// components/KitapButon.tsx
import React from "react";

const KitapButon: React.FC = () => {
  // Ses çalma fonksiyonu
  const playSound = () => {
    // Ses dosyasını yükle
    const audio = new Audio("/best-sound.mp3"); // Ses dosyasının yolu public/ altında
    audio.play(); // Ses dosyasını çal
    window.open("/kitaplar", "_blank"); // yeni sekmede aç
  };

  return (
    <button
      onClick={playSound}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Kitaplar
      </span>
    </button>
  );
};

export default KitapButon;
