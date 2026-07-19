import { useState } from "react"
import "./table.css";
import TableCard from "../card/Card";
import type { Card, Suit, Value } from "../../types/card"
import CardSlot from "../card-slot/CardSlot";

export default function Table() {

    const [cardShown, setCardShown] = useState(true);

    const suits: Suit[] = ["Spades", "Diamonds", "Clubs", "Hearts"];
    const values: Value[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const deck: Card[] = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++)
        deck.push({suit: suits[i], value: values[j]})
    }

    // Fisher-Yates algorithm
    function shuffleDeck(deck: Card[]) {
        const shuffledDeck = [...deck]
          for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        return shuffledDeck;
    }

    const newDeck = shuffleDeck(deck)
    console.log(newDeck);

    function toggleShown() {
        setCardShown(prevState => !prevState);
    }

    return (
        <>
            <div className="table">
                <TableCard value="K" suit="Clubs" isShown={cardShown} toggleFunction={toggleShown}/>
                <TableCard value="Q" suit="Hearts" isShown={cardShown} toggleFunction={toggleShown}/>
                <div className="board-centre">
                    <CardSlot horizontal={false}/>
                    <CardSlot horizontal={false}/>
                    <CardSlot horizontal={false}/>
                    <div className="space"></div>
                    <CardSlot horizontal={false}/>
                    <div className="space"></div>
                    <CardSlot horizontal={false}/>
                </div>
    
                {/* TODO: add case switch with all the different table positions, and associated styling for location */}
            </div>
        </>
    )
}