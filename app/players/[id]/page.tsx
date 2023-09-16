import { Position } from "@/types/fpl";

// import Image from "next/image";
export default async function PlayerInfo({ params }: any) {
  const { id: _id } = params;
  const id = Number(_id);
  // console.log(id);

  const fplApiUrl = `https://fantasy.premierleague.com/api/bootstrap-static/`;
  const data: any = await (await fetch(fplApiUrl)).json();
  const players: any[] = data.elements;
  // console.log(players);
  // let player: any = players.find((value) => value.id == id);
  let player: any | undefined = undefined;
  for (let i = 0; i < players.length; i++) {
    // console.log(players[i].id);
    if (players[i].id == id) {
      player = players[i];
    }
  }
  if (!player) return <></>;
  const position = player.element_type as Position;
  // console.log(player);

  return (
    <>
      <div className="flex flex-row h-72 items-start gap-2">
        <div className="playerImageContainer">
          <img
            className="playerImage"
            src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}
            alt="Photo for player"
            width={220}
            height={280}
          />
        </div>
        <div className="flex grow h-full flex-row justify-start items-center gap-2">
          <h1 className="text-24xl font-bold md:text-6xl">
            {player.first_name} {player.second_name}
          </h1>
        </div>
      </div>
    </>
  );
}
