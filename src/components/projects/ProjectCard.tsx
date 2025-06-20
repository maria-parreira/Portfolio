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
      className={`relative group bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-700 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ width: "250px", height: "250px" }}
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
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
          <span className="text-lg font-semibold">{project.title}</span>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
