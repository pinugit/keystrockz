import { Suspense } from "react";
import TypingArea from "./components/TypingComponents/TypingArea";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Suspense fallback={<Loading />}>
        <TypingArea />
      </Suspense>
    </div>
  );
}
