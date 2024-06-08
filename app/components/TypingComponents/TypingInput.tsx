"use client";

interface props {
  onLetterType: (letter: string) => void;
  typingInputRef: React.RefObject<HTMLInputElement>;
}
export default function TypingInput({ onLetterType, typingInputRef }: props) {
  return (
    <input
      type="text"
      autoFocus
      ref={typingInputRef}
      className="absolute bottom-0 right-0 p-2 border border-black rounded"
      onChange={(e) => {
        onLetterType(e.target.value);
        e.target.value = "";
      }}
    />
  );
}
