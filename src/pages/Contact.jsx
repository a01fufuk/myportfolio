import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-8 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-green-300">
        Contact
      </h2>

      <p className="text-zinc-400 max-w-lg">
        Feel free to reach out — whether you have a question, want to
        collaborate, or just say hi!
      </p>

      <div className="space-y-4 text-zinc-300">
        <p className="flex items-center space-x-3">
          <FaEnvelope className="text-zinc-400 w-5 h-5 hover:text-green-400 transition-colors duration-200" />
          <a
            href="mailto:a01fufuk@gmail.com"
            className="text-zinc-400 hover:text-green-400 hover:underline"
          >
            a01fufuk@gmail.com
          </a>
        </p>

        <p className="flex items-center space-x-3">
          <FaLinkedin className="text-zinc-400 w-5 h-5 hover:text-green-400 transition-colors duration-200" />
          <a
            href="https://linkedin.com/in/alexanderfufuk1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-green-400 hover:underline"
          >
            linkedin.com/in/alexanderfufuk1
          </a>
        </p>

        <p className="flex items-center space-x-3">
          <FaWhatsapp className="text-zinc-400 w-5 h-5 hover:text-green-400 transition-colors duration-200" />
          <a
            href="https://wa.me/6282135993069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-green-400 hover:underline"
          >
            +62 821-3599-3069
          </a>
        </p>
      </div>
    </div>
  );
}
