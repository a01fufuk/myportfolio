// src/components/Landing.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as FramerMotion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Landing() {
  const [showIntro, setShowIntro] = useState(false);
  const [loopCnt, setLoopCnt] = useState(0);

  const whoAmI = "whoami";

  useEffect(() => {
    setLoopCnt(1);
  }, []);

  const [text] = useTypewriter({
    words: [whoAmI],
    typeSpeed: 100,
    deleteSpeed: 0,
    delaySpeed: 700,
    loop: loopCnt,
    onLoopDone: () => setTimeout(() => setShowIntro(true), 500),
    // onType: (charIndex) => {
    //   if (charIndex === whoAmI.length - 1) setShowIntro(true); // Trigger just after typing
    // },
  });

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-6">
        {/* Terminal prompt flair */}
        <div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-zinc-500 font-mono"
        >
          alex@portfolio:~$
          <span className="text-green-400">
            <span>{text}</span>
            <Cursor cursorColor="#22c55e" />
          </span>
        </div>

        {/* <div className="text-sm text-zinc-500 font-mono">
          
        </div> */}

        {showIntro && (
          <AnimatePresence>
            <HeroText />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

const HeroText = () => {
  const pitchText =
    "I build scalable backend services that drive real-world impact — combining technical depth with a clean code mindset.";
  const nameText = "Alexander Jason Lauwren";

  return (
    <>
      {/* Greeting */}
      <FramerMotion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <FramerMotion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.7, delay: 0 }}
          className="space-y-2"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-green-300">
            Hi, I’m
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-amber-300">
            {nameText}
          </h1>
        </FramerMotion.div>
      </FramerMotion.div>

      {/* Role */}
      <FramerMotion.h2
        className="text-xl md:text-2xl text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        [Backend Engineer] — Clean code, real systems, lasting impact
      </FramerMotion.h2>

      {/* Elevator Pitch */}
      <FramerMotion.p
        className="text-base md:text-lg text-zinc-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {pitchText}
      </FramerMotion.p>

      {/* CTA Hint */}
      <FramerMotion.p
        className="text-sm md:text-base text-zinc-500 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        On desktop, press{" "}
        <kbd className="px-1 py-0.5 bg-zinc-800 rounded border border-zinc-700">
          P
        </kbd>{" "}
        for Projects,{" "}
        <kbd className="px-1 py-0.5 bg-zinc-800 rounded border border-zinc-700">
          A
        </kbd>{" "}
        for About,{" "}
        <kbd className="px-1 py-0.5 bg-zinc-800 rounded border border-zinc-700">
          C
        </kbd>{" "}
        for Contact
      </FramerMotion.p>
    </>
  );
};
