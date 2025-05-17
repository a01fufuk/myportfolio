// src/components/About.jsx
import { FaServer, FaTools, FaCode } from "react-icons/fa";

export default function About() {
  const skillSections = [
    {
      title: "Backend",
      icon: <FaServer className="text-green-400 w-4 h-4" />,
      skills: [
        "Go",
        "Echo",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "GCP",
        "JWT",
        "gRPC",
        "Microservices",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-yellow-400 w-4 h-4" />,
      skills: ["Git", "VS Code", "Postman", "Docker", "JMeter"],
    },
    {
      title: "Other Skills",
      icon: <FaCode className="text-blue-400 w-4 h-4" />,
      skills: [
        "RESTful APIs",
        "Linux System Administration",
        "Load Testing",
        "Query Optimization",
        "NGINX",
        "Agile Development",
      ],
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 space-y-10">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-green-300">
          About Me
        </h2>
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
          Hello! I'm Alexander Jason Lauwren, a backend engineer who focuses on
          building clean and reliable systems that solve real problems. I’ve
          worked on platforms serving millions of users. From public transport
          tools to e-ticketing systems. Focusing on performance, scalability,
          and simplicity.
        </p>
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
          I'm passionate in developing, collaborating with others, and making
          products that actually help people. Whether leading projects or
          supporting a team, I try to bring clarity, curiosity, and a
          product-first mindset to everything I do.
        </p>
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
          Outside of coding, I enjoy photography, video editing, and
          contributing to alumni events.
        </p>
      </div>

      {/* Skill Sections */}
      <p className="text-base font-medium text-green-300">My Skills :</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillSections.map((section) => (
          <div
            key={section.title}
            className="bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow-inner space-y-4 transition-all duration-200 hover:shadow-md hover:border-green-500"
          >
            <div className="flex items-center space-x-2">
              {section.icon}
              <h3 className="text-lg font-semibold text-zinc-100">
                {section.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium border border-zinc-600 transition-all duration-200 hover:bg-zinc-700 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
