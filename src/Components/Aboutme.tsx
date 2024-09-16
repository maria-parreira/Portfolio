import React from 'react';
import myImage from '../assets/profile-image.jpg'; // Substitua pelo caminho da sua imagem

const About: React.FC = () => {
    return (
        <section id="Aboutme" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Imagem */}
                <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <img
                        src={myImage}
                        alt="Maria Parreira"
                        className="rounded-full w-40 h-40 object-cover border-4 border-blue-500 shadow-lg"
                    />
                </div>
                {/* Texto sobre mim */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Who am I?</h2>
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
