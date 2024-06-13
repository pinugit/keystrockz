function RandomWordArray(randomArrayLength: number, wordList: string[]) {
  const randomWordArray = [];

  for (let i = 0; i < randomArrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    randomWordArray.push(wordList[randomIndex]);
  }

  return randomWordArray;
}

export default function RandomLetterObject(
  randomArrayLength: number,
  wordList: string[]
) {
  const wordArray = RandomWordArray(randomArrayLength, wordList);
  let LetterObject = [];

  for (const word of wordArray) {
    let indivudialLetters = [];
    for (let letter of word) {
      indivudialLetters.push(letter);
    }
    LetterObject.push(indivudialLetters);
  }
  return LetterObject;
}
