import { useState } from "react";

interface PlayerProps {
  name: string;
}

function Player({ name }: PlayerProps) {
  const [pv, setPv] = useState(20);

  return (
    <article>
      <h2>{name}</h2>
      <p>{pv} PV</p>
      <button type="button" onClick={() => setPv(pv + 1)}>
        +1
      </button>
    </article>
  );
}

export default Player;