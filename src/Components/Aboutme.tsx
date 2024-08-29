import React from 'react';
import '../styles/Aboutme.css'

const About: React.FC = () => {
    return (
        <section id="Aboutme">
                <h2>How am I ?</h2>
            <div className="about">
                <p>
                    👋😄 Hi, I’m Maria Parreira, a Software Developer based in Porto with roots in Évora, Portugal. I’m
                    currently seeking new and exciting opportunities in the tech world.
                    <p></p>
                    I recently completed the SWITCH postgraduation program at ISEP, where I honed my skills in front-end
                    development using JavaScript, HTML, CSS, and React to create dynamic and engaging web interfaces. On
                    the back-end, I have a solid foundation in Java, Spring Boot, and JPA, and I’m proficient in
                    managing databases with MySQL. Additionally, I have experience with Docker, Jenkins, and Git, which
                    enables me to work efficiently in modern DevOps environments.
                    <p></p>
                    <p> </p>
                    My background in veterinary medicine provided me with strong problem-solving skills, attention to
                    detail, and the ability to collaborate effectively within a team.
                    <p></p>
                    <p></p>
                    Beyond coding and work, I’m passionate about traveling, exploring new cultures, trying different
                    cuisines, spending time at the beach, hiking in the great outdoors and camping.
                    <p></p>
                    <p className="last">
                        If you’re looking for a dedicated and versatile developer who thrives in team environments, I’d love
                        to connect!😻
                    </p>

                </p>
            </div>
        </section>
    );
};

export default About;
