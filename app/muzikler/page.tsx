import { supabase } from "@/lib/supabase";
import ContentGallery from "@/componenets/sections/ContentGallery";

const getBooks = async () => {
  const { data, error } = await supabase
    .from("archive")
    .select("*")
    .eq("category", "muzik");

  if (error || !data) return [];
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );
};

export default async function Page() {
  const music = await getBooks();
  return <ContentGallery items={music} heading="İSevdiğim müzikler" />;
}
