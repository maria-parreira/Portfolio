import React from 'react';
import { useInView } from 'react-intersection-observer';
import postgraduateIcon from '../assets/it.jpg'; // Imagem para a pós-graduação
import veterinaryIcon from '../assets/vet.jpg';    // Imagem para o mestrado

const Education: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,  // O componente só vai aparecer uma vez
        threshold: 0.1     // Define a visibilidade mínima para acionar o efeito
    });

    const educationList = [
        {
            degree: 'Postgraduate Program in Software Development',
            institution: 'Switch-ISEP',
            duration: '2023-2024',
            description: 'Learned Java, DDD, onion architecture, SOLID principles, databases, software testing, and DevOps.',
            icon: postgraduateIcon
        },
        {
            degree: 'Master of Science in Veterinary Medicine',
            institution: 'University of Évora',
            duration: '2015 - 2022',
            description: 'Specialized in veterinary diagnostics, animal care, and clinical procedures.',
            icon: veterinaryIcon
        }
    ];

    return (
        <section id="Education" className={`py-40 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 transition-transform transform hover:scale-105 hover:text-pink-400">My Journey</h2>
                <div ref={ref} className="flex flex-col items-center">
                    {educationList.map((edu, index) => (
                        <div key={index} className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                            {/* Ícone */}
                            <div className={`flex-shrink-0 ${index % 2 === 0 ? 'mr-6' : 'ml-6'} mb-4`}>
                                <div className={`w-16 h-16 bg-blue-500 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110`}>
                                    <img
                                        src={edu.icon}
                                        alt={`${edu.degree} Icon`}
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                            </div>
                            {/* Conteúdo da educação */}
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow max-w-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                <h3 className="text-lg font-semibold mb-2 text-teal-700 transition-colors duration-300 hover:text-teal-500">{edu.degree}</h3>
                                <h4 className="text-base font-medium text-gray-600 mb-1">{edu.institution}</h4>
                                <p className="text-gray-500 mb-1 text-sm">{edu.duration}</p>
                                <p className="text-gray-700 text-sm">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
