import React from 'react';

const Experience: React.FC = () => {

    const experiences = [
        {
            title: '',
            company: '',
            duration:'' ,
            description:'',
        }
    ];

    return (
        <section id="Experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
