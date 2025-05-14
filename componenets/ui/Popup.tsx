import React from "react";
import Image from "next/image";

const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"];

const Popup = ({
  imageUrl,
  title,
  description,
  resonance,
  closePopup,
  prevGame,
  nextGame,
}: {
  imageUrl: string;
  title: string;
  description: string;
  resonance: number;
  closePopup: () => void;
  prevGame: () => void;
  nextGame: () => void;
}) => {
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
            src={imageUrl}
            alt={title}
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
              {description}
            </p>
          </div>
          <div className="text-yellow-400 text-[19px] flex justify-center mt-auto mb-2">
            {stars[resonance - 1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
