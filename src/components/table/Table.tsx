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

    return (
        <>
            <div className="table">
                <TableCard value={deck[0].value} suit={deck[0].suit} isShown={cardShown} toggleFunction={toggleShown}/>
                <TableCard value={deck[1].value} suit={deck[1].suit} isShown={cardShown} toggleFunction={toggleShown}/>
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