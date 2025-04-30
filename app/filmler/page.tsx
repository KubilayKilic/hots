import React from "react";
import Card from "@/componenets/ui/Card";

const page = () => {
  return (
    <div className="flex justify-center p-8">
      <Card
        title="Dizi 1"
        description="Bu dizi hakkında kısa açıklama."
        imageUrl="/path-to-image.jpg" // opsiyonel
      />
    </div>
  );
};

export default page;
