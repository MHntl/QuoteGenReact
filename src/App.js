import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [author, setAuthor] = useState();
  const [quotes, setQuotes] = useState("");
  //---
  async function getQuotes() {
    let gottenQuotes = await fetch("https://type.fit/api/quotes");
    let editedData = await gottenQuotes.json();
    console.log(editedData);
    let randomNumber = Math.floor(Math.random() * editedData.length);
    //--
    setQuotes(editedData[randomNumber]);
    setAuthor(editedData[randomNumber].author.replace(", type.fit", ""));
  }
  //---
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h2>Quote of Day</h2>
        <h4>{quotes.text}</h4>
        <p>-{author}</p>
        <button onClick={getQuotes}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
