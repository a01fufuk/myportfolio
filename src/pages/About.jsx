export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
      <p className="text-zinc-400 leading-relaxed">
        I’m a backend engineer specializing in Go, MongoDB, PostgreSQL, and
        distributed systems. I love designing performant, maintainable services
        that scale.
      </p>
      <p className="text-zinc-400 leading-relaxed">
        Outside work I enjoy writing technical blogs, contributing to open
        source, and playing chess.
      </p>
    </div>
  );
}
