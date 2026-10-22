interface PlayerProps {
  name: string;
}

function Player({ name }: PlayerProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>20 PV</p>
    </article>
  );
}

export default Player;