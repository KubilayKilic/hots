import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import ediliyor.
import Card from "@/componenets/ui/Card";

// `Server Component` olarak veri çekiyoruz
const getServerData = async () => {
  // Supabase'ten veriyi çekiyoruz
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan alıyoruz
    .select("*")
    .eq("category", "oyun"); // "category" değeri "film" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching games.</p>
      </div>
    ); // Hata varsa, kullanıcıya hata mesajı gösteriyoruz
  }

  // ⭐ Alfabetik olarak sırala (title'a göre)
  const sortedData = data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );

  const games = sortedData.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <>
      {/* Arka plan sadece ilk ekran kadar sabit kalır */}
      <div className="background-layer" />

      <div className="text-4xl justify-center flex mt-8">
        Well-crafted worlds I was glad to visit.
      </div>

      {/* Scroll edilecek içerik */}
      <div className="relative z-10 flex justify-center mt-3 gap-x-6 gap-y-6 flex-wrap p-20">
        {games.length > 0 ? (
          games.map((film, index) => (
            <Card
              key={index}
              title={film.title}
              description={film.description}
              imageUrl={film.image_url}
              resonance={film.resonance}
            />
          ))
        ) : (
          <p>No games available</p>
        )}
      </div>
    </>
  );
};

export default getServerData;
