import { useState } from "react";

function Player({ name, src }: { name: string; src: string }) {
  const [pv, setPv] = useState(20);

  function add(nombre: number) {
    setPv(pv + nombre);
  }

  function remove(nombre: number) {
    if (pv - nombre < 0) {
      setPv(0);
    } else {
      setPv(pv - nombre);
    }
  }

  return (
    <div>
      {src && <img src={src} alt={name} width={600} />}
      <h2>{name}</h2>
      <p>{pv} PV</p>
      <button onClick={() => add(1)}>+1</button>
      <button onClick={() => remove(1)}>-1</button>
      <button onClick={() => add(5)}>+5</button>
      <button onClick={() => remove(5)}>-5</button>
    </div>
  );
}

export default Player;