import { supabase } from "@/lib/supabase";
import ContentGallery from "@/componenets/sections/ContentGallery";

const getBooks = async () => {
  const { data, error } = await supabase
    .from("archive")
    .select("*")
    .eq("category", "kitap");

  if (error || !data) return [];
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );
};

export default async function Page() {
  const books = await getBooks();
  return <ContentGallery items={books} heading="Sevdiğim kitaplar" />;
}
