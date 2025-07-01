import FilmlerButon from "@/componenets/Butonlar/FilmlerButon";
import KitaplarButon from "@/componenets/Butonlar/KitaplarButon";
import DizilerButon from "@/componenets/Butonlar/DizilerButon";
import OyunlarButon from "@/componenets/Butonlar/OyunlarButon";
import MuziklerButon from "@/componenets/Butonlar/MüziklerButon";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center ">
      <FilmlerButon />
      <DizilerButon />
      <KitaplarButon />
      <OyunlarButon />
      <MuziklerButon />
    </main>
  );
}
