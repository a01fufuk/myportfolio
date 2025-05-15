export default function Header({ title = "~" }) {
  return (
    <div className="w-full px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
      <div className="flex space-x-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div className="flex-1 text-center -ml-10">
        alexander@portfolio: {title}
      </div>
      <div className="w-14" />
    </div>
  );
}
