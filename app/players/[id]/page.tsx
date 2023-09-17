import * as React from "react";
import { cn } from "@/lib/utils";
import { Position } from "@/types/fpl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Update the import path

import {
  ForwardRating,
  DefenderRating,
  GoalkeeperRating,
  MidfielderRating,
} from "@/lib/fpl";

export default async function PlayerInfo({ params }: any) {
  const { id: _id } = params;
  const id = Number(_id);

  const fplApiUrl = `https://fantasy.premierleague.com/api/bootstrap-static/`;
  const data: any = await (await fetch(fplApiUrl)).json();
  const players: any[] = data.elements;

  let player: any | undefined = undefined;
  for (let i = 0; i < players.length; i++) {
    if (players[i].id == id) {
      player = players[i];
    }
  }
  if (!player) return <></>;
  const playerInfo: any = await (
    await fetch(`https://fantasy.premierleague.com/api/element-summary/${id}/`)
  ).json();

  const history: any[] = playerInfo.history.reverse();
  const nextGame: any = playerInfo.fixtures[0];
  const nextGameKickoffTiem = new Date(nextGame.kickoff_time);

  const getTeamName = (teamId: number) => {
    return data.teams.find((team: any) => team.id == teamId).name;
  };

  // switch(position) {
  //   case: "FW"
  // }

  return (
    <div className="flex flex-col gap-4 p-4">
      <Card className="flex flex-row h-72 items-start gap-2 p-2">
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
          <CardHeader>
            <CardTitle className="text-4xl font-bold md:text-8xl">
              {player.first_name} {player.second_name}
            </CardTitle>
            <CardDescription className="text-xl md:text-4xl">
              {player.element_type === Position.Forward && (
                <>
                  Goals: {player.goals_scored} | Assists: {player.assists} |
                  Expected Goals: {player.expected_goals} | Expected Assists:{" "}
                  {player.expected_assists}
                </>
              )}
              {player.element_type === Position.Goalkeeper && (
                <>
                  Saves: {player.saves} | Goals Allowed: {player.goals_conceded}{" "}
                  | Clean Sheets: {player.clean_sheets}
                </>
              )}
              {player.element_type === Position.Defender && (
                <>
                  Goals Allowed: {player.goals_conceded} | Clean Sheets:{" "}
                  {player.clean_sheets} | Total Points: {player.total_points}
                </>
              )}
              {player.element_type === Position.Midfielder && (
                <>
                  Goals: {player.goals_scored} | Assists: {player.assists} |
                  Expected Goals: {player.expected_goals} | Expected Assists:{" "}
                  {player.expected_assists}
                </>
              )}
            </CardDescription>
          </CardHeader>
        </div>
        <div className="scoreContainer p-4">
          {player.element_type === Position.Forward && (
            <>{ForwardRating(player).toFixed(2)}</>
          )}
          {player.element_type === Position.Goalkeeper && (
            <>{GoalkeeperRating(player).toFixed(2)}</>
          )}
          {player.element_type === Position.Defender && (
            <>{DefenderRating(player).toFixed(2)}</>
          )}
          {player.element_type === Position.Midfielder && (
            <>{MidfielderRating(player).toFixed(2)}</>
          )}
        </div>
      </Card>
      <Card className="flex grow justify-center items-center gap-2 p-2">
        <CardHeader>
          <CardTitle className="text-bold text-5xl">Next Match</CardTitle>
          <CardDescription className="text-4xl">
            {getTeamName(player.team)}{" "}
            {nextGame.team_h == player.team ? " V " : " @ "}{" "}
            {getTeamName(
              nextGame.team_h == player.team ? nextGame.team_a : nextGame.team_h
            )}
            <br />
            {
              ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                nextGameKickoffTiem.getDay()
              ]
            }
            ,{" "}
            {
              [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][nextGameKickoffTiem.getMonth()]
            }{" "}
            {nextGameKickoffTiem.getDate()}, {nextGameKickoffTiem.getHours()}:
            {nextGameKickoffTiem.getMinutes().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="flex grow justify-center items-center gap-2 p-2">
        <CardHeader>
          <CardTitle className="text-bold text-5xl">Match History</CardTitle>
          <CardDescription className="text-4xl">
            {history.map((match, i) => {
              const kickoff_time = new Date(match.kickoff_time);
              return (
                <React.Fragment key={i}>
                  {getTeamName(player.team)}{" "}
                  {match.was_home ? "   V   " : "   @   "}{" "}
                  {getTeamName(match.opponent_team)}
                  <br />
                  {
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                      kickoff_time.getDay()
                    ]
                  }
                  ,{" "}
                  {
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][kickoff_time.getMonth()]
                  }{" "}
                  {kickoff_time.getDate()}, {kickoff_time.getHours()}:
                  {kickoff_time.getMinutes().toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                  <br />
                  G: {match.goals_scored} | A: {match.assists}
                  <br />
                  <br />
                </React.Fragment>
              );
            })}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
