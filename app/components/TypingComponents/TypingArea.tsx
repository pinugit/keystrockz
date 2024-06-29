"use client";

import { useEffect, useRef, useState } from "react";
import TypingInput from "./TypingInput";
import commonEnglishWords from "./CommonEnglishWords";
import RandomLetterObject from "./RandomStringGenerator";
import Cursor from "./Cursor";
import { motion } from "framer-motion";

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

export default function TypingArea() {
  // Reference to the typing input element
  const typingInputRef = useRef<HTMLInputElement>(null);

  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [letterObject, setLetterObject] = useState<string[][]>([[]]);
  const [referenceIndexObject, setReferenceIndexObject] = useState<number[][]>([
    [],
  ]);

  const onTypingAreaClick = () => {
    if (typingInputRef.current) {
      typingInputRef.current.focus();
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const newLetterObject = RandomLetterObject(50, commonEnglishWords);
    setLetterObject(newLetterObject);
  }, []);

  return (
    <>
      <TypingInput
        typingInputRef={typingInputRef}
        onLetterType={(letter) => console.log(letter)}
      />
      {isCursorVisible && <Cursor positionLeft={0} positoinTop={0} />}
      <div
        onClick={onTypingAreaClick}
        className="text-[--text-secondary]  text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar flex flex-wrap"
      >
        {letterObject.map((word, wordIndex) => (
          <div key={wordIndex} className="mb-8 mr-4 flex ">
            {word.map((letter, letterIndex) => (
              <motion.div
                className={`letter-${wordIndex}-${letterIndex}`}
                initial="initial"
                animate="animate"
                variants={wordVarient}
                custom={wordIndex}
                key={letterIndex}
              >
                {letter}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
