"use client";

import { useRef, useState } from "react";
import TypingInput from "./TypingInput";
import commonEnglishWords from "./CommonEnglishWords";
import RandomSentenceDisplay from "./RandomSentenceDisplay";
import Cursor from "./Cursor";
export default function TypingArea() {
  const typingInputRef = useRef<HTMLInputElement>(null);
  const [letterRef, setLetterRef] = useState<null[][] | HTMLDivElement[][]>([
    [null],
  ]);
  const [nextPositionForCursor, setNextPositionForCursor] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const onLetterType = (letter: string) => {
    setNextPositionForCursor({ top: 100, left: 100 });
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
      <Cursor positionLeft={nextPositionForCursor.left} positoinTop={nextPositionForCursor.top} />
      <div
        onClick={onTypingAreaClick}
        className="text-[--text-primary] leading-loose text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar flex flex-wrap"
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
