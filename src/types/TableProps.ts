export type Round = "Blank" | "Pre" | "Flop" | "Turn" | "River";

export interface TableProps {
    round: Round
    cards: React.JSX.Element[]
}