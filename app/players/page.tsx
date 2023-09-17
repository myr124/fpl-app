// "use client";
// import PlayerNews from "@/components/player-news";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Player from "@/components/player";

export default async function PlayersPage() {
  const fplApiUrl = `https://fantasy.premierleague.com/api/bootstrap-static/`;
  const data: any = await (await fetch(fplApiUrl)).json();
  let players: any[] = data.elements;
  players.sort((a, b) => {
    const _a = Number(a.selected_by_percent);
    const _b = Number(b.selected_by_percent);
    return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  });
  //   players = players.slice(0, 5);
  //   console.log(players);
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center w-full">
        {players.map((player, i) => (
          <Player player={player} key={i} />
        ))}
      </div>
    </div>
  );
}
