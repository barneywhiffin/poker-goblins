export type Value = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
export type Suit = "Spades" | "Diamonds" | "Clubs" | "Hearts";

export interface Card {
    value: Value;
    suit: Suit
}