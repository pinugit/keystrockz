"use client";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const letterRef = useRef([[null]]);

  useEffect(() => {
    const newLetterObject = RandomLetterObject(
      lengthOfSentence,
      randomWordList
    );
    setLetterObject(newLetterObject);
    letterRef.current = newLetterObject.map((word) => word.map(() => null));
  }, []);

  return (
    <>
      {letterObject.map((word, index) => (
        <div key={index} className="mr-4 flex ">
          {word.map((letter, indexLetter) => (
            <div ref={letterRef.current[index][indexLetter]} key={indexLetter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
