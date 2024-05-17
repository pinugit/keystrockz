"use client";

import TypingInput from "./TypingInput";

export default function TypingArea() {
  const onLetterType = (letter: string) => {
    console.log(letter);
  };
  return (
    <div>
      <TypingInput onLetterType={onLetterType} />
    </div>
  );
}
