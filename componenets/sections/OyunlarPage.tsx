"use client";

import React, { useState, useEffect } from "react";
import Card from "@/componenets/ui/Card";
import Popup from "@/componenets/ui/Popup";

// Game tipi tanımı
interface Game {
  title: string;
  description: string;
  image_url: string;
  resonance: number;
}

// Props tipi
interface OyunlarPageProps {
  games: Game[];
}

const OyunlarPage: React.FC<OyunlarPageProps> = ({ games }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Mevcut oyun indexi

  // prevGame fonksiyonu
  const prevGame = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : games.length - 1
    );
    setSelectedGame(
      games[currentIndex > 0 ? currentIndex - 1 : games.length - 1]
    );
  };

  // nextGame fonksiyonu
  const nextGame = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < games.length - 1 ? prevIndex + 1 : 0
    );
    setSelectedGame(
      games[currentIndex < games.length - 1 ? currentIndex + 1 : 0]
    );
  };

  // Klavye tuşları ile gezinme işlevselliği
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "d") {
        nextGame(); // Sağ ok tuşu veya "d" tuşuna basıldığında
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        prevGame(); // Sol ok tuşu veya "a" tuşuna basıldığında
      }
    };

    // keydown olayını dinlemek
    window.addEventListener("keydown", handleKeyDown);

    // component unmount olduğunda event listener'ı temizlemek
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, games]); // currentIndex ve games değiştiğinde yeniden çalıştır

  return (
    <>
      {selectedGame && (
        <Popup
          imageUrl={selectedGame.image_url}
          title={selectedGame.title}
          description={selectedGame.description}
          resonance={selectedGame.resonance}
          closePopup={() => setSelectedGame(null)}
          prevGame={prevGame} // prevGame ve nextGame burada kullanılıyor
          nextGame={nextGame}
        />
      )}

      <div className="text-4xl justify-center flex mt-8">
        Well-crafted worlds I was glad to visit.
      </div>

      <div className="relative z-10 flex justify-center mt-3 gap-x-6 gap-y-6 flex-wrap p-20">
        {games.map((game, index) => (
          <Card
            key={index}
            title={game.title}
            description={game.description}
            imageUrl={game.image_url}
            resonance={game.resonance}
            onClick={() => {
              setSelectedGame(game);
              setCurrentIndex(index); // Seçilen oyunun index'ini günceller
            }}
          />
        ))}
      </div>
    </>
  );
};

export default OyunlarPage;
