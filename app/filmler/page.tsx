import React from "react";
import Card from "@/componenets/ui/Card";

const page = () => {
  return (
    <div className="flex justify-center p-8 gap-4">
      <Card
        title="Kara Şövalye"
        description="When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness."
        imageUrl="/batman-cover.jpg"
        resonance={1}
      />
      <Card
        title="Örümcek Adam: Örümcek Evreninde"
        description="Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
        imageUrl="/spi-cover.jpg"
        resonance={2}
      />
    </div>
  );
};

export default page;
