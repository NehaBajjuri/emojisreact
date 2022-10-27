import React, { useState } from "react";
import "./styles.css";
export let emojiD = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦁": "Lion",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐎": "Horse",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🐂": "Ox",
  "🐄": "Cow",
  "🐖": "Pig",
  "🐐": "Goat",
  "🐪": "Camel"
};

var emojisWeKnow = Object.keys(emojiD);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiD[userInput];

    // console.log(meaning);
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiD[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning} </h2>
      <h3>Emojis we know..</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
