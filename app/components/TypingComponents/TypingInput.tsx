"use client";

interface props {
  typingInputRef: React.RefObject<HTMLInputElement>;
}
export default function TypingInput({ typingInputRef }: props) {
  return (
    <input
      type="text"
      autoFocus
      ref={typingInputRef}
      className="fixed top-[-100px] left-[-100px] p-2 border border-black rounded"
    />
  );
}
