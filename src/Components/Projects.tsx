import React from 'react';
import '../styles/Projects.css';
import '../styles/SectionAdjustment.css'

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    { title: '', description: '', link: '' },
    // Add more projects here
];

const Projects: React.FC = () => {
    return (
        <section id="Projects">
            <h2>Projects</h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
