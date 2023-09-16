import { Position } from "@/types/fpl";
import React from "react";
import {
  DefenderRating,
  ForwardRating,
  MidfielderRating,
  GoalkeeperRating,
  getPlayerPic,
} from "@/lib/fpl";
import PlayerCircle from "@/components/player-circle";

const page = async () => {
  const fplApiUrl = `https://fantasy.premierleague.com/api/bootstrap-static/`;
  const data: any = await (await fetch(fplApiUrl)).json();
  let players: any[] = data.elements;
  let forwards = [...players];
  let defenders = [...players];
  let midfielders = [...players];
  let goalkeepers = [...players];

  forwards = forwards.filter(
    (player) => player.element_type === Position.Forward
  );
  forwards.sort((a, b) => {
    const _a = Number(ForwardRating(a));
    const _b = Number(ForwardRating(b));
    return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  });
  // players.sort((a, b) => {
  //   const _a = Number(a.);
  //   const _b = Number(b.selected_by_percent);
  //   return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  // });
  forwards = forwards.slice(0, 3);

  defenders = defenders.filter(
    (player) => player.element_type === Position.Defender
  );
  defenders.sort((a, b) => {
    const _a = Number(DefenderRating(a));
    const _b = Number(DefenderRating(b));
    return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  });
  // players.sort((a, b) => {
  //   const _a = Number(a.);
  //   const _b = Number(b.selected_by_percent);
  //   return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  // });
  defenders = defenders.slice(0, 5);

  midfielders = midfielders.filter(
    (player) => player.element_type === Position.Midfielder
  );
  midfielders.sort((a, b) => {
    const _a = Number(MidfielderRating(a));
    const _b = Number(MidfielderRating(b));
    return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  });
  // players.sort((a, b) => {
  //   const _a = Number(a.);
  //   const _b = Number(b.selected_by_percent);
  //   return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  // });
  midfielders = midfielders.slice(0, 5);

  goalkeepers = goalkeepers.filter(
    (player) => player.element_type === Position.Goalkeeper
  );
  goalkeepers.sort((a, b) => {
    const _a = Number(GoalkeeperRating(a));
    const _b = Number(GoalkeeperRating(b));
    return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  });
  // players.sort((a, b) => {
  //   const _a = Number(a.);
  //   const _b = Number(b.selected_by_percent);
  //   return (_a > _b ? 1 : 0) * -1 + (_a < b ? 1 : 0);
  // });
  goalkeepers = goalkeepers.slice(0, 2);

  const forwardPositions: { top: string; left: string }[] = [
    { top: "42.5%", left: `${100 - 75}%` },
    { top: "9.5%", left: `${100 - 51.5}%` },
    { top: "74.5%", left: `${100 - 51.5}%` },
  ];

  const midfielderPositions: { top: string; left: string }[] = [
    { top: "42.5%", left: `${90}%` },
    { top: "9.5%", left: `${90}%` },
    { top: "74.5%", left: `${90}%` },
  ];
  const defenderPositions: { top: string; left: string }[] = [
    { top: "12.5%", left: `${20}%` },
    { top: "32.5%", left: `${20}%` },
    { top: "52.5%", left: `${20}%` },
    { top: "72.5%", left: "20%" },
  ];
  const goalkeeperPositions: { top: string; left: string }[] = [
    { top: "42.5%", left: `${2}%` },
  ];

  return (
    <>
      {/* <div>
        {forwards.map((player, i) => (
          <>
            {player.web_name}
            <br />
          </>
        ))}
        {defenders.map((player, i) => (
          <>
            {player.web_name}
            <br />
          </>
        ))}
        {midfielders.map((player, i) => (
          <>
            {player.web_name}
            <br />
          </>
        ))}
        {goalkeepers.map((player, i) => (
          <>
            {player.web_name}
            <br />
          </>
        ))} */}
      {/* </div> */}
      <div className="flex w-full h-full items-center justify-center mt-8 ">
        <div className="pitch-container">
          <div className="pitch-field">
            <div className="pitch-left">
              {[0].map((i) => (
                <PlayerCircle
                  player={goalkeepers[i]}
                  top={goalkeeperPositions[i].top}
                  left={goalkeeperPositions[i].left}
                />
              ))}
              {[0, 1, 2, 3].map((i) => (
                <PlayerCircle
                  player={defenders[i]}
                  top={defenderPositions[i].top}
                  left={defenderPositions[i].left}
                />
              ))}
              <span className="pitch-halfway-line"></span>
              <span className="pitch-centre-circle"></span>
              <span className="pitch-centre-mark"></span>
              <span className="pitch-penalty-area"></span>
              <span className="pitch-penalty-mark"></span>
              <span className="pitch-penalty-arc"></span>
              <span className="pitch-goal-area"></span>
              <span className="pitch-corner-arc"></span>
            </div>
            <div className="pitch-right">
              {[0, 1, 2].map((i) => (
                <PlayerCircle
                  player={forwards[i]}
                  top={forwardPositions[i].top}
                  left={forwardPositions[i].left}
                />
              ))}

              <span className="pitch-halfway-line">
                {[0, 1, 2].map((i) => (
                  <PlayerCircle
                    player={midfielders[i]}
                    top={midfielderPositions[i].top}
                    left={midfielderPositions[i].left}
                  />
                ))}
              </span>
              <span className="pitch-centre-circle"></span>
              <span className="pitch-centre-mark"></span>
              <span className="pitch-penalty-area"></span>
              <span className="pitch-penalty-mark"></span>
              <span className="pitch-penalty-arc"></span>
              <span className="pitch-goal-area"></span>
              <span className="pitch-corner-arc"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
