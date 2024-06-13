import { useEffect, useState } from "react";
import RandomLetterObject from "./RandomStringGenerator";

interface props {
  randomWordList: string[];
  lengthOfSentence: number;
}
export default function RandomSentenceDisplay({
  randomWordList,
  lengthOfSentence,
}: props) {
  const [letterObject, setLetterObject] = useState<string[][]>([[]]);

  useEffect(() => {
    setLetterObject(RandomLetterObject(lengthOfSentence, randomWordList));
  },[]);

  return (
    <>
      {letterObject.map((word, index) => (
        <div key={index} className="mr-4 flex ">
          {word.map((letter, indexLetter) => (
            <div key={indexLetter}>{letter}</div>
          ))}
        </div>
      ))}
    </>
  );
}
