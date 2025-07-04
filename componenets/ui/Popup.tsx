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
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={closePopup}
    >
      <div
        className="relative flex bg-black rounded-lg w-[800px] max-w-5xl text-white h-[600px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sol: Görsel */}
        <div className="w-1/2">
          <Image
            src={item.image_url}
            alt={item.title}
            width={400}
            height={600}
            className="rounded-lg object-cover"
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Sağ: İçerik */}
        <div className="w-1/2 flex flex-col px-4 py-2 overflow-y-auto no-scrollbar">
          <div className="flex justify-center flex-grow">
            <p className="text-[19px] text-left ml-2 mt-2 max-w-prose mx-auto">
              {item.yorum || "Henüz yorum girilmemiş."}
            </p>
          </div>
          <div className="text-yellow-400 text-[19px] flex justify-center mt-auto mb-2">
            {stars[item.resonance - 1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
