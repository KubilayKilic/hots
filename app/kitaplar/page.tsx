import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import ediliyor.
import Card from "@/componenets/ui/Card";

// serverden veri alma fonksiyonu
const getServerData = async () => {
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan
    .select("*")
    .eq("category", "kitap"); // "category" değeri "kitap" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching books.</p>
      </div>
    );
  }

  // ⭐ Alfabetik olarak sırala (title'a göre)
  const sortedData = data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );

  const books = sortedData.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <div className="flex justify-center p-8 gap-4">
      {books.length > 0 ? (
        books.map((kitap, index) => (
          <Card
            key={index}
            title={kitap.title}
            description={kitap.description}
            imageUrl={kitap.image_url}
            resonance={kitap.resonance}
          />
        ))
      ) : (
        <p>No books available</p> // Eğer kitap yoksa, mesaj göster
      )}
    </div>
  );
};

export default getServerData;
