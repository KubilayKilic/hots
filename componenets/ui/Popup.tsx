"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

interface ContentItem {
  title: string;
  description: string;
  image_url: string;
  resonance: number;
  yorum: string;
}

const Popup = ({
  items,
  initialIndex,
  closePopup,
}: {
  items: ContentItem[];
  initialIndex: number;
  closePopup: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const item = items[currentIndex];

  const prevItem = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "d") {
        nextItem();
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        prevItem();
      } else if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={closePopup}
    >
      <div
        className="
          relative 
          flex flex-col md:flex-row 
          bg-black 
          rounded-lg 
          w-full md:w-[800px] 
          max-w-5xl 
          text-white 
          h-auto md:h-[600px] 
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Görsel */}
        <div className="w-full md:w-1/2">
          <Image
            src={item.image_url}
            alt={item.title}
            width={400}
            height={600}
            className="w-full h-auto object-cover md:h-full"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* İçerik */}
        <div className="w-full md:w-1/2 flex flex-col px-4 py-4 overflow-y-auto no-scrollbar text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h2>

          <p className="text-[16px] text-gray-200 mb-4">
            {item.yorum || "Henüz yorum girilmemiş."}
          </p>

          <div className="text-yellow-400 text-xl flex justify-center md:justify-start mt-auto mb-2">
            {stars[item.resonance - 1]}
          </div>

          <div className="flex justify-center md:justify-between mt-4 text-gray-400">
            <button
              onClick={prevItem}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
            >
              ← Önceki
            </button>
            <button
              onClick={nextItem}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm"
            >
              Sonraki →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
