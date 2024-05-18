"use client";

// This component is a button that represents a navigation bar button.
// It takes two props: buttonText and pageLink.
// buttonText is the text that will be displayed in the button.
// pageLink is the url that the button will navigate to when clicked.

import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NevBarButtonProps {
  buttonText: string;
  pageLink: string;
}

// This is a local font that will be used in the button.
// It is a custom font that will give the button a unique look.
const dirtyline = localFont({
  src: "../fonts/dirtyline.woff2",
  display: "swap",
});

export default function NevBarButton({
  buttonText,
  pageLink,
}: NevBarButtonProps) {
  const pathname = usePathname();

  // This is the main button styling.
  // It sets the background color, text color, font size, border and hover effects.
  // The button text color and background color are changed when the button is active.
  return (
    <button
      className={`${dirtyline.className}
        bg-[--background-primary] text-[--text-primary] text-titleLarge btn-border px-4 pt-1 hover:bg-[--text-primary] hover:text-[--background-primary] duration-[400ms] ease-in-out ${
          pathname === pageLink
            ? "bg-[--text-primary] text-[--background-primary]"
            : ""
        }`}
    >
      {/* This is the link that the button will navigate to when clicked. */}
      <Link href={pageLink}>{buttonText}</Link>
    </button>
  );
}
