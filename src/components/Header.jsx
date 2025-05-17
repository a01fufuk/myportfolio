export default function Header({ title = "~" }) {
  return (
    <div className="w-full px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
      {/* Left: Traffic light buttons */}
      <div className="flex space-x-2 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Center: Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center truncate max-w-[70%] sm:max-w-none">
        alexander@portfolio: {title}
      </div>

      {/* Right: Spacer */}
      <div className="w-14 shrink-0" />
    </div>
  );
}
