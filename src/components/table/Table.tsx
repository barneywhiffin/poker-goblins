import './table.css';
import CardSlot from '../card-slot/CardSlot';

export default function Table({deck}: {deck: React.JSX.Element[]}) {

    const flopReached = true;
    const turnReached = true;
    const riverReached = true;

    const [flopCard1, flopCard2, flopCard3, turnCard, riverCard] = deck;

    return (
        <>
            <div className="table">
                <div className="board-centre">
                    {flopReached ? flopCard1 : <CardSlot horizontal={false}/>}
                    {flopReached ? flopCard2 : <CardSlot horizontal={false}/>}
                    {flopReached ? flopCard3 : <CardSlot horizontal={false}/>}                    
                    <div className="space"></div>
                    {turnReached ? turnCard : <CardSlot horizontal={false}/>}                    
                    <div className="space"></div>
                    {riverReached ? riverCard : <CardSlot horizontal={false}/>}                    
                </div>
    
                {/* TODO: add case switch with all the different table positions, and associated styling for location */}
            </div>
        </>
    )
}