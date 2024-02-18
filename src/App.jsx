import React, { useState } from "react";

import WordFrequencyTable from "./components/WordFrequencyTable";
import {
  getSampleWordsFromHipsum,
  getWordsByFrequency,
} from "./helpers/helperfunctions";
import { loadingMessage, emptyMessage } from "./helpers/helpermessages";

import { KeyboardSVG } from "./components/Icons";

const App = () => {
  const [wordInTextarea, setWordInTextarea] = useState("");
  const [frequencyData, setFrequencyData] = useState([]);

  const countWords = () => {
    if (!wordInTextarea) {
      setWordInTextarea(emptyMessage);
      return;
    }
    // console.log("counting all the word you have in|", wordInTextarea);
    const wordsAndFrequency = getWordsByFrequency(wordInTextarea);
    setFrequencyData(wordsAndFrequency);
    console.log(wordsAndFrequency);
  };

  const loadSample = () => {
    setWordInTextarea(loadingMessage);
    getSampleWordsFromHipsum().then(setWordInTextarea).catch(console.error);
  };

  return (
    <div className="container">
      <div className="container__upper-region">
        <span className="container__keyboard">
          <KeyboardSVG className="container__svg" />
        </span>
        <textarea
          className="container__textarea"
          name="word"
          value={wordInTextarea}
          onChange={(event) => setWordInTextarea(event.target.value)}
        ></textarea>
        <div className="container__buttons">
          <input
            className="container__button container__button--count-words"
            type="button"
            value="count words"
            onClick={() => countWords()}
          />
          <input
            className="container__button container__button--load-sample"
            type="button"
            value="load sample"
            onClick={() => loadSample()}
          />
        </div>
      </div>

      <>
        <WordFrequencyTable frequencyData={frequencyData} />
      </>
    </div>
  );
};

export default App;
