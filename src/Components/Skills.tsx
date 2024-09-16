import React from 'react';
import '../styles/Skills.css';


const skills: string[] = ['Java','JavaScript', 'React', 'TypeScript', 'CSS'];

const Skills: React.FC = () => {
    return (
        <section id="Skills">
            <h2>Here are some of my skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
