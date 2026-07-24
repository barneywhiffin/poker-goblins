import './App.css';
import { useState } from "react";
import type { Round } from './types/TableProps';
import cardValues from './utils/getCardValues';
import shuffleDeck from "./utils/shuffle";
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

    function shuffle() {
		setDeckData(prevState => shuffleDeck(prevState.map(card => card = {...card, isShown: false, rotated: false})));
		// this needs to be done post shuffle (obviously) so hard to merge with above line
		setDeckData(prevState => prevState.map((card, idx) => 
			idx === 9 || idx === 10 || idx === 15 || idx === 16 ? {...card, rotated: true} : card
		));
		setDeckData(prevState => prevState.map((card, idx) => 
			idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4 || idx === 5 || idx === 6 ? {...card, isShown: true} : card
		));
    }

	let B1 = false;
	let B2 = false;
	let B3 = false;
	let B4 = false;
	let B5 = false;


	function newRound() {
		setRound("Pre");
		shuffle();
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

	function showdown() {
		setDeckData(prevState => prevState.map(card => card = {...card, isShown: true}));
	}

	return (
		<>
			<Table round={round} deck={deck}/>
			<button onClick={newRound} style={{margin: "20px 200px"}} disabled={B1} >New Round</button>
			<button onClick={toTheFlop} style={{margin: "0 200px"}} disabled={B2}>To The Flop</button>
			<button onClick={toTheTurn} style={{margin: "20px 200px"}} disabled={B3}>To The Turn</button>
			<button onClick={toTheRiver} style={{margin: "0 200px"}} disabled={B4}>To The River</button>
			<button onClick={showdown} style={{margin: "20px 200px"}} disabled={B5}>Showdown</button>
		</>
	);
}

export default App
