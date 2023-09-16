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
    <Card className="mx-2 my-2">
      <CardHeader>
        <CardTitle>
          <a href={`/players/${player.id}`}>{player.web_name}</a>
        </CardTitle>
        <CardDescription>{player.news}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className="text-2xl">
            {shortRepresentation(player.element_type as Position)}
          </div>
          <div className="w-full flex items-center">
            <img
              src={getPlayerPic(player)}
              alt="Photo for player"
              width={220}
              height={280}
              className="items-center z-10 top-0 left-0 rounded-3xl"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default player;
