import "./card.css";
import type { Card } from "../../types/Card";
import { HeartIcon, DiamondIcon, SpadeIcon, ClubIcon } from "@phosphor-icons/react";

export default function Card({value, suit}: Card) {
    return (
        <>
            <div className="card">
                <span>{value} </span>
                <span>{suit}</span>
            </div>
            <HeartIcon size={20} color="red" weight="fill"/>
            <DiamondIcon size={20} color="red" weight="fill"/>
            <SpadeIcon size={20} weight="fill"/>
            <ClubIcon size={20} weight="fill"/>
        </>
    )
}