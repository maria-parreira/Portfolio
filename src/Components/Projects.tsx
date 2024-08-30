import React from 'react';
import '../styles/Projects.css';
import '../styles/SectionAdjustment.css';
import shome from '../assets/shome.jpg';
import tcpudp from '../assets/tcpudp.jpg';
import devops from '../assets/devops.jpg';
import lf from '../assets/lf.jpg';


interface Project {}

const projects: Project[] = [
    {
        title: 'Smart Home',
        link: 'https://github.com/maria-parreira/smarthome-switch-dev',
        image: shome
    },
    {
        title: 'TCP vs UPD',
        link: 'https://github.com/maria-parreira/scomred-switch-dev',
        image: tcpudp
    },
    {
        title: 'DevOps',
        link: 'https://github.com/maria-parreira/devops-switch-dev',
        image: devops
    },
    {
        title: 'Lost and Found',
        link: 'https://github.com/maria-parreira/lost-and-found',
        image: lf
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
