import { useState } from "react"
import "./table.css";
import type { Card } from "../../types/card";
import TableCard from "../card/Card";
import CardSlot from "../card-slot/CardSlot";

export default function Table({deck}: {deck: Card[]}) {

    const [cardShown, setCardShown] = useState(true);

    function toggleShown() {
        setCardShown(prevState => !prevState);
    }

    const flop = true;
    const turn = true;
    const river = true;

    return (
        <>
            <div className="table">
                <div className="board-centre">
                    {flop ? <TableCard value={deck[0].value} suit={deck[0].suit} isShown={cardShown} toggleFunction={toggleShown}/> : <CardSlot horizontal={false}/>}
                    {flop ? <TableCard value={deck[1].value} suit={deck[1].suit} isShown={cardShown} toggleFunction={toggleShown}/> : <CardSlot horizontal={false}/>}
                    {flop ? <TableCard value={deck[2].value} suit={deck[2].suit} isShown={cardShown} toggleFunction={toggleShown}/> : <CardSlot horizontal={false}/>}
                    <div className="space"></div>
                    {turn ? <TableCard value={deck[3].value} suit={deck[3].suit} isShown={cardShown} toggleFunction={toggleShown}/> : <CardSlot horizontal={false}/>}
                    <div className="space"></div>
                    {river ? <TableCard value={deck[4].value} suit={deck[4].suit} isShown={cardShown} toggleFunction={toggleShown}/> : <CardSlot horizontal={false}/>}
                </div>
    
                {/* TODO: add case switch with all the different table positions, and associated styling for location */}
            </div>
        </>
    )
}