import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  resonance: number; // 1, 2 veya 3 yıldız skoruna göre emoji eklenecek veya nadir 4?
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  resonance,
}) => {
  return (
    <div className="relative w-full max-w-[220px] aspect-[2/3] rounded-lg shadow-lg overflow-hidden group">
      <Image
        src={imageUrl || "/default-image.jpg"} // fallback eklemek iyi olur
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 px-4">
        <h3 className="text-white text-xl font-bold mt-4">{title}</h3>
        {/* Scrollable description */}
        <div className="overflow-y-auto no-scrollbar text-sm text-white mt-2 mb-4 flex-1">
          <p>{description}</p>
        </div>
        <div className="text-yellow-400 text-lg flex justify-between mt-auto mb-4">
          {"⭐".repeat(resonance)}
        </div>
      </div>
    </div>
  );
};

export default Card;
