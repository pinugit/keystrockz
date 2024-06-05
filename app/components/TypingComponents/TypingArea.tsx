"use client";

import TypingInput from "./TypingInput";
export default function TypingArea() {
  const onLetterType = (letter: string) => {
    console.log(letter);
  };
  return (
    <>
      <TypingInput onLetterType={onLetterType} />
      <div className="text-[--text-primary] leading-loose text-3xl px-20 h-[24%] overflow-scroll z-50 hideScrollbar ">
        {" "}
        Gravida dictum fusce ut placerat. Id neque aliquam vestibulum morbi
        blandit. Enim eu turpis egestas pretium. Pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Luctus accumsan tortor posuere ac ut.
        Arcu dictum varius duis at consectetur lorem donec massa sapien. Sit
        amet consectetur adipiscing elit duis. Mus mauris vitae ultricies leo
        integer. Ac ut consequat semper viverra nam libero justo laoreet. Quis
        imperdiet massa tincidunt nunc. Vestibulum lorem sed risus ultricies
        tristique nulla aliquet enim. Sed faucibus turpis in eu mi bibendum.
        Rhoncus urna neque viverra justo nec ultrices.{" "}
      </div>
    </>
  );
}
