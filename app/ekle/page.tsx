"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type TMDBSonucu = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  yorum?: string;
};

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

export default function EkleSayfasi() {
  const [kategori, setKategori] = useState("film");
  const [arama, setArama] = useState("");
  const [sonuclar, setSonuclar] = useState<TMDBSonucu[]>([]);
  const [secili, setSecili] = useState<TMDBSonucu | null>(null);
  const [yorum, setYorum] = useState("");
  const [puan, setPuan] = useState(0);

  useEffect(() => {
    const fetchVeri = async () => {
      if (arama.trim().length < 2 || !["film", "dizi"].includes(kategori)) {
        setSonuclar([]);
        return;
      }

      const endpoint =
        kategori === "film"
          ? "https://api.themoviedb.org/3/search/movie"
          : "https://api.themoviedb.org/3/search/tv";

      const res = await fetch(
        `${endpoint}?query=${arama}&api_key=${API_KEY}&language=tr-TR`
      );
      const json = await res.json();
      setSonuclar(json.results || []);
    };

    const delay = setTimeout(fetchVeri, 600);
    return () => clearTimeout(delay);
  }, [arama, kategori]);

  const handleKaydet = async () => {
    if (!secili) return;

    const { error } = await supabase.from("archive").insert([
      {
        title: secili.title || secili.name,
        description: secili.overview,
        image_url: `https://image.tmdb.org/t/p/w500${secili.poster_path}`,
        resonance: puan,
        category: kategori,
        yorum: yorum,
      },
    ]);

    if (error) {
      alert("Kayıt başarısız: " + error.message);
    } else {
      alert("✅ İçerik başarıyla eklendi!");
      setSecili(null);
      setYorum("");
      setPuan(0);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          📥 İçerik Ekle
        </h1>

        {/* Kategori */}
        <label className="block mb-2 font-medium text-gray-700">
          Kategori Seçiniz
        </label>
        <select
          className="w-full p-2 border rounded mb-6"
          value={kategori}
          onChange={(e) => {
            setKategori(e.target.value);
            setSecili(null);
          }}
        >
          <option value="film">🎬 Film</option>
          <option value="dizi">📺 Dizi</option>
          <option value="oyun">🎮 Oyun</option>
          <option value="kitap">📚 Kitap</option>
          <option value="muzik">🎵 Müzik</option>
        </select>

        {/* İçerik Ara + Açıklama */}
        <div className="flex justify-between items-end mb-2">
          <label className="font-medium text-gray-700">İçerik Ara</label>
          <span className="text-sm text-rose-500">
            Aradığınız içerik seçili kategori altında aranacaktır.
          </span>
        </div>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="İçerik adı girin..."
          value={arama}
          onChange={(e) => setArama(e.target.value)}
        />

        {/* Arama Sonuçları */}
        {sonuclar.length > 0 && (
          <div className="mt-6 space-y-4">
            {sonuclar.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-2 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSecili(item);
                  setSonuclar([]);
                  setArama("");
                }}
              >
                {item.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-12 rounded"
                  />
                )}
                <div>
                  <p className="font-semibold">{item.title || item.name}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Seçilen İçerik Detayı */}
      {secili && (
        <div className="mt-10 max-w-xl w-full bg-white p-6 rounded-xl shadow-xl">
          <div className="flex gap-6 items-start">
            <div className="relative w-full max-w-[220px] aspect-[2/3] rounded-lg shadow-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${secili.poster_path}`}
                alt={secili.title || secili.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2">
                {secili.title || secili.name}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{secili.overview}</p>

              {/* Yorum */}
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Yorumunuz
              </label>
              <textarea
                className="w-full p-2 border rounded mb-4"
                placeholder="Yorumunuzu yazın..."
                rows={3}
                value={yorum}
                onChange={(e) => setYorum(e.target.value)}
              />

              {/* Puan */}
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Puanınız
              </label>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    onClick={() => setPuan(i)}
                    className={`text-2xl cursor-pointer ${
                      i <= puan ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Kaydet */}
              <button
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                onClick={handleKaydet}
              >
                ✅ İçeriği Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
