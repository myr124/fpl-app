import { getPlayerPic } from "@/lib/fpl";
import React from "react";
interface PlayerCircleProps {
  player: any;
  top: string;
  left: string;
}
const PlayerCircle = ({ player, top, left }: PlayerCircleProps) => {
  return (
    <div>
      <a
        href={`/players/${player.id}`}
        className="bg-white rounded-full"
        style={{
          position: "absolute",
          left,
          top,
          height: "60px",
          width: "60px",
          zIndex: 10,
        }}
      >
        <img
          src={getPlayerPic(player)}
          alt=""
          width={`${(60 / 78) * 60}em`}
          height={`${(60 / 78) * 60}em`}
          className="bg-white l-0 r-0 m-auto rounded-full"
        />
      </a>
    </div>
  );
};

export default PlayerCircle;
