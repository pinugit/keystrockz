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
  const [typedIndex, setTypedIndex] = useState<number>(1);

  const onTypingAreaClick = () => {
    if (typingInputRef.current) {
      typingInputRef.current.focus();
    }
  };

  const handleCorrectTyping = (key: string) => {
    const currentWordIndex = referenceIndexObject[typedIndex][0];

    const currentLetterIndex = referenceIndexObject[typedIndex][1];

    const currentLetterRefrence = document.getElementsByClassName(
      `letter-${currentWordIndex}-${currentLetterIndex}`
    );

    console.log(currentLetterRefrence);
    setTypedIndex((prev) => prev + 1);
    console.log(typedIndex);
  };

  useEffect(() => {
    const newLetterObject = RandomLetterObject(50, commonEnglishWords);
    setLetterObject(newLetterObject);

    const newReferenceIndexObject = () => {
      newLetterObject.map((word, wordIndex) => {
        word.map((_, letterIndex) => {
          setReferenceIndexObject((prev) => {
            return [...prev, [wordIndex, letterIndex]];
          });
        });
      });
    };

    newReferenceIndexObject();
  }, []);

  useEffect(() => {
    if (typingInputRef.current) {
      const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        handleCorrectTyping(key);
      };

      typingInputRef.current.addEventListener("keydown", handleKeyPress);

      return () => {
        typingInputRef.current?.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [referenceIndexObject]);

  return (
    <>
      <TypingInput typingInputRef={typingInputRef} />
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
