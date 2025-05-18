"use client";

import React, { useState } from "react";
import Card from "@/componenets/ui/Card";
import Popup from "@/componenets/ui/Popup";

interface ContentItem {
  title: string;
  description: string;
  image_url: string;
  resonance: number;
}

interface ContentGalleryProps {
  items: ContentItem[];
  heading?: string;
}

const ContentGallery: React.FC<ContentGalleryProps> = ({ items, heading }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {selectedIndex !== null && (
        <Popup
          items={items}
          initialIndex={selectedIndex}
          closePopup={() => setSelectedIndex(null)}
        />
      )}

      {heading && (
        <div className="text-4xl justify-center flex mt-8 text-center px-4">
          {heading}
        </div>
      )}

      <div className="relative z-10 flex justify-center mt-3 gap-x-6 gap-y-6 flex-wrap p-20">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
            resonance={item.resonance}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ContentGallery;
