import React, { useState } from "react";
import {
  getSampleWordsFromHipsum,
  getWordsByFrequency,
} from "./helpers/helperfunctions";

const loadingMessage = "Loading sample text ... Please wait for it 😊",
  emptyMessage =
    "Empty textarea\nIf you press the count button, you should see the absolute frequency of these words in a table and pie chart. If you press the load button instead, you should see the first paragraph from an episode of the freeCodeCamp podcast. Or this message. Consider it a default. This message.";

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
