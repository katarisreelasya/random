//importing hook modules
import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {//creating functional component named as App
  const [quotes, setQuotes] = useState("");//here useState is a hook and quotes is a state variable

  const getQuote =() => {//getQuote helps to fetch random quotes
    fetch("https://type.fit/api/quotes")//fetches the data from api in json format
    .then((res) => res.json())
    .then((data) => {
      let randomNum= Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(() => {//useEffect to run the getQuote
    getQuote();
  },[])//[] it is dependency array, it ensures getquote is only called once when the component is mounted
  return (
    <div className="App">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        <div className="btnCOntainer">
          <button className="btn" onClick={getQuote}>Get Quotes</button>
          <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
           target="_blank"
            rel="noopener"
             className="btn">Tweet</a>
        </div>
      </div>
    </div>
  );
}
export default App;