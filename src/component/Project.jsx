import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      title: "StreamHub",
      description:
        "A Netflix-style streaming UI built using React.js with responsive design and dynamic components.",
      tech: ["React.js", "JavaScript", "CSS"],
      github: "https://github.com/smitpoddar/StreamHub-app",
      demo: "https://netflix-clone-jade-six-71.vercel.app/",
    },
    {
      title: "Todo App",
      description:
        "A full-stack todo application built with Spring Boot backend and JSP frontend supporting CRUD operations.",
      tech: ["Spring Boot", "Java", "JSP"],
      github: "https://github.com/smitpoddar/todo-app", 
      demo: "",
    },
    {
      title: "News App",
      description:
        "A modern news application built using React.js that fetches live news using public APIs.",
      tech: ["React", "API", "CSS"],
      github: "https://github.com/smitpoddar/news-app", 
      demo: "",
    },
    {
      title: "Weather App",
      description:
        "A simple and clean weather application built using HTML, CSS and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/smitpoddar/weather-app", 
      demo: "https://smitpoddar.github.io/weather-app/",
    },
  ];
;

  return (
    <section
      id="projects"
      className="w-full py-24 bg-[#07111c] px-6 md:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My{" "}
          <span className="text-[#21f0ff] ">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="relative group bg-[#0C1B2B] border border-[#21f0ff]/20 rounded-2xl p-6
                         shadow-[0_0_20px_#21f0ff20] hover:shadow-[0_0_35px_#21f0ff50]
                         transition-all duration-300 hover:border-[#21f0ff]"
            >
              <h3 className="text-xl font-bold mb-3 text-[#21f0ff]">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#21f0ff]/10 border border-[#21f0ff]/40 text-[#21f0ff] rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-[#21f0ff] hover:text-white transition"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-[#21f0ff] hover:text-white transition"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
