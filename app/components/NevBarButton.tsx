import localFont from "next/font/local";

interface props {
  buttonText: string;
  pageLink: string;
}

const dirtyline = localFont({
  src: "../fonts/dirtyline.woff2",
  display: "swap",
});

export default function NevBarButton({ buttonText, pageLink }: props) {
  return <div className={dirtyline.className}>{buttonText}</div>;
}
