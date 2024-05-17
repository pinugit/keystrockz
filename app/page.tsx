import NevBarButton from "./components/NevBarButton";
import ThemeChanger from "./components/ThemeChanger";
import TypingArea from "./components/TypingComponents/TypingArea";

export default function Home() {
  return (
    <>
      <TypingArea />
      <ThemeChanger />
      <NevBarButton buttonText={"Typing"} pageLink={"/typing"} />
    </>
  );
}
