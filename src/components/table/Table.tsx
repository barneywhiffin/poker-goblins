import { useState } from "react"
import "./table.css";
import Card from "../card/Card";
import CardSlot from "../card-slot/CardSlot";

export default function Table() {

    const [cardShown, setCardShown] = useState(true);

    function toggleShown() {
        setCardShown(prevState => !prevState);
    }
    return (
        <>
            <div className="table">
                {/* <Card value="K" suit="Clubs" isShown={cardShown} toggleFunction={toggleShown}/>
                <Card value="Q" suit="Hearts" isShown={cardShown} toggleFunction={toggleShown}/> */}
                <CardSlot horizontal={false}/>
            </div>
        </>
    )
}