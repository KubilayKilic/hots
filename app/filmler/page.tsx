import { supabase } from "@/lib/supabase";
import ContentGallery from "@/componenets/sections/ContentGallery";

const getMovies = async () => {
  const { data, error } = await supabase
    .from("archive")
    .select("*")
    .eq("category", "film");

  if (error || !data) return [];
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );
};

export default async function Page() {
  const movies = await getMovies();

  return <ContentGallery items={movies} heading="İz bırakan filmler..." />;
}
