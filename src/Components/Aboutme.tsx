import React from 'react';
import myImage1 from '../assets/profile-image.jpg';
import myImage2 from '../assets/me-2.jpg';
import myImage3 from '../assets/me-3.jpg';

const About: React.FC = () => {
    return (
        <section id="Aboutme" className="py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Galeria de Imagens */}
                <div className="md:w-1/3 flex flex-col md:flex-row md:space-x-4 mb-8 md:mb-0">
                    <img
                        src={myImage1}
                        alt="Maria Parreira"
                        className="rounded-lg w-full md:w-1/3 h-auto object-cover border-4 border-teal-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                    <img
                        src={myImage2}
                        alt="Maria Parreira"
                        className="rounded-lg w-full md:w-1/3 h-auto object-cover border-4 border-teal-500 shadow-lg transform transition-transform duration-500 hover:scale-105 mt-4 md:mt-0"
                    />
                    <img
                        src={myImage3}
                        alt="Maria Parreira"
                        className="rounded-lg w-full md:w-1/3 h-auto object-cover border-4 border-teal-500 shadow-lg transform transition-transform duration-500 hover:scale-105 mt-4 md:mt-0"
                    />
                </div>
                {/* Texto sobre mim */}
                <div className="md:w-2/3 text-center md:text-left md:ml-14">
                    <h2 className="md:w-2/3 text-left md:ml-14 text-4xl font-extrabold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-teal-500">
                        Who am I?
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        👋😄 Hi, I’m Maria Parreira, a Software Developer based in Porto with roots in Évora, Portugal. I’m
                        currently seeking new and exciting opportunities in the tech world.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        I recently completed the SWITCH postgraduation program at ISEP, where I honed my skills in front-end
                        development using JavaScript, HTML, CSS, and React to create dynamic and engaging web interfaces. On
                        the back-end, I have a solid foundation in Java, Spring Boot, and JPA, and I’m proficient in
                        managing databases with MySQL. Additionally, I have experience with Docker, Jenkins, and Git, which
                        enables me to work efficiently in modern DevOps environments.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        My background in veterinary medicine provided me with strong problem-solving skills, attention to
                        detail, and the ability to collaborate effectively within a team.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Beyond coding and work, I’m passionate about traveling, exploring new cultures, trying different
                        cuisines, spending time at the beach, hiking in the great outdoors, and camping.
                    </p>
                    <p className="text-lg text-gray-700 font-semibold">
                        If you’re looking for a dedicated and versatile developer who thrives in team environments, I’d love
                        to connect!😻
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
