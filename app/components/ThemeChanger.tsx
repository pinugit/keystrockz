"use client";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("CurrentTheme", currentTheme);
  }, [currentTheme]);

  return (
    <div>
      <button
        onClick={() =>
          setCurrentTheme(currentTheme === "light" ? "dark" : "light")
        }
      >
        ThemeChanger
      </button>
    </div>
  );
}
