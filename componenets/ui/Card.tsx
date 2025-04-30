// her kategoride kullanılacak olan kart bileşeni, dataya göre görsel ve isim ve birkaç bilgi daha barındıracak ve map edilerek kartlar gösterilecek

// components/ui/Card.tsx
// components/ui/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-xs h-[400px] bg-white border border-gray-300 rounded-lg shadow-lg">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="px-6 py-4 h-[calc(100%-6rem)] flex flex-col justify-between">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
