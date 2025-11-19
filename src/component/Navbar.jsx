import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#07111c] backdrop-blur-xl ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="cursor-pointer text-2xl font-bold tracking-wide text-white">
          SMIT<span className="text-indigo-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a
            href="#home"
            className="hover:text-[#21f0ff] transition font-medium"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-[#21f0ff] transition font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#21f0ff] transition font-medium"
          >
            Projects
          </a>

          <a
            href="https://github.com/smitpoddar"
            target="_blank"
            className="hover:text-[#21f0ff] transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/smit-dev"
            target="_blank"
            className="hover:text-[#21f0ff] transition"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 text-white px-6 py-6 flex flex-col gap-6">
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#skills" className="hover:text-indigo-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition">
            Projects
          </a>

          <div className="flex gap-6">
            <a
              href="https://github.com/smitpoddar"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/smit-dev"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
