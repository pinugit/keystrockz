export default function RandomWordArray(
  randomArrayLength: number,
  wordList: string[]
) {
  const randomWordArray = [];

  for (let i = 0; i < randomArrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    randomWordArray.push(wordList[randomIndex]);
  }

  return randomWordArray;
}
