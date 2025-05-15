// src/components/Landing.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const nameText = "Alexander Jason Lauwren";
  const pitchText =
    "I build scalable backend services that drive real-world impact — combining technical depth with a clean code mindset.";

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-6 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-4xl md:text-5xl font-medium text-green-300">
            Hi, I’m
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-amber-300">
            {nameText}
          </h1>
        </motion.div>

        {/* Role */}
        <motion.h2
          className="text-xl md:text-2xl text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          [Backend Engineer]
        </motion.h2>

        {/* Elevator Pitch */}
        <motion.p
          className="mx-auto text-base md:text-lg text-zinc-300 leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {pitchText}
        </motion.p>

        {/* CTA Hint */}
        <motion.p
          className="text-sm md:text-base text-zinc-500 mt-6 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
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
        </motion.p>
      </div>
    </div>
  );
}
