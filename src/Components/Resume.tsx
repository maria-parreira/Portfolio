import React from 'react';
import resume from '../assets/CV.pdf';
import '../styles/Resume.css';

const Resume: React.FC = () => {
    return (
        <section id="Resume">
            <h2>Resume</h2>
            <p>
                For a detailed overview of my professional background, skills, and experiences, please download my resume using the link below:
            </p>
            <a href={resume} download="Maria_Parreira_Resume.pdf" className="resume-link">
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
