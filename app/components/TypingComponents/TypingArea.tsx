"use client";

import { useEffect, useRef } from "react";
import TypingInput from "./TypingInput";
import RandomWordArray from "./RandomStringGenerator";
import commonEnglishWords from "./CommonEnglishWords";
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

  const randomArray = RandomWordArray(20, commonEnglishWords);

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
        {randomArray.map((singleWord) => (
          <p className="ml-3">{singleWord}</p>
        ))}
      </div>
    </>
  );
}
