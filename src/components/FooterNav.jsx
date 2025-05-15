// src/components/FooterNav.jsx
export default function FooterNav({ view, setView }) {
  const buttons = [
    { key: "H", label: "Home", view: "landing" },
    { key: "A", label: "About", view: "about" },
    { key: "P", label: "Projects", view: "projects" },
    { key: "C", label: "Contact", view: "contact" },
  ];

  return (
    <>
      {/* Mobile footer: show full text labels */}
      <nav className="fixed bottom-0 left-0 w-full bg-zinc-800/90 backdrop-blur py-2 flex justify-around md:hidden">
        {buttons.map((btn) => (
          <button
            key={btn.view}
            onClick={() => setView(btn.view)}
            className={`flex-1 mx-1 py-2 rounded text-sm ${
              view === btn.view
                ? "bg-green-600"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </nav>

      {/* Desktop footer: show label + shortcut */}
      <nav className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 space-x-4 bg-zinc-800/80 backdrop-blur px-4 py-2 rounded-lg">
        {buttons.map((btn) => (
          <button
            key={btn.view}
            onClick={() => setView(btn.view)}
            className={`px-3 py-1 rounded ${
              view === btn.view
                ? "bg-green-600"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            {btn.label}{" "}
            <span className="text-xs text-zinc-400">({btn.key})</span>
          </button>
        ))}
      </nav>
    </>
  );
}
