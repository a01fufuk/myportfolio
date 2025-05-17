// src/App.jsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion as FramerMotion } from "framer-motion";

// import Landing from "./components/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FooterNav from "./components/FooterNav";
import Header from "./components/Header";
// import LandingV2 from "./components/LandingV2";
import LandingV2Rev1 from "./components/LandingV2Rev1";
// import LandingV3 from "./components/LandingV3";

const landingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 }, // just fade out
};

const defaultVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 }, // fade out
};

const transition = { duration: 0.4, ease: "easeInOut" };

function App() {
  const [view, setView] = useState("landing");

  useEffect(() => {
    const keyMap = { h: "landing", p: "projects", a: "about", c: "contact" };
    const handler = (e) => {
      if (e.target.tagName === "INPUT") return;
      const v = keyMap[e.key.toLowerCase()];
      if (v) setView(v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header title={view} />
      {/* ALWAYS top-aligned with padding */}
      <div className="flex-grow overflow-y-auto pt-12 px-4 md:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <FramerMotion.div
            key={view}
            variants={view === "landing" ? landingVariants : defaultVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="w-full h-full"
          >
            {view === "landing" && <LandingV2Rev1 />}
            {view === "projects" && <Projects />}
            {view === "about" && <About />}
            {view === "contact" && <Contact />}
          </FramerMotion.div>
        </AnimatePresence>
      </div>

      <FooterNav view={view} setView={setView} />
    </div>
  );
}

export default App;
