export default function Projects() {
    return (
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12 space-y-8">
      <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
      <ul className="space-y-6">
          <li className="bg-zinc-800/80 rounded-lg p-4 flex flex-col md:flex-row gap-4">
            <img
              src="/images/fleet.png"
              alt="Fleet Monitoring"
              className="w-full md:w-1/3 rounded"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Fleet Monitoring System</h3>
              <p className="text-zinc-300 mt-2 leading-relaxed">
                A real-time vehicle tracking platform handling 1000+ updates/sec
                built with Go, Kafka, Redis, and gRPC.
              </p>
            </div>
          </li>
          {/* Add more projects similarly */}
        </ul>
      </div>
    );
  }
  