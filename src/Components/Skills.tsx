import React from 'react';
import { useInView } from 'react-intersection-observer';
import javaIcon from '../assets/javaIcon.png';
import javascriptIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import tw from '../assets/tw.png';
import jk from '../assets/jk.png';
import kn from '../assets/kn.png';
import sboot from '../assets/sboot.png';
import docker from '../assets/docker.png';

const skills = [
    { name: 'Java', icon: javaIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Tailwind CSS', icon: tw },
    { name: 'Kubernetes', icon: kn },
    { name: 'Jenkins', icon: jk },
    { name: 'Docker', icon: docker },
    { name: 'Spring Boot', icon: sboot },
];

const Skills: React.FC = () => {

    const { ref: skillsRef, inView: skillsInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section id="Skills" className="py-60">
            <h2 className="text-3xl font-bold mb-20 text-center text-gray-800 transition-transform transform hover:scale-105 hover:text-pink-400">Here are some of my skills</h2>
            <ul
                ref={skillsRef}  // Conectando o ref à lista de skills
                className={`flex flex-wrap justify-center gap-6 transform transition-opacity duration-1000 ease-out ${skillsInView ? 'opacity-100' : 'opacity-0'}`} // Animação de opacidade
            >
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className={`flex items-center bg-blue-200 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 ${skillsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} // Animação de aparição
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <img
                            src={skill.icon}
                            alt={`${skill.name} Icon`}
                            className="w-8 h-8 mr-2"
                        />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
