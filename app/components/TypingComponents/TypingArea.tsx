"use client";

import { useEffect, useRef, useState } from "react";
import TypingInput from "./TypingInput";
import commonEnglishWords from "./CommonEnglishWords";
import RandomSentenceDisplay from "./RandomSentenceDisplay";
import Cursor from "./Cursor";
import next from "next";

export default function TypingArea() {
  // Reference to the typing input element
  const typingInputRef = useRef<HTMLInputElement>(null);
  // State to store the letter ref, which is an array of arrays of HTMLDivElement
  const [letterRef, setLetterRef] = useState<null[][] | HTMLDivElement[][]>([
    [],
  ]);

  // State to store the simple letter ref, which is an array of HTMLDivElement
  const [simpleLetterRef, setSimpleLetterRef] = useState<HTMLDivElement[]>([]);
  // State to store the next position for the cursor
  const [nextPositionForCursor, setNextPositionForCursor] = useState<{
    left: number;
    top: number;
  }>({
    left: simpleLetterRef[0]?.offsetLeft,
    top: simpleLetterRef[0]?.offsetTop,
  });
  // State to store the current word letter index
  // const [currentWordLetterIndex, setCurrentWordLetterIndex] = useState({
  //   wordIndex: 0,
  //   letterIndex: 0,
  // });
  const [typedIndex, setTypedIndex] = useState(0);

  // Callback function when a letter is typed
  const onLetterType = (typedLetter: string) => {
    console.log(typedLetter);
    const currentLetter = simpleLetterRef[typedIndex].innerText;
    const nextLetter = simpleLetterRef[typedIndex + 1].innerText;

    if (typedLetter === currentLetter) {
      simpleLetterRef[typedIndex].classList.add("text-[--text-primary]");
      if (nextLetter === " ") {
        setNextPositionForCursor({
          left:
            simpleLetterRef[typedIndex]?.offsetLeft +
            simpleLetterRef[typedIndex]?.offsetWidth,
          top: simpleLetterRef[typedIndex]?.offsetTop,
        });
        setTypedIndex(typedIndex + 1);
        return;
      }

      setNextPositionForCursor({
        left: simpleLetterRef[typedIndex + 1]?.offsetLeft,
        top: simpleLetterRef[typedIndex + 1]?.offsetTop,
      });
      setTypedIndex(typedIndex + 1);
    }
  };

  // Callback function when the typing area is clicked
  const onTypingAreaClick = () => {
    if (typingInputRef.current) {
      typingInputRef.current.focus();
    }
  };

  // Function to create a dummy div element
  const createDummyDivElement = () => {
    const dummyDiv = document.createElement("div");
    dummyDiv.textContent = " "; // Set the text content to space
    return dummyDiv;
  };

  // Function to convert the letter ref to simple letter ref
  const letterRefToSimpleLetterRef = () => {
    let newLetterRef: HTMLDivElement[] = [];
    letterRef.map((word) => {
      word.map((letter) => {
        if (letter) {
          newLetterRef.push(letter);
        }
      });
      newLetterRef.push(createDummyDivElement());
    });
    console.log(newLetterRef);
    setSimpleLetterRef(newLetterRef);
    setNextPositionForCursor({
      left: newLetterRef[0].offsetLeft,
      top: newLetterRef[0].offsetTop,
    });
  };

  // Effect hook to call letterRefToSimpleLetterRef when letterRef changes
  useEffect(() => {
    letterRefToSimpleLetterRef();
  }, [letterRef]);

  return (
    <>
      <TypingInput
        typingInputRef={typingInputRef}
        onLetterType={onLetterType}
      />
      <Cursor
        positionLeft={nextPositionForCursor.left}
        positoinTop={nextPositionForCursor.top}
      />
      <div
        onClick={onTypingAreaClick}
        className="text-[--text-secondary]  text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar flex flex-wrap "
      >
        <RandomSentenceDisplay
          randomWordList={commonEnglishWords}
          lengthOfSentence={20}
          onLetterRefChange={(newLetterRef) => setLetterRef(newLetterRef)}
        />
      </div>
    </>
  );
}
