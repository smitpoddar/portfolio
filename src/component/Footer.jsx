import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#07111c] text-gray-300 py-10 px-6 md:px-20 border-t border-[#21f0ff]/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* LEFT - LOGO */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            SMIT
            <span className="text-[#21f0ff] drop-shadow-[0_0_8px_#21f0ff]">
              .
            </span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Full Stack / Java Developer
          </p>
        </div>

        {/* MIDDLE - LINKS */}
        <div className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-[#21f0ff] transition">
            Home
          </a>
          <a href="#skills" className="hover:text-[#21f0ff] transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#21f0ff] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#21f0ff] transition">
            Contact
          </a>
        </div>

        {/* RIGHT - SOCIAL ICONS */}
        <div className="flex gap-6">
          <a
            href="https://github.com/smitpoddar"
            target="_blank"
            className="text-gray-300 hover:text-[#21f0ff] transition drop-shadow-none hover:drop-shadow-[0_0_10px_#21f0ff]"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/smit-dev"
            target="_blank"
            className="text-gray-300 hover:text-[#21f0ff] transition drop-shadow-none hover:drop-shadow-[0_0_10px_#21f0ff]"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Smit Kumar. All rights reserved.
      </div>
    </footer>
  );
}
