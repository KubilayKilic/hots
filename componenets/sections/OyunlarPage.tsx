"use client";

import React, { useState } from "react";
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

  return (
    <>
      {selectedGame && (
        <Popup
          imageUrl={selectedGame.image_url}
          title={selectedGame.title}
          description={selectedGame.description}
          resonance={selectedGame.resonance}
          closePopup={() => setSelectedGame(null)}
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
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>
    </>
  );
};

export default OyunlarPage;
