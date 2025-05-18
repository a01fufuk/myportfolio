import { useState } from "react";

const projectData = [
  {
    title: "Boarding Management System (BMS)",
    role: "Product Lead & Backend Engineer",
    description:
      "Led backend development for PT.MKP's BMS suite. Delivered three apps: Dashboard Ferry (product setting), Ticket Validator (port-side scan), and Schedule Monitor (admin tool for ferry schedules).",
    tech: ["Golang", "PostgreSQL", "REST", "WebSockets"],
    image: "images/bms.png",
  },
  {
    title: 'Ferry Agent POS ("Loket Agen")',
    role: "Product Lead & Backend Engineer",
    description:
      "Initiated the development of a digital Point-of-Sale system for ferry agents, digitalizing the ferry ticketing process. Integrated external stackholder's APIs that led to PT. MKP's Public Transport product line.",
    tech: ["Golang", "PostgreSQL", "MongoDB", "React", "Electron"],
    image: "images/loket.png",
  },
  {
    title: "TiketKapal.com",
    role: "Product Lead & Backend Engineer",
    description:
      "Spearheaded development of a ferry booking platform for the public, with native and web support via React and Flutter. Supported ferry agents in reaching broader audiences online.",
    tech: ["Golang", "PostgreSQL", "MongoDB", "React", "Flutter"],
    image: "images/tiketkapal.jpeg",
  },
  {
    title: "Lifestyle TiketKapal.com",
    role: "Product Lead & Backend Engineer",
    description:
      "Transformed tiketkapal.com into a lifestyle-ready platform compatible with webview embedding in Livin Sukha. Added distribution channels to expand user reach and boost agent visibility.",
    tech: ["Golang", "PostgreSQL", "MongoDB", "React", "Rest API"],
    image: "images/batamlstyle.jpeg",
  },
  {
    title: "PELNI & Major Bank Integrations",
    role: "Backend Engineer",
    description:
      "Implemented backend integrations between MKP ticketing and national ferry operator PELNI, supporting payments from BCA, Livin, and BRI.",
    tech: ["Golang", "PostgreSQL", "Bank APIs"],
    image: "images/pelni.jpeg",
  },
  {
    title: "BCA Lifestyle Integration",
    role: "Backend Engineer",
    description:
      "Contributed to the backend engine enabling tourism ticketing services through BCA Lifestyle's digital ecosystem.",
    tech: ["Golang", "PostgreSQL", "REST"],
    image: "images/bca.jpeg",
  },
  {
    title: "Unified Dashboard",
    role: "Backend Engineer",
    description:
      "Developed backend pipelines to sync ticketing transaction data across business units for a company-wide unified dashboard using gRPC.",
    tech: ["Golang", "PostgreSQL", "gRPC"],
    image: "images/udbm.png",
  },
  {
    title: "Dharmaindah Lifestyle",
    role: "Product Lead & Mentor",
    description:
      "Mentored a junior backend developer while overseeing architecture and delivery. Focused on guidance and quality control alongside communication with Dharmaindah's team.",
    tech: ["Golang", "PostgreSQL"],
    image: "images/dharmaindah.jpeg",
  },
];

function ProjectCard({ proj, onImageClick }) {
  return (
    <li className="bg-zinc-800/80 rounded-xl p-5 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col md:flex-row md:items-center gap-4">
      <div className="w-full md:w-1/2">
        <img
          src={proj.image}
          alt={proj.title}
          onClick={() => onImageClick(proj.image)}
          className="w-full h-auto max-h-64 rounded-xl object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-amber-300">{proj.title}</h3>
        <p className="text-sm text-zinc-400 italic mb-1">{proj.role}</p>
        <p className="text-zinc-300 leading-relaxed mb-2">{proj.description}</p>
        <div className="flex flex-wrap gap-2">
          {proj.tech.map((t, i) => (
            <span
              key={i}
              className="bg-zinc-700 text-sm px-2 py-1 rounded text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Enlarged"
        className="max-w-4xl max-h-[90vh] rounded-lg shadow-xl"
      />
    </div>
  );
}

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 space-y-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-green-300">
        Projects
      </h2>
      <ul className="grid gap-8 md:grid-cols-2">
        {projectData.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} onImageClick={setActiveImage} />
        ))}
      </ul>

      <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}
