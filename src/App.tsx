import './App.css';
import { useState } from "react";
import {createDeck, shuffleDeck} from "./utils/deck";

import Table from "./components/table/Table";

function App() {

	const [deck, setDeck] = useState(createDeck());

    function shuffle() {
        setDeck(prevDeck => shuffleDeck(prevDeck))
    }

	return (
		<>

			<Table deck={deck}/>
			<button onClick={shuffle}>Shuffle Deck</button>
		</>
	)
}

export default App
