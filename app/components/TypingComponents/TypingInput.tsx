"use client";

interface props {
  onLetterType: (letter: string) => void;
}
export default function TypingInput({ onLetterType }: props) {
  return (
    <input
      autoFocus
      type="text"
      className="absolute bottom-0 right-0 p-2 border border-black rounded"
      onChange={(e) => {
        onLetterType(e.target.value);
        e.target.value = "";
      }}
    />
  );
}
