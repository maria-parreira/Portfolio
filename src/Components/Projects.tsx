import React from 'react';
import '../styles/Projects.css';
import '../styles/SectionAdjustment.css';

interface Project {
    title: string;
    link: string;
    image: string;  // Adicionando um campo para a imagem
}

const projects: Project[] = [
    {
        title: 'Smart Home',
        link: 'https://github.com/maria-parreira/smarthome-switch-dev',
        image: 'src/assets/shome.png'
    },
    {
        title: 'TCP vs UPD',
        link: 'https://github.com/maria-parreira/scomred-switch-dev',
        image: 'src/assets/tcpudp.png'
    },
    {
        title: 'DevOps',
        link: 'https://github.com/maria-parreira/devops-switch-dev',
        image: 'src/assets/devops.jpg'
    },
    {
        title: 'Lost and Found',
        link: 'https://github.com/maria-parreira/lost-and-found',
        image: 'src/assets/lf.png'
    },

];

const Projects: React.FC = () => {
    return (
        <section id="Projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
