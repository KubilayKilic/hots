import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import et.
import Card from "@/componenets/ui/Card";

// serverden veri alma fonksiyonu
const getServerData = async () => {
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan
    .select("*")
    .eq("category", "dizi"); // "category" değeri "dizi" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching shows.</p>
      </div>
    );
  }

  // ⭐ Alfabetik olarak sırala (title'a göre)
  const sortedData = data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );

  const shows = sortedData.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <div className="flex justify-center p-8 gap-4">
      {shows.length > 0 ? (
        shows.map((dizi, index) => (
          <Card
            key={index}
            title={dizi.title}
            description={dizi.description}
            imageUrl={dizi.image_url}
            resonance={dizi.resonance}
          />
        ))
      ) : (
        <p>No shows available</p> // Eğer dizi yoksa, mesaj göster
      )}
    </div>
  );
};

export default getServerData;
