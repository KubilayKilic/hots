import React from "react";
import Card from "@/componenets/ui/Card";

const page = () => {
  return (
    <div className="flex justify-center p-8 gap-4">
      <Card
        title="Fahrenheit 451"
        description="Guy Montag bir itfaiyeciydi. Televizyonun hüküm sürdüğü bu dünyada kitaplar ise yok olmak üzereydi zira itfaiyeciler yangın söndürmek yerine ortalığı ateşe veriyordu. Montag’ın işi ise yasadışı olanların en tehlikelisini yakmaktı: Kitapları."
        imageUrl="./cover-images/f451.jpg"
        resonance={1}
      />
    </div>
  );
};

export default page;
