import React from "react";
import { supabase } from "@/lib/supabase"; // supabse client import ediliyor.
import Card from "@/componenets/ui/Card";

// `Server Component` olarak veri çekiyoruz
const getServerData = async () => {
  // Supabase'ten veriyi çekiyoruz
  const { data, error } = await supabase
    .from("archive") // 'archive' tablosundan alıyoruz
    .select("*")
    .eq("category", "kitap"); // "category" değeri "film" olanları filtreliyoruz
  console.log("Supabase'den gelen veri:", data);
  if (error) {
    console.error(error);
    return (
      <div className="flex justify-center p-8 gap-4">
        <p>Error fetching books.</p>
      </div>
    ); // Hata varsa, kullanıcıya hata mesajı gösteriyoruz
  }

  const books = data.map((item) => ({
    title: item.title,
    description: item.description,
    image_url: item.image_url,
    resonance: item.resonance,
  }));

  return (
    <div className="flex justify-center p-8 gap-4">
      {books.length > 0 ? (
        books.map((film, index) => (
          <Card
            key={index}
            title={film.title}
            description={film.description}
            imageUrl={film.image_url}
            resonance={film.resonance}
          />
        ))
      ) : (
        <p>No books available</p> // Eğer film yoksa, mesaj göster
      )}
    </div>
  );
};

export default getServerData;
