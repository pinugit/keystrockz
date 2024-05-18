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
  src: "../../fonts/dirtyline.woff2",
  display: "swap",
});

export default function NevBarButton({
  /**
   * Renders a button that acts as a navigation bar button.
   *
   * @param {string} buttonText - The text to be displayed in the button.
   * @param {string} pageLink - The URL to navigate to when the button is clicked.
   * @returns {JSX.Element} - The button component.
   */
  buttonText,
  pageLink,
}: NevBarButtonProps) {
  // Get the current pathname
  const pathname = usePathname();

  // Define the CSS classes for the button
  const buttonClasses = `
    ${dirtyline.className}
    bg-[--background-primary]
    text-[--text-primary]
    text-titleLarge
    btn-border
    px-4
    pt-1
    hover:bg-[--text-primary]
    hover:text-[--background-primary]
    duration-[400ms]
    ease-in-out
  `;

  // Define the CSS classes for the button when it is active
  const activeButtonClasses = `
    text-[--background-primary]
    bg-[--text-primary]
  `;

  // Render the button component
  return (
    <button
      className={`${buttonClasses} ${
        pathname === pageLink ? activeButtonClasses : ""
      }`}
    >
      {/* This is the link that the button will navigate to when clicked. */}
      <Link
        className={`${pathname === pageLink ? activeButtonClasses : ""}`}
        href={pageLink}
      >
        {buttonText}
      </Link>
    </button>
  );
}
