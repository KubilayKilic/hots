import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image_url?: string;
  resonance: number;
  yorum: string;
  onClick?: () => void;
}

const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

const Card: React.FC<CardProps> = ({
  title,
  description,
  image_url,
  resonance,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
    relative 
    w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] 
    aspect-[2/3]
    rounded-xl 
    shadow-lg 
    overflow-hidden 
    group 
    cursor-pointer 
    transition-transform 
    duration-300 
    hover:scale-105
  "
    >
      <Image
        src={image_url || "/default-image.jpg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 px-4">
        <h3 className="text-white text-3xl font-bold mt-4">{title}</h3>
        <div className="overflow-y-auto no-scrollbar text-sm text-white mt-2 mb-4 flex-1">
          <p>{description}</p>
        </div>
        <div className="text-yellow-400 text-[19px] flex justify-between mt-auto mb-4">
          {stars[resonance - 1]}
        </div>
      </div>
    </div>
  );
};

export default Card;
