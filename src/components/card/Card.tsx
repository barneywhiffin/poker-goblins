import "./card.css";
import type { Suit, Card } from "../../types/card";
import { HeartIcon, DiamondIcon, SpadeIcon, ClubIcon } from "@phosphor-icons/react";

export default function Card(props: Card) {

    const suitIconSize = 17;

    function getSuitIcon(suit: Suit) {
        switch(suit) {
            case("Hearts"): {
                return <HeartIcon size={suitIconSize} weight="fill" color="red"/>
            }
            case("Diamonds"): {
                return <DiamondIcon size={suitIconSize} weight="fill" color="red"/>
            }
            case("Spades"): {
                return <SpadeIcon size={suitIconSize} weight="fill"/>
            }
            case("Clubs"): {
                return <ClubIcon size={suitIconSize} weight="fill"/>
            }
        }
    }

    return (
        <>
            <div className="card" onClick={props.toggleFunction}>
                {props.isShown && <h3 style={{fontSize: "18px"}}>{props.value} </h3>}
                {props.isShown && getSuitIcon(props.suit)}
            </div>
        </>
    )
}