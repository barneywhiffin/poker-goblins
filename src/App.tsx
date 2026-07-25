import './App.css';
import { useState } from "react";
import type { Round } from './types/TableProps';
import cardValues from './utils/getCardValues';
import shuffleDeck from "./utils/shuffle";
import handCalc from './utils/handCalc';
import Table from "./components/table/Table";
import TableCard from './components/card/Card';

function App() {

	const [deckData, setDeckData] = useState(cardValues);

	const [round, setRound] = useState<Round>("Blank");

    function toggleShown(id: number) {
        setDeckData(prevState => prevState.map(card => 
            id === card.id ? card = {...card, isShown: !card.isShown} : card
        ))
    }

    const deck = deckData.map(card => 
        <TableCard id={card.id} value={card.value} suit={card.suit} isShown={card.isShown} toggleFunction={toggleShown} rotated={card.rotated}/>
    )

	const [flopCard1, flopCard2, flopCard3, turnCard, riverCard, p1card1, p1card2, p2card1, p2card2, p3card1, p3card2, p4card1, p4card2, p5card1, p5card2, p6card1, p6card2] = deck;
	const cards = [flopCard1, flopCard2, flopCard3, turnCard, riverCard, p1card1, p1card2, p2card1, p2card2, p3card1, p3card2, p4card1, p4card2, p5card1, p5card2, p6card1, p6card2];

	const rotationIndices = [9, 10, 15, 16];
	const faceUpIndices = [0, 1, 2, 3, 4, 5, 6];

    function shuffle(rotations: number[], faceUps: number[]) {
		setDeckData(prevState => shuffleDeck(prevState.map(card => card = {...card, isShown: false, rotated: false})));
		// this needs to be done post shuffle (obviously) so hard to merge with above line
		setDeckData(prevState => prevState.map((card, idx) => 
			rotations.includes(idx) ? {...card, rotated: true} : card
		));
		setDeckData(prevState => prevState.map((card, idx) => 
			faceUps.includes(idx) ? {...card, isShown: true} : card
		));
    }

	function newRound() {
		setRound("Pre");
		shuffle(rotationIndices, faceUpIndices);
	}

	function toTheFlop() {
		setRound("Flop");
	}

	function toTheTurn() {
		setRound("Turn");
	}

	function toTheRiver() {
		setRound("River");
	}

	const [p1Hand, setP1Hand] = useState("");
	const [p2Hand, setP2Hand] = useState("");
	const [p3Hand, setP3Hand] = useState("");
	const [p4Hand, setP4Hand] = useState("");
	const [p5Hand, setP5Hand] = useState("");
	const [p6Hand, setP6Hand] = useState("");

	// TODO: we can make the above a single array. look it up

	function showdown() {
		setDeckData(prevState => prevState.map(card => card = {...card, isShown: true}));
    	setP1Hand(handCalc(p1card1, p1card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
    	setP2Hand(handCalc(p2card1, p2card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
    	setP3Hand(handCalc(p3card1, p3card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
    	setP4Hand(handCalc(p4card1, p4card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
    	setP5Hand(handCalc(p5card1, p5card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
    	setP6Hand(handCalc(p6card1, p6card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard));
	}

	function reset() {
		setRound("Blank");	
	}

	return (
		<>
			<Table round={round} cards={cards}/>
			<div className="button-container">
				<button onClick={newRound} >New Round</button>
				<button onClick={toTheFlop}>To The Flop</button>
				<button onClick={toTheTurn}>To The Turn</button>
				<button onClick={toTheRiver}>To The River</button>
				<button onClick={showdown}>Showdown</button>
				<button onClick={reset}>Reset Board</button>
			</div>
			<div style={{textAlign: "center"}}>
				{p1Hand === "Flush" && <p>Player 1 Flush!</p>}
				{p2Hand === "Flush" && <p>Player 2 Flush!</p>}
				{p3Hand === "Flush" && <p>Player 3 Flush!</p>}
				{p4Hand === "Flush" && <p>Player 4 Flush!</p>}
				{p5Hand === "Flush" && <p>Player 5 Flush!</p>}
				{p6Hand === "Flush" && <p>Player 6 Flush!</p>}
			</div>

		</>
	);
}

export default App
