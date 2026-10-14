"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";

type TypewriterProps = {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

/** Types each word, pauses, deletes it, then moves to the next. */
export function Typewriter({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1600,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reduce) return;
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {reduce ? words[0] : text}
        <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-current" />
      </span>
    </span>
  );
}
