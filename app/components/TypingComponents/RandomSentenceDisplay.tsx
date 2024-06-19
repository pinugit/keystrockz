"use client";
import {
  LegacyRef,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import RandomLetterObject from "./RandomStringGenerator";
import { delay, motion } from "framer-motion";

interface props {
  randomWordList: string[];
  lengthOfSentence: number;
  onLetterRefChange: (letterRef: HTMLDivElement[][] | null[][]) => void;
}

const wordVarient = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.03 * index },
  }),
};

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
            <motion.div
              initial="initial"
              animate="animate"
              variants={wordVarient}
              custom={index}
              ref={(ref) => {
                if (ref) {
                  letterRef.current[index][indexLetter] = ref;
                }
              }}
              key={indexLetter}
            >
              {letter}
            </motion.div>
          ))}
        </div>
      ))}
    </>
  );
}
