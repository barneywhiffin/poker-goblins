import type { Card, Suit, Value } from "../types/card"

export function createDeck() {
    const suits: Suit[] = ["Spades", "Diamonds", "Clubs", "Hearts"];
    const values: Value[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const deck: Card[] = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++)
        deck.push({suit: suits[i], value: values[j]})
    }
    return deck;
}

export function shuffleDeck(deck: Card[]) {
    // Fisher-Yates algorithm
    const shuffledDeck = [...deck]
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
}