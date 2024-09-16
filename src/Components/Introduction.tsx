import React from 'react';
import helloImage from "../assets/hello.jpg";

const Introduction: React.FC = () => {
    return (
        <section id="Introduction">
            <div className="intro-container">
                <h2>I'm Junior Software Developer</h2>
                <img src={helloImage} alt="Maria Parreira" className="intro1-image"/>
            </div>
        </section>
    );
};

export default Introduction;
