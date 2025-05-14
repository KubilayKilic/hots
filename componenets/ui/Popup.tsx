import React from "react";
import Image from "next/image";

const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"];

const Popup = ({ imageUrl, title, description, resonance, closePopup }) => {
  return (
    // Genel popup arka planı: şeffaf + blur
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={closePopup}
    >
      {/* İçerik kutusu: mat siyah, yazılar beyaz */}
      <div
        className="relative flex bg-black rounded-lg w-[800px] max-w-5xl text-white h-[600px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sol: Görsel */}
        <div className="w-1/2 ">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Sağ: İçerik (flex-col + spacing) */}
        <div className="w-1/2 flex flex-col px-4 py-2 overflow-y-auto no-scrollbar">
          {/* <div className="flex justify-center mb-4">
            <h2 className="text-3xl font-bold text-center">{title}</h2>
          </div> */}
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
