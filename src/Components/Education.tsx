import React from 'react';
import postgraduateIcon from '../assets/it.jpg'; // Imagem para a pós-graduação
import veterinaryIcon from '../assets/vet.jpg';    // Imagem para o mestrado

const Education: React.FC = () => {
    const educationList = [
        {
            degree: 'Postgraduate Program in Software Development',
            institution: 'Switch-ISEP',
            duration: '2023-2024',
            description: 'Learned Java, DDD, onion architecture, SOLID principles, databases, software testing, and DevOps.',
            icon: postgraduateIcon // Ícone específico para esta formação
        },
        {
            degree: 'Master of Science in Veterinary Medicine',
            institution: 'University of Évora',
            duration: '2015 - 2022',
            description: 'Specialized in veterinary diagnostics, animal care, and clinical procedures.',
            icon: veterinaryIcon // Ícone específico para esta formação
        }
    ];

    return (
        <section id="Education" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Journey</h2>
                <div className="relative">
                    {educationList.map((edu, index) => (
                        <div key={index} className="mb-8 flex items-start">
                            {/* Ícone de linha do tempo específico para cada formação */}
                            <div className="flex flex-col items-center mr-8">
                                <img
                                    src={edu.icon}
                                    alt={`${edu.degree} Icon`}
                                    className="w-8 h-8" // Tamanho do ícone
                                />
                                {index !== educationList.length - 1 && (
                                    <div className="w-1 bg-blue-600 h-full"></div>
                                )}
                            </div>
                            {/* Conteúdo da educação */}
                            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full">
                                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                                <h4 className="text-lg font-medium text-gray-600 mb-2">{edu.institution}</h4>
                                <p className="text-gray-500 mb-4">{edu.duration}</p>
                                <p className="text-gray-700">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
