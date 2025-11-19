import resume from  "../resume/resume.pdf"
import { Menu, X, Github, Linkedin } from "lucide-react";
import hero from "../assets/hero.png"

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#07111c] flex justify-between flex-col-reverse md:flex-row items-center  px-6 md:px-20 py-10 md:py-0 gap-10 md:gap-40"
    >
      <div className="max-w-2xl text-white text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-white">Smit Kumar</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-[#21f0ff] mt-2">
          Full Stack / Java Developer
        </h2>

        <p className="text-gray-300 mt-5 leading-relaxed max-w-lg mx-auto md:mx-0">
          I build clean, scalable, and modern applications using Java, Spring
          Boot, MySQL, React.js, and JavaScript. Passionate about backend
          engineering and clean UI design.
        </p>

        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#21f0ff] hover:bg-[#79f1fa] text-black font-semibold rounded-lg transition"
          >
            Hire Me
          </a>

          <a
            href={resume}
            target="_blank"
            className="px-6 py-3 border border-[#21f0ff] text-[#21f0ff] hover:bg-[#2ea8ff]/10 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* IMAGE CENTER FIX */}
      <div className="flex justify-center w-full md:w-auto">
        <img
          src={hero}
          className="h-[300px] md:h-[480px] w-auto object-contain"
        />
      </div>
    </section>
  );
}
