import React from 'react';
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
    { name: 'Tailwind css', icon: tw },
    { name: 'Kubernetes', icon: kn },
    { name: 'Jenkins', icon: jk },
    { name: 'Docker', icon: docker },
    { name: 'Spring boot', icon: sboot },
];

const Skills: React.FC = () => {
    return (
        <section id="Skills" className="py-10 ">
            <h2 className="text-3xl font-bold text-center mb-6">Here are some of my skills</h2>
            <ul className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex items-center bg-blue-200 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
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
