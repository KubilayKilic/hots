// her kategoride kullanılacak olan kart bileşeni, dataya göre görsel ve isim ve birkaç bilgi daha barındıracak ve map edilerek kartlar gösterilecek

import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative w-[220px] h-[330px] rounded-lg shadow-lg overflow-hidden group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 px-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
