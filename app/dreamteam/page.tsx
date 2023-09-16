import { Position } from "@/types/fpl";
import React from "react";
import {
  DefenderRating,
  ForwardRating,
  MidfielderRating,
  GoalkeeperRating,
  getPlayerPic,
} from "@/lib/fpl";

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
              <span className="pitch-halfway-line"></span>
              <span
                className="forward-1"
                style={{
                  position: "absolute",
                  left: `45%`,
                  top: "32.5em",
                  zIndex: 10,
                }}
              >
                <img
                  src={getPlayerPic(forwards[0])}
                  alt=""
                  width={"60em"}
                  height="60em"
                  className="circular-landscape bg-white"
                />
              </span>
              <span
                className="forward-2"
                style={{
                  position: "absolute",
                  left: `35%`,
                  top: "12.5em",
                  zIndex: 10,
                }}
              >
                <img
                  src={getPlayerPic(forwards[1])}
                  alt=""
                  width={"60em"}
                  height="60em"
                  className="bg-white rounded-[100%]"
                />
              </span>
              <span className="pitch-centre-circle"></span>
              <span className="pitch-centre-mark"></span>
              <span className="pitch-penalty-area"></span>
              <span className="pitch-penalty-mark"></span>
              <span className="pitch-penalty-arc"></span>
              <span className="pitch-goal-area"></span>
              <span className="pitch-corner-arc"></span>
            </div>
            <div className="pitch-right">
              <span className="pitch-halfway-line"></span>
              <span className="pitch-centre-circle"></span>
              <span className="pitch-centre-mark"></span>
              <span className="pitch-penalty-area"></span>
              <span className="pitch-penalty-mark"></span>
              <span className="pitch-penalty-arc"></span>
              <span className="pitch-goal-area">
                <img src="" alt="" />
              </span>
              <span className="pitch-corner-arc"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
