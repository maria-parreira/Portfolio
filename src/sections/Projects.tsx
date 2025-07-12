import React from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projectList";
import ProjectCard from "../components/projects/ProjectCard";

const Projects: React.FC = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="Projects" className="py-20 font-serif">
      <h2
        ref={sectionRef}
        className={`text-3xl font-bold mb-4 text-center text-gray-800 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        My Projects
      </h2>
      {/* Linha separadora */}
      <div className="w-25 h-0.5 bg-stone-200 mx-auto mb-12 rounded-full" />

      {/* GitHub Link */}
      <div className="text-center mb-5">
        <a
          href="https://github.com/maria-parreira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-500 underline hover:text-rose-700 transition"
        >
          See more on my GitHub →
        </a>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
