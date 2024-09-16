import React from 'react';
import '../styles/Education.css';


const Education: React.FC = () => {
    const educationList = [
        {
            degree: 'Postgraduate Program in Software Development',
            institution: 'Switch-ISEP',
            duration: '2023-2024',
            description: 'Learned Java, DDD, onion architecture, SOLID principles, databases, software testing, and DevOps.'
        },
        {
            degree: 'Master of Science in Veterinary Medicine',
            institution: 'University of Évora',
            duration: '2015 - 2022',
            description: 'Specialized in veterinary diagnostics, animal care, and clinical procedures.'
        }
    ];

    return (
        <section id="Education">
            <h2>My journey</h2>
            <div className="timeline">
                {educationList.map((edu, index) => (
                    <div key={index} className="timeline-item">
                        <div className="card">
                            <h3>{edu.degree}</h3>
                            <h4>{edu.institution}</h4>
                            <p>{edu.duration}</p>
                            <p>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
