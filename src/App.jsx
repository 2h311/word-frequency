import React, { useEffect, useState } from "react";
import { getSampleWords, getWordsByFrequency } from "./helpers/helperfunctions";

const App = () => {
  const [wordsToCount, setWordsToCount] = useState("");
  const [showLoadingText] = useState(
    "Loading sample text ... Please wait for it 😊"
  );

  const countWords = () => {
    if (wordsToCount) {
      const wordMap = getWordsByFrequency(wordsToCount);
      console.log(wordMap);
    }
  };

  const loadSampleWords = async () => {
    setWordsToCount(showLoadingText); // use this to show some loading text
    const sampleWord = await getSampleWords();
    setWordsToCount(sampleWord);
  };

  const getWordsFromTextField = (text) => {
    setWordsToCount(text);
  };

  return (
    <div>
      <textarea
        name="textarea"
        cols="100"
        rows="10"
        value={wordsToCount}
        onChange={(event) => getWordsFromTextField(event.target.value)}
      ></textarea>
      <input type="button" value="Count words" onClick={countWords} />
      <input type="button" value="Load sample" onClick={loadSampleWords} />
    </div>
  );
};

export default App;
