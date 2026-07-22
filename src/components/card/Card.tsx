import "./card.css";
import type { CardProps } from "../../types/Card";
import { HeartIcon, DiamondIcon, SpadeIcon, ClubIcon } from "@phosphor-icons/react";

export default function Card(props: CardProps) {

    const suitIconSize = 17;

    function getSuitIcon(suit: string) {
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
            <div className="card" onClick={() => props.toggleFunction(props.id)}>
                {props.isShown && <h3 style={{fontSize: "18px"}}>{props.value} </h3>}
                {props.isShown && getSuitIcon(props.suit)}
                {/* TODO: add background pattern on flip */}
            </div>
        </>
    )
}