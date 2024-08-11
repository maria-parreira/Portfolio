import React from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    // Add more projects here
];

const Projects: React.FC = () => {
    return (
        <section id="projects">
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
