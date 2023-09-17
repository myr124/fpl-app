import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Position, shortRepresentation } from "@/types/fpl";
import { getPlayerPic } from "@/lib/fpl";

interface Props {
  player: any;
}

const player = ({ player }: Props) => {
  return (
    <a href={`/players/${player.id}`}>
      <Card className="player-card mx-2 my-2 hover:scale-105">
        <CardHeader>
          <CardTitle className="font-bold">
            {player.first_name} {player.second_name}
          </CardTitle>
          <CardDescription className="injury-status font-bold">
            {player.news}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Player image */}
            <img
              src={getPlayerPic(player)}
              alt="Photo for player"
              width={220}
              height={280}
              className="rounded-3xl z-10 relative"
            />

            {/* Position label */}
            <div
              className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-2/3 text-8xl font-bold z-0 drop-shadow-2xl hover:text-opacity-100"
              style={{ opacity: "50%" }}
            >
              {shortRepresentation(player.element_type as Position)}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default player;
