import type { Card } from "../types/Card";

const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let cards: Card[] = [];
let id = 0;

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        id++;
        const card = {
            id: id,
            suit: suits[i],
            value: values[j],
            isShown: true, 
            rotated: false
        }
        cards.push(card);
    }
}

// FIX: init as false not here but when we make the deck in App.tsx
// then when we shuffle, we also need to set the 10, 11, 16, 17 cards to rotated=true

export default cards;