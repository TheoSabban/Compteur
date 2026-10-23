import { useState } from "react";
import Player from "./components/player.tsx";
import dietrich from "./assets/Artwork_Dietrich.png";
import leda from "./assets/Artwork_Leda.png";
import cai from "./assets/Artwork_Cai.png";

const playerList = [
  { name: "Dietrich", src: dietrich },
  { name: "Cai", src: cai },
  { name: "Leda", src: leda },
];

function App() {
  const [playerName, setPlayerName] = useState("Dietrich");

  const player = playerList.find((play) => play.name === playerName);

  if (!player) {
    return null;
  }

  return (
    <main>
      <h1>Compteur de PV</h1>

      <nav>
        <button type="button" onClick={() => setPlayerName("Dietrich")}>
          Dietrich
        </button>
        <button type="button" onClick={() => setPlayerName("Cai")}>
          Cai
        </button>
        <button type="button" onClick={() => setPlayerName("Leda")}>
          Leda
        </button>
      </nav>

      <Player name={player.name} src={player.src} />
    </main>
  );
}

export default App;