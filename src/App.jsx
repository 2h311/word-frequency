import React, { useState } from "react";
import {
  getSampleWordsFromHipsum,
  getWordsByFrequency,
} from "./helpers/helperfunctions";
import { loadingMessage, emptyMessage } from "./helpers/helpermessages";

const App = () => {
  const [wordInTextarea, setWordInTextarea] = useState("");

  const countWords = () => {
    if (!wordInTextarea) {
      setWordInTextarea(emptyMessage);
    } else {
      console.log("counting all the word you have in|", wordInTextarea);
    }
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
    </div>
  );
};

export default App;
