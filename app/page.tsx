import FilmButon from "@/componenets/Butonlar/FilmButon";
import KitapButon from "@/componenets/Butonlar/KitapButon";
import DizilerButon from "@/componenets/Butonlar/DizilerButon";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <FilmButon />
      <KitapButon />
      <DizilerButon />
    </main>
  );
}
