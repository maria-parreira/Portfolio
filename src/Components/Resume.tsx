import React from 'react';
import resume from '../assets/CV.pdf';
import downloadIcon from '../assets/cvicon.jpg'; // Importe a imagem
import '../styles/Resume.css';


const Resume: React.FC = () => {
    return (
        <section id="Resume">
            <h2>Resume</h2>
            <p>
                For a detailed overview of my professional background, skills, and experiences, click below:
            </p>
            <a href={resume} download="Maria_Parreira_CV.pdf" className="resume-link">
                <img src={downloadIcon} alt="Download CV" className="download-image" />
            </a>
        </section>
    );
};

export default Resume;
