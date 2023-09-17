"use client";
import { useState } from "react";

const Minigame = () => {
  const [ballMoving, setBallMoving] = useState(false);
  return (
    <div className="relative h-fill">
      <img
        src="/soccer-ball-variant-svgrepo-com.svg"
        className="h-10 w-10 top-48 left-[50%] absolute"
        onClick={() => {
          if (ballMoving) return;
          setBallMoving(true);
          console.log("Kicked Ball");
        }}
      />
    </div>
  );
};

export default Minigame;
