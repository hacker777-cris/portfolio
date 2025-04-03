import { Code2 } from "lucide-react";

import heroImage from "../assets/me_ gibhli.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-between py-20"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500 text-purple-400">
            <Code2 size={16} className="mr-2" />
            <span>Full Stack Developer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Chrispus Gikonyo
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Passionate full-stack developer specializing in Django, React, and
            TypeScript. Building scalable applications with a focus on security
            and performance.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-square rounded-full overflow-hidden relative z-10">
            <img
              src={heroImage}
              alt="Chrispus Gikonyo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

