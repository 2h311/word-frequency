const getRandomNumber = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};

const getSampleWordsFromHipsum = async (
  randomNumber = getRandomNumber(1, 10)
) => {
  const hipsumEndpoint = `http://hipsum.co/api/?type=hipster-centric&sentences=${randomNumber}`;
  const response = await fetch(hipsumEndpoint);
  let sampleWordFromHipsum;
  if (response.ok === true && response.status === 200) {
    sampleWordFromHipsum = await response.json();
    sampleWordFromHipsum = sampleWordFromHipsum[0];
  } else {
    sampleWordFromHipsum =
      "If you press the count button, you should see the absolute frequency of these words in a table and pie chart. If you press the load sample button instead, you should see the some lorem ipsum paragraphs. You consider it a default message.";
  }
  return sampleWordFromHipsum;
};

const regexWord = /\w+/g;
const getWordsByFrequency = (text) => {
  return (
    text
      // array of words
      .match(regexWord)
      // array of _lowercase_ words
      .map((word) => word.toLowerCase())
      // array describing for each word 1 objects with the word's own value and its frequency
      .reduce((acc, curr) => {
        const index = acc.findIndex(({ word }) => word === curr);
        if (index === -1) {
          return [
            ...acc,
            {
              word: curr,
              frequency: 1,
            },
          ];
        }
        acc[index].frequency += 1;
        return acc;
      }, [])
      // sorted in descending order
      .sort((a, b) => b.frequency - a.frequency)
  );
};
export { getSampleWordsFromHipsum, getWordsByFrequency };
