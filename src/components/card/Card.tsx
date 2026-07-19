import "./card.css";
import { HeartIcon } from "@phosphor-icons/react";

interface CardName {
    value: string;
    suit: string
}

export default function Card({value, suit}: CardName) {
    return (
        <>
            <div className="card">
                <span>{value} </span>
                <span>{suit}</span>
            </div>
            <HeartIcon />
        </>
    )
}