// import Image from "next/image";
export default function PlayerInfo({ params }: any) {
  const { id } = params;
  return (
    <>
      <img
        src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${id}.png`}
        alt="Photo for player"
        width={220}
        height={280}
      />
    </>
  );
}
