import "./card.css";
import type { Suit, Card } from "../../types/card";
import { HeartIcon, DiamondIcon, SpadeIcon, ClubIcon } from "@phosphor-icons/react";

export default function Card(props: Card) {

    function getSuitIcon(suit: Suit) {
        switch(suit) {
            case("Hearts"): {
                return <HeartIcon size={20} weight="fill" color="red"/>
            }
            case("Diamonds"): {
                return <DiamondIcon size={20} weight="fill" color="red"/>
            }
            case("Spades"): {
                return <SpadeIcon size={20} weight="fill"/>
            }
            case("Clubs"): {
                return <ClubIcon size={20} weight="fill"/>
            }
        }
    }

    return (
        <>
            <div className="card">
                <span>{props.value} </span>
                {getSuitIcon(props.suit)}
            </div>
        </>
    )
}