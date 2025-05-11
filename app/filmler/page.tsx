import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import ediliyor.
import Card from "@/componenets/ui/Card";

// serverden veri alma fonksiyonu
const getServerData = async () => {
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan
    .select("*")
    .eq("category", "film"); // "category" değeri "film" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching movies.</p>
      </div>
    );
  }

  // ⭐ Alfabetik olarak sırala (title'a göre)
  const sortedData = data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );

  const movies = sortedData.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <div className="flex justify-center p-8 gap-4">
      {movies.length > 0 ? (
        movies.map((film, index) => (
          <Card
            key={index}
            title={film.title}
            description={film.description}
            imageUrl={film.image_url}
            resonance={film.resonance}
          />
        ))
      ) : (
        <p>No movies available</p> // Eğer film yoksa, mesaj göster
      )}
    </div>
  );
};

export default getServerData;
