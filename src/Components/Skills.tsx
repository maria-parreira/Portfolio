import React from 'react';

const skills: string[] = ['Java', 'JavaScript', 'React', 'TypeScript', 'CSS'];

const Skills: React.FC = () => {
    return (
        <section id="Skills" className="py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6">Here are some of my skills</h2>
            <ul className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
