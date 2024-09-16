import React from 'react';
import shome from '../assets/shome.jpg';
import tcpudp from '../assets/tcpudp.jpg';
import devops from '../assets/devops.jpg';
import lf from '../assets/lf.jpg';
import { useInView } from 'react-intersection-observer'; // Importando o hook useInView

interface Project {
    title: string;
    link: string;
    image: string;
    customStyles?: React.CSSProperties;
}

const projects: Project[] = [
    {
        title: 'Smart Home',
        link: 'https://github.com/maria-parreira/smarthome-switch-dev',
        image: shome,
    },
    {
        title: 'TCP vs UDP',
        link: 'https://github.com/maria-parreira/scomred-switch-dev',
        image: tcpudp,
        customStyles: { width: '100%', height: '100%', objectFit: 'scale-down' },
    },
    {
        title: 'DevOps',
        link: 'https://github.com/maria-parreira/devops-switch-dev',
        image: devops,
    },
    {
        title: 'Lost and Found',
        link: 'https://github.com/maria-parreira/lost-and-found',
        image: lf,
    },
];

const Projects: React.FC = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section id="Projects" className="py-60">
            <h2
                ref={sectionRef}
                className={`text-3xl font-extrabold text-center mb-10 text-gray-800 transform transition-all duration-700 ${
                    sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                Projects
            </h2>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl">
                    {projects.map((project, index) => {
                        const { ref: projectRef, inView: projectInView } = useInView({
                            triggerOnce: false,
                            threshold: 0.5,
                        });

                        return (
                            <div
                                ref={projectRef}
                                key={index}
                                className={`relative group bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-700 ${
                                    projectInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`}
                                style={{ width: '250px', height: '250px' }}
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
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
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
