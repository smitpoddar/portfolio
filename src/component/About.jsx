export default function About() {
  return (
    <section
      id="about"
      className="w-full py-24 bg-[#07111c] px-6 md:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{" "}
            <span className="text-[#21f0ff] ">
              Me
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full Stack / Java Developer who loves building
            clean, scalable, and efficient applications. My core strength lies
            in backend engineering with Java & Spring Boot, combined with
            front-end skills in React.js and modern UI design.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I enjoy solving real-world problems, writing elegant code, and
            always learning new technologies. My goal is to create digital
            experiences that are both functional and visually appealing.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#21f0ff]/10 border border-[#21f0ff]/40 rounded-lg text-[#21f0ff]">
              Java
            </span>
            <span className="px-4 py-2 bg-[#21f0ff]/10 border border-[#21f0ff]/40 rounded-lg text-[#21f0ff]">
              Spring Boot
            </span>
            <span className="px-4 py-2 bg-[#21f0ff]/10 border border-[#21f0ff]/40 rounded-lg text-[#21f0ff]">
              MySQL
            </span>
            <span className="px-4 py-2 bg-[#21f0ff]/10 border border-[#21f0ff]/40 rounded-lg text-[#21f0ff]">
              React.js
            </span>
          </div>
        </div>

        <div className="relative flex justify-center">

          <div
            className="relative bg-[#0e1c2a] border border-[#21f0ff]/30 rounded-3xl p-8
                          shadow-[0_0_25px_#21f0ff40] backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-2 text-[#21f0ff]">
              Who Am I?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A developer who loves clean code, problem-solving, and designing
              beautiful user experiences with a modern touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
