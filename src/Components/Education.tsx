import React from 'react';
import { useInView } from 'react-intersection-observer';
import postgraduateIcon from '../assets/it.jpg';
import veterinaryIcon from '../assets/vet.jpg';

const Education: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const educationList = [
        {
            degree: 'Postgraduation in Software Development (SWITCH Dev)',
            institution: 'Instituto Superior de Engenharia do Porto',
            duration: '2023-2024',
            description: 'A Journey Through Tech Wonderland - Embarking on this academic adventure, I delved into the magic of algorithms and data structures, unraveling the secrets of efficient problem-solving. My quest led me to build a web application—a Smart Home system—where I dabbled in backend development with Java. I navigated the architectural realms, and crafted seamless user experiences with ReactJS. Each step in this journey not only honed my technical skills but also deepened my passion for crafting innovative solutions.',
            icon: postgraduateIcon
        },
        {
            degree: 'Master of Science in Veterinary Medicine',
            institution: 'Universidade de Évora',
            duration: '2015 - 2022',
            description: '',
            icon: veterinaryIcon
        }
    ];

    return (
        <section id="Education" className={`py-40 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 transition-transform transform hover:scale-105 hover:text-pink-400">
                    My Journey
                </h2>
                <div ref={ref} className="flex flex-col items-center space-y-8">
                    {educationList.map((edu, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-start md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Ícone */}
                            <div className={`flex-shrink-0 ${index % 2 === 0 ? 'mr-6' : 'ml-6'} mb-4`}>
                                <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110">
                                    <img
                                        src={edu.icon}
                                        alt={`${edu.degree} Icon`}
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                            </div>
                            {/* Conteúdo da educação */}
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <h3 className="text-lg font-semibold mb-2 text-teal-700 transition-colors duration-300 hover:text-teal-500">{edu.degree}</h3>
                                <h4 className="text-base font-medium text-gray-600 mb-1">{edu.institution}</h4>
                                <p className="text-gray-500 mb-1 text-sm">{edu.duration}</p>
                                <p className="text-gray-700 text-sm leading-relaxed text-justify">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
