"use client";

import { useState, useEffect } from "react";
import { ACCENT } from "@/lib/data";

const WORDS = ["Impact.", "Precision.", "Power.", "Excellence."];

export default function HeroTitle() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < word.length) {
      timer = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx + 1));
        setCharIdx((n) => n + 1);
      }, 85);
    } else if (!deleting && charIdx === word.length) {
      timer = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx - 1));
        setCharIdx((n) => n - 1);
      }, 42);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % WORDS.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  return (
    <h1
      className="h1-big"
      style={{
        fontSize: 86,
        lineHeight: 0.92,
        letterSpacing: "-0.045em",
        fontWeight: 600,
        margin: "0 0 24px",
        color: "oklch(95% 0.005 80)",
      }}
    >
      Engineered
      <br />
      for{" "}
      <span style={{ color: ACCENT, display: "inline-flex", alignItems: "baseline" }}>
        <span>{displayed}</span>
        <span
          style={{
            display: "inline-block",
            width: 3,
            height: "0.82em",
            background: ACCENT,
            marginLeft: 4,
            verticalAlign: "text-top",
            borderRadius: 2,
            animation: "blink 1.1s step-end infinite",
          }}
        />
      </span>
    </h1>
  );
}
