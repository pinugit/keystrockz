"use client";

import { useRef } from "react";
import TypingInput from "./TypingInput";
import commonEnglishWords from "./CommonEnglishWords";
import RandomSentenceDisplay from "./RandomSentenceDisplay";
export default function TypingArea() {
  const typingInputRef = useRef<HTMLInputElement>(null);
  const onLetterType = (letter: string) => {
    console.log(letter);
  };

  const onTypingAreaClick = () => {
    if (typingInputRef.current) {
      typingInputRef.current.focus();
    }
  };

  return (
    <>
      <TypingInput
        typingInputRef={typingInputRef}
        onLetterType={onLetterType}
      />
      <div
        onClick={onTypingAreaClick}
        className="text-[--text-primary] leading-loose text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar flex flex-wrap"
      >
        <RandomSentenceDisplay
          randomWordList={commonEnglishWords}
          lengthOfSentence={20}
        />
      </div>
    </>
  );
}
