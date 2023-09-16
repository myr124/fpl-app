export function ForwardRating(player: any): number {
    const FER = (0.7* player.goals_scored) + (0.1* player.assists) + (0.1* player.expected_goals) + (0.1* player.expected_assists);
    return FER;
}

export function DefenderRating(player: any): number {
    const DER = (0.4* player.clean_sheets) + (0.2* player.points_per_game) ;
    return DER;
}

export function GoalkeeperRating(player: any): number {
    const GER = (0.4* player.clean_sheets) + (0.4 * player.saves) + (0.20* player.saves_per_90);
    return GER;
}

export function MidfielderRating(player: any): number {
    const MER = (0.4* player.goals_scored) + (0.2* player.assists) + (0.20* player.expected_goals) + (0.20* player.expected_assists)
    return MER;
}

export const getPlayerPic = (player: any): string => `https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`