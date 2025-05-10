import React from "react";
import Card from "@/componenets/ui/Card";

const page = () => {
  return (
    <div className="flex justify-center p-8 gap-4">
      <Card
        title="Love, Death & Robots"
        description="A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy."
        imageUrl="./cover-images/ldr-cover.jpg"
        resonance={1}
      />
    </div>
  );
};

export default page;
