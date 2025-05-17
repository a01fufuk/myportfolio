// src/components/About.jsx
import React from "react";
import { Server, Wrench, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 pb-36  space-y-12 text-zinc-400 text-base md:text-lg leading-relaxed font-mono">
      {/* Intro */}
      <section className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-300">
          Alexander Jason Lawren
        </h2>
        <h3 className="text-xl text-zinc-500">Backend Engineer</h3>
        <p>
          Hi there! I'm a backend engineer from Indonesia with a strong passion
          for building scalable systems that deliver real-world impact. I
          specialize in Go (Golang), and I've worked extensively with frameworks
          like Echo and libraries like Prisma to deliver reliable and performant
          APIs.
        </p>
        <p>
          I enjoy solving complex problems with clean, maintainable code and a
          product-oriented mindset.
        </p>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-amber-300">Experience</h3>
        <p>
          Previously, I served as the product lead for a ticketing company,
          where I wore multiple hats — from backend development to cross-team
          coordination. I designed and maintained robust APIs that handled
          real-time data, collaborated with cross-functional teams, and improved
          service efficiency.
        </p>
        <p>
          Currently, I'm working on various freelance and side projects,
          building taylor-made solutions to meet the unique needs of clients.
        </p>
      </section>

      {/* Beyond Code */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-amber-300">Beyond Code</h3>
        <p>
          Outside of coding, I enjoy exploring new technologies and learning
          about the latest trends in the technologies world
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-amber-300">Skills</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Backend */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-2 transition-all duration-200 hover:border-amber-400 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center space-x-2 text-green-400 font-semibold text-base">
              <Server className="w-4 h-4" />
              <span>Backend</span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Go, Echo, Express.js, TypeScript, PostgreSQL, MySQL, MongoDB,
              Redis, GCP, JWT, gRPC, Microservices
            </p>
          </div>

          {/* Tools */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-2 transition-all duration-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center space-x-2 text-blue-400 font-semibold text-base">
              <Wrench className="w-4 h-4" />
              <span>Tools</span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Git, VS Code, Postman, Docker, JMeter
            </p>
          </div>

          {/* Other Skills */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 space-y-2 transition-all duration-200 hover:border-purple-400 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center space-x-2 text-purple-400 font-semibold text-base">
              <Lightbulb className="w-4 h-4" />
              <span>Other Skills</span>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              RESTful APIs, Linux System Administration, Load Testing, Query
              Optimization, NGINX, Agile Development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
