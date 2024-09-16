import React from 'react';
import resume from '../assets/CV.pdf';
import downloadIcon from '../assets/cvicon.jpg';

const Resume: React.FC = () => {
    return (
        <section id="Resume" className="py-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6">Resume</h2>
            <p className="text-center text-lg text-gray-700 mb-6">
                For a detailed overview of my professional background, skills, and experiences, click below:
            </p>
            <div className="flex justify-center">
                <a
                    href={resume}
                    download="Maria_Parreira_CV.pdf"
                    className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    <img
                        src={downloadIcon}
                        alt="Download CV"
                        className="w-8 h-8"
                    />
                    <span>Download</span>
                </a>
            </div>
        </section>
    );
};

export default Resume;
