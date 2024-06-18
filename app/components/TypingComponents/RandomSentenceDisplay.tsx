"use client";
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import RandomLetterObject from "./RandomStringGenerator";

interface props {
  randomWordList: string[];
  lengthOfSentence: number;
  onLetterRefChange: (letterRef: HTMLDivElement[][] | null[][]) => void;
}
export default function RandomSentenceDisplay({
  randomWordList,
  lengthOfSentence,
  onLetterRefChange,
}: props) {
  const [letterObject, setLetterObject] = useState<string[][]>([[]]);
  const letterRef = useRef<HTMLDivElement[][] | null[][]>([[null]]);

  useEffect(() => {
    const newLetterObject = RandomLetterObject(
      lengthOfSentence,
      randomWordList
    );
    setLetterObject(newLetterObject);
    letterRef.current = newLetterObject.map((word) => word.map(() => null));
  }, []);

  useEffect(() => {
    onLetterRefChange(letterRef.current);
  }, [letterRef]);

  return (
    <>
      {letterObject.map((word, index) => (
        <div key={index} className="mb-8 mr-4 flex ">
          {word.map((letter, indexLetter) => (
            <div
              ref={(ref) => (letterRef.current[index][indexLetter] = ref)}
              key={indexLetter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
