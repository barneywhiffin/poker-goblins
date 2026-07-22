import './table.css';
import CardSlot from '../card-slot/CardSlot';

export default function Table({deck}: {deck: React.JSX.Element[]}) {

    const flopReached = true;
    const turnReached = true;
    const riverReached = true;

    const numPlayers = 4;

    // for (let i = 0; i < numPlayers; i++) {
    //     playerSlots.push(
    //         <div className="player" style={{top: 100*i}}>
    //             <CardSlot horizontal={false}/>
    //             <CardSlot horizontal={false}/>
    //         </div>
    //     )
    // }

    // i think we need to manually fix all the possible slot positions
    // then simply have a function to map players to the ones we are using

    const [flopCard1, flopCard2, flopCard3, turnCard, riverCard, p1card1, p1card2, p2card1, p2card2, p3card1, p3card2, p4card1, p4card2, p5card1, p5card2, p6card1, p6card2] = deck;

    // console.log(p1card1.props);
 
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
                {/* {playerSlots} */}

                <div className="player" style={{top: "230px", left:"450px"}}>
                    {numPlayers > 0 ? p1card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p1card2 : <CardSlot horizontal={false}/>}
                </div>

                <div className="player" style={{top: "230px", left:"200px"}}>
                    {numPlayers > 0 ? p2card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p2card2 : <CardSlot horizontal={false}/>}
                </div>

                <div className="player" style={{top: "110px", left:"20px", flexDirection: "column"}}>
                    {numPlayers > 0 ? p3card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p3card2 : <CardSlot horizontal={false}/>}
                </div>

                <div className="player" style={{top: "10px", left:"200px"}}>
                    {numPlayers > 0 ? p4card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p4card2 : <CardSlot horizontal={false}/>}
                </div>

                <div className="player" style={{top: "10px", left:"450px"}}>
                    {numPlayers > 0 ? p5card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p5card2 : <CardSlot horizontal={false}/>}
                </div>

                <div className="player" style={{top: "110px", left:"670px", flexDirection: "column"}}>
                    {numPlayers > 0 ? p6card1 : <CardSlot horizontal={false}/>}
                    {numPlayers > 0 ? p6card2 : <CardSlot horizontal={false}/>}
                </div>
    
                {/* TODO: add case switch with all the different table positions, and associated styling for location */}
            </div>
        </>
    )
}