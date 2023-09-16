export enum Position {
    Goalkeeper = 1,
    Defender = 2,
    Midfielder = 3,
    Forward = 4
}

export const shortRepresentation = (pos: Position): string => {
    switch(pos) {
        case Position.Defender:
            return "DF";
        case Position.Forward:
            return "FW";
        case Position.Goalkeeper:
            return "GK";
        case Position.Midfielder:
            return "MD";
    }
}