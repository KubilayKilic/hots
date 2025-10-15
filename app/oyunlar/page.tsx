import gamesData from "@/data/games.json";
import ContentGallery from "@/componenets/sections/ContentGallery";

export default function Page() {
  const games = gamesData.sort((a, b) =>
    a.title.localeCompare(b.title, "tr", { sensitivity: "base" })
  );

  return <ContentGallery items={games} heading="Sevdiğim oyunlar" />;
}
