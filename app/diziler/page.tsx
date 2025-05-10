import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import ediliyor.
import Card from "@/componenets/ui/Card";

// `Server Component` olarak veri çekiyoruz
const FilmlerPage = async () => {
  // Supabase'ten veriyi çekiyoruz
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan alıyoruz
    .select("*")
    .eq("category", "dizi"); // "category" değeri "film" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching films.</p>
      </div>
    ); // Hata varsa, kullanıcıya hata mesajı gösteriyoruz
  }

  const filmler = data.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <div className="flex justify-center p-8 gap-4">
      {filmler.length > 0 ? (
        filmler.map((film, index) => (
          <Card
            key={index}
            title={film.title}
            description={film.description}
            imageUrl={film.image_url}
            resonance={film.resonance}
          />
        ))
      ) : (
        <p>No films available</p> // Eğer film yoksa, mesaj göster
      )}
    </div>
  );
};

export default FilmlerPage;
