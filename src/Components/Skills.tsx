import React from 'react';

const skills: string[] = ['JavaScript', 'React', 'TypeScript', 'CSS'];

const Skills: React.FC = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
