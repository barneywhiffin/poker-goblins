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
            isShown: false, 
            rotated: false
        }
        cards.push(card);
    }
}

export default cards;