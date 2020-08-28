import React from "react";
import Form from "./components/Form";
import { fetchQuotes } from "./api/quotesDatabase";
import List from "./components/List";

function App() {
  const [quotes, setQuotes] = React.useState([]);

  async function handleClick() {
    const allQuotes = await fetchQuotes();
    setQuotes(allQuotes);
  }

  return (
    <div>
      <Form />
      <section>
        <button onClick={() => handleClick()}>Get Quote</button>
        <List quotes={quotes}></List>
      </section>
    </div>
  );
}

export default App;
