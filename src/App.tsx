import './App.css';
import { useState } from 'react';
import type { Round } from './types/TableProps';
import cardValues from './utils/getCardValues';
import shuffleDeck from './utils/shuffle';
import handCalc from './utils/handCalc';
import Table from './components/table/Table';
import TableCard from './components/card/Card';
import getWinners from './utils/getWinners';
import WinnerMessage from './components/WinnerMessage';

function App() {

	const [deckData, setDeckData] = useState(cardValues);

	const [round, setRound] = useState<Round>('Blank');

	const [showResults, setShowResults] = useState(false);

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
		setShowResults(false);
		setRound('Pre');
		shuffle(rotationIndices, faceUpIndices);
	}

	function toTheFlop() {
		setRound('Flop');
	}

	function toTheTurn() {
		setRound('Turn');
	}

	function toTheRiver() {
		setRound('River');
	}

	const [p1Hand, setP1Hand] = useState([1, 1, 1, 1, 1, 1, 1]);
	const [p2Hand, setP2Hand] = useState([2, 1, 1, 1, 1, 1, 1]);
	const [p3Hand, setP3Hand] = useState([3, 1, 1, 1, 1, 1, 1]);
	const [p4Hand, setP4Hand] = useState([4, 1, 1, 1, 1, 1, 1]);
	const [p5Hand, setP5Hand] = useState([5, 1, 1, 1, 1, 1, 1]);
	const [p6Hand, setP6Hand] = useState([6, 1, 1, 1, 1, 1, 1]);

	// TODO: we can make the above a single array. look it up

	function showdown() {
		setShowResults(true);
		setDeckData(prevState => prevState.map(card => card = {...card, isShown: true}));
    	setP1Hand(handCalc(1, [p1card1, p1card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
    	setP2Hand(handCalc(2, [p2card1, p2card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
    	setP3Hand(handCalc(3, [p3card1, p3card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
    	setP4Hand(handCalc(4, [p4card1, p4card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
    	setP5Hand(handCalc(5, [p5card1, p5card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
    	setP6Hand(handCalc(6, [p6card1, p6card2, flopCard1, flopCard2, flopCard3, turnCard, riverCard]));
	}

	function reset() {
		setRound('Blank');
	}
	
	const handsArray = [p1Hand, p2Hand, p3Hand, p4Hand, p5Hand, p6Hand];
	const winners = getWinners(handsArray);

	return (
		<>
			<h1>Poker Goblins</h1>
			<Table round={round} cards={cards}/>
			<div style={{display: 'flex', height: '200px'}}>
				<div className="button-container">
					<button onClick={newRound} >New Round</button>
					<button onClick={toTheFlop}>To The Flop</button>
					<button onClick={toTheTurn}>To The Turn</button>
					<button onClick={toTheRiver}>To The River</button>
					<button onClick={showdown}>Showdown</button>
					<button onClick={reset}>Reset Board</button>
				</div>
				{showResults && <WinnerMessage winners={winners}/>}
			</div>

		</>
	);
}

export default App
