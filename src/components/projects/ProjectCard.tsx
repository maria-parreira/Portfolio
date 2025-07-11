import React from "react";
import { useInView } from "react-intersection-observer";
import { Project } from "../../data/projectList";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`relative group bg-white/70 shadow-sm border border-gray-200 rounded-md overflow-hidden transform transition-transform duration-700 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ width: "180px", height: "180px" }} // tamanho reduzido
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover"
          style={project.customStyles}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white px-2 text-sm">
          <span className="text-xs font-medium text-center leading-tight">
            {project.title}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
