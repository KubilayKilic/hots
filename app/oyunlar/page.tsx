import { supabase } from "@/lib/supabase";
import OyunlarPage from "@/componenets/sections/OyunlarPage";

// Oyunları almak için fonksiyon
const getGames = async () => {
  const { data, error } = await supabase
    .from("archive")
    .select("*")
    .eq("category", "oyun");

  if (error || !data) return [];
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );
};

export default async function Page() {
  // Oyunları alıyoruz
  const games = await getGames();

  // Oyunları props olarak OyunlarPage bileşenine gönderiyoruz
  return <OyunlarPage games={games} />;
}
