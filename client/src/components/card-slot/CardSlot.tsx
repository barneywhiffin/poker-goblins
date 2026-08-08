import "./card-slot.css"

export default function CardSlot({horizontal}: {horizontal: boolean}) {
    return (
            <div className={horizontal ? "card-slot rotated" : "card-slot"} ></div>
    )
}