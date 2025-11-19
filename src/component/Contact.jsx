import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-[#07111c] px-6 md:px-20 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Contact{" "}
          <span className="text-[#21f0ff] ">
            Me
          </span>
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Let’s connect! Feel free to reach out anytime.
        </p>

        <div className="space-y-6 max-w-lg mx-auto">
          {/* Mobile Number */}
          <div
            className="flex items-center gap-4 bg-[#0C1B2B] border border-[#21f0ff]/20 
                       rounded-xl p-4 hover:border-[#21f0ff] hover:shadow-[0_0_20px_#21f0ff50] 
                       transition"
          >
            <Phone size={26} className="text-[#21f0ff]" />
            <span className="text-gray-300">+91-6209238834</span>
          </div>

          {/* Email */}
          <a
            href="mailto:smitpoddar834@gmail.com"
            className="flex items-center gap-4 bg-[#0C1B2B] border border-[#21f0ff]/20 
                       rounded-xl p-4 hover:border-[#21f0ff] hover:shadow-[0_0_20px_#21f0ff50] 
                       transition"
          >
            <Mail size={26} className="text-[#21f0ff]" />
            <span className="text-gray-300">smitpoddar834@gmail.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/smitpoddar"
            target="_blank"
            className="flex items-center gap-4 bg-[#0C1B2B] border border-[#21f0ff]/20 
                       rounded-xl p-4 hover:border-[#21f0ff] hover:shadow-[0_0_20px_#21f0ff50] 
                       transition"
          >
            <Github size={26} className="text-[#21f0ff]" />
            <span className="text-gray-300">github.com/smitpoddar</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/smit-dev"
            target="_blank"
            className="flex items-center gap-4 bg-[#0C1B2B] border border-[#21f0ff]/20 
                       rounded-xl p-4 hover:border-[#21f0ff] hover:shadow-[0_0_20px_#21f0ff50] 
                       transition"
          >
            <Linkedin size={26} className="text-[#21f0ff]" />
            <span className="text-gray-300">linkedin.com/in/smit-dev</span>
          </a>
        </div>
      </div>
    </section>
  );
}
