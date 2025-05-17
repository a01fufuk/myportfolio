// src/components/Landing.jsx
import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Landing() {
  const [showIntro, setShowIntro] = useState(false);

  const [text] = useTypewriter({
    words: ["alex@portfolio:~$ whoami"],
    typeSpeed: 40,
    deleteSpeed: 0,
    delaySpeed: 700,
    loop: 1,
    onLoopDone: () => setShowIntro(true),
    onType: (charIndex) => {
      if (charIndex === 23) setShowIntro(true); // Trigger just after typing
    },
  });

  return (
    <div className="flex flex-col justify-center items-start h-full px-6 md:px-12 lg:px-24 font-mono text-green-300">
      {/* Terminal prompt */}
      <div className="text-xl md:text-2xl mb-4">
        <span>{text}</span>
        <Cursor cursorColor="#22c55e" />
      </div>

      {/* Animated content */}
      {showIntro && (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-300">
            Alexander Jason Lauwren
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400">
            [Backend Engineer]
          </h2>
          <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
            I build scalable backend services that drive real-world impact —
            combining technical depth with a clean code mindset.
          </p>
        </motion.div>
      )}
    </div>
  );
}
