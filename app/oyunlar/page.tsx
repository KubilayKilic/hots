import { supabase } from "@/lib/supabase";
import ContentGallery from "@/componenets/sections/ContentGallery";

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
  const games = await getGames();
  return <ContentGallery items={games} heading="Sevdiğim oyunlar" />;
}
