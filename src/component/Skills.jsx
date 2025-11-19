import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const skillList = [
    { name: "Java", icon: <FaJava size={25} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={25} /> },
    { name: "MySQL", icon: <FaDatabase size={25} /> },
    { name: "React.js", icon: <FaReact size={25} /> },
    { name: "JavaScript", icon: <SiJavascript size={25} /> },
    { name: "HTML5", icon: <SiHtml5 size={25} /> },
    { name: "CSS3", icon: <SiCss3 size={25} /> },
    { name: "Postman", icon: <SiPostman size={25} /> },

  ];

  return (
    <section
      id="skills"
      className="w-full py-24 bg-[#07111c] px-6 md:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My{" "}
          <span className="text-[#21f0ff] ">
            Skills
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-[#0C1B2B] border border-[#21f0ff]/20 rounded-2xl p-6 flex flex-col items-center justify-center
                         shadow-[0_0_20px_#21f0ff20] hover:shadow-[0_0_35px_#21f0ff50]
                         transition-all duration-300 hover:border-[#21f0ff] cursor-pointer"
            >
              <div className="text-[#21f0ff] mb-3 group-hover:drop-shadow-[0_0_10px_#21f0ff] transition">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">{skill.name}</h3>

              {/* Neon Glow on Hover */}
              <div className="absolute inset-0 bg-[#21f0ff]/10 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
