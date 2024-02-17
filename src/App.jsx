import React, { useState } from "react";

import {
  getSampleWordsFromHipsum,
  getWordsByFrequency,
} from "./helpers/helperfunctions";
import { loadingMessage, emptyMessage } from "./helpers/helpermessages";

import WordFrequencyTable from "./components/WordFrequencyTable";

const App = () => {
  const [wordInTextarea, setWordInTextarea] = useState("");
  const [frequencyData, setFrequencyData] = useState([]);

  const countWords = () => {
    if (!wordInTextarea) {
      setWordInTextarea(emptyMessage);
      return;
    }
    console.log("counting all the word you have in|", wordInTextarea);
    const wordsAndFrequency = getWordsByFrequency(wordInTextarea);
    setFrequencyData(wordsAndFrequency);
  };

  const loadSample = () => {
    setWordInTextarea(loadingMessage);
    getSampleWordsFromHipsum().then(setWordInTextarea).catch(console.error);
  };

  return (
    <div>
      <textarea
        name="word"
        value={wordInTextarea}
        cols="120"
        rows="10"
        onChange={(event) => setWordInTextarea(event.target.value)}
      ></textarea>
      <input type="button" value="count words" onClick={() => countWords()} />
      <input type="button" value="load sample" onClick={() => loadSample()} />
      <WordFrequencyTable frequencyData={frequencyData} />
    </div>
  );
};

export default App;
