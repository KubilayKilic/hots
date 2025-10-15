import ContentGallery from "@/componenets/sections/ContentGallery";

const getShows = async () => {
  const { data, error } = await supabase
    .from("archive")
    .select("*")
    .eq("category", "dizi");

  if (error || !data) return [];
  return data.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );
};

export default async function Page() {
  const shows = await getShows();
  return <ContentGallery items={shows} heading="Sevdiğim diziler" />;
}
