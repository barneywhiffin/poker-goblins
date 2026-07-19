import './App.css';
import { useState } from "react"
import Card from "./components/card/Card";
import Table from "./components/table/Table";

function App() {

  const [cardShown, setCardShown] = useState(true);

  function toggleShown() {
    setCardShown(prevState => !prevState);
  }

  return (
    <>
      <p>hello world!</p>
      <Card value="K" suit="Clubs" isShown={cardShown} toggleFunction={toggleShown}/>
      <Card value="Q" suit="Hearts" isShown={cardShown} toggleFunction={toggleShown}/>
      <Table />
    </>
  )
}

export default App
