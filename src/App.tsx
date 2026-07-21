import './App.css';
import { useState } from "react";
import cardValues from './utils/getCardValues';
import shuffleDeck from "./utils/shuffle";
import Table from "./components/table/Table";
import TableCard from './components/card/Card';

function App() {

	const [deckData, setDeckData] = useState(cardValues);

    function toggleShown(id: number) {
        setDeckData(prevState => prevState.map(card => 
            id === card.id ? card = {...card, isShown: !card.isShown} : card
        ))
    }

    const deck = deckData.map(card => 
        <TableCard id={card.id} value={card.value} suit={card.suit} isShown={card.isShown} toggleFunction={toggleShown}/>
    )

    function shuffle() {
        setDeckData(shuffleDeck);
    }

	return (
		<>
			<Table deck={deck}/>
			<button onClick={shuffle} style={{margin: "20px 200px"}} >Shuffle Deck</button>
		</>
	);
}

export default App
