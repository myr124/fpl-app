export function ForwardRating(player: any): number {
    const FER = ((0.7* player.goals_scored) + (0.1* player.assists) + (0.1* player.expected_goals) + (0.1* player.expected_assists));
    return 100*FER/Math.max(player.minutes,180);
}

export function DefenderRating(player: any): number {
    const DER = (0.4* player.clean_sheets) + (0.2* player.total_points) ;
    return 100*DER/Math.max(player.minutes,180);
}

export function GoalkeeperRating(player: any): number {
    const GER = (0.4* player.clean_sheets) + (0.6 * player.saves);
    return 100*GER/Math.max(player.minutes,180);
}

export function MidfielderRating(player: any): number {
    const MER = (0.4* player.goals_scored) + (0.2* player.assists) + (0.20* player.expected_goals) + (0.20* player.expected_assists)
    return 100*MER/Math.max(player.minutes,180);
}

export const getPlayerPic = (player: any): string => `https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`