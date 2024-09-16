import React from 'react';

const Experience: React.FC = () => {

    const experiences = [
        {
            title: '',
            company: '',
            duration: '',
            description: '',
        },
        {
            title: '',
            company: '',
            duration: '',
            description: '',
        }
    ];

    return (
        <section id="Experience" className="py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="mb-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                        <h4 className="text-md text-gray-600">{exp.company}</h4>
                        <p className="text-sm text-gray-500">{exp.duration}</p>
                        <p className="mt-4 text-gray-700">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
