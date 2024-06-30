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

  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [letterObject, setLetterObject] = useState<string[][]>([[]]);
  const [referenceIndexObject, setReferenceIndexObject] = useState<number[][]>([
    [],
  ]);
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const typingInputRef = useRef<HTMLInputElement>(null);
  const typedIndex = useRef(1);

  const onTypingAreaClick = () => {
    if (typingInputRef.current) {
      typingInputRef.current.focus();
    }
  };

  const handleCorrectTyping = (key: string) => {
    const currentWordIndex = referenceIndexObject[typedIndex.current][0];
    const currentLetterIndex = referenceIndexObject[typedIndex.current][1];

    const currentLetterRefrence = document.getElementById(
      `letter-${currentWordIndex}-${currentLetterIndex}`
    );

    if (currentLetterRefrence?.innerText === key) {
      currentLetterRefrence.classList.add("text-[--text-primary]");
    }
    if (
      referenceIndexObject[typedIndex.current + 1][0] >
      referenceIndexObject[typedIndex.current][0]
    ) {
      setCursorPosition({
        top: currentLetterRefrence?.offsetTop ?? 0,
        left:
          (currentLetterRefrence?.offsetLeft ?? 0) +
          (currentLetterRefrence?.offsetWidth ?? 0),
      });
    } else {
      setCursorPosition({
        top: currentLetterRefrence?.offsetTop ?? 0,
        left: currentLetterRefrence?.offsetLeft ?? 0,
      });
    }

    typedIndex.current = typedIndex.current + 1;
  };

  useEffect(() => {
    const newLetterObject = RandomLetterObject(50, commonEnglishWords);
    setLetterObject(newLetterObject);
  }, []);

  useEffect(() => {
    const newReferenceIndexObject = () => {
      letterObject.map((word, wordIndex) => {
        word.map((_, letterIndex) => {
          setReferenceIndexObject((prev) => {
            return [...prev, [wordIndex, letterIndex]];
          });
        });
      });
    };

    newReferenceIndexObject();
    const firstElement = document.getElementById(`letter-0-0`);
    const firstELementTop = firstElement?.offsetTop ?? 0;
    const firstElementLeft = firstElement?.offsetLeft ?? 0;
    setCursorPosition({ top: firstELementTop, left: firstElementLeft });
    setTimeout(() => {
      setIsCursorVisible(true);
    }, 400);
  }, [letterObject]);

  useEffect(() => {
    if (typingInputRef.current) {
      const handleKeyPress = (event: KeyboardEvent) => {
        console.log(typedIndex.current);
        const key = event.key;
        handleCorrectTyping(key);
      };

      typingInputRef.current.addEventListener("keydown", handleKeyPress);

      return () => {
        typingInputRef.current?.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [referenceIndexObject]);

  console.log(referenceIndexObject);

  return (
    <>
      <TypingInput typingInputRef={typingInputRef} />
      {isCursorVisible && (
        <Cursor
          positionLeft={cursorPosition?.left}
          positoinTop={cursorPosition?.top}
        />
      )}
      <div
        onClick={onTypingAreaClick}
        className="text-[--text-secondary]  text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar flex flex-wrap"
      >
        {letterObject.map((word, wordIndex) => (
          <div key={wordIndex} className="mb-8 mr-4 flex ">
            {word.map((letter, letterIndex) => (
              <motion.div
                id={`letter-${wordIndex}-${letterIndex}`}
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
