import FilmlerButon from "@/componenets/Butonlar/FilmlerButon";
import KitaplarButon from "@/componenets/Butonlar/KitaplarButon";
import DizilerButon from "@/componenets/Butonlar/DizilerButon";
import OyunlarButon from "@/componenets/Butonlar/OyunlarButon";
import MuziklerButon from "@/componenets/Butonlar/MüziklerButon";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl text-amber-50 font-bold mb-6">🗄 Arşiv</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <FilmlerButon />
        <DizilerButon />
        <OyunlarButon />
        <KitaplarButon />
        <MuziklerButon />
      </div>
    </main>
  );
}
