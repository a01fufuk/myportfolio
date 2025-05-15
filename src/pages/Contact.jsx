export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold">Contact</h2>
      <p className="flex items-center space-x-2 text-zinc-300">
        <span>✉️</span>
        <span>you@example.com</span>
      </p>
      <p className="flex items-center space-x-2 text-zinc-300">
        <span>🔗</span>
        <a
          href="https://github.com/yourusername"
          className="text-cyan-400 hover:underline"
        >
          github.com/yourusername
        </a>
      </p>
    </div>
  );
}
