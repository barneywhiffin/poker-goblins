import "./card.css"

interface CardName {
    value: string;
    suit: string
}

export default function Card({value, suit}: CardName) {
    return (
        <>
            <div className="card">
                <span>{value}</span>
                <span>{suit}</span>
            </div>
        </>
    )
}