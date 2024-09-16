import React from 'react';
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
        <section id="Projects" className="py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 p-4 text-center">{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-48 object-cover"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
