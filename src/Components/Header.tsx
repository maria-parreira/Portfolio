import React from 'react';
import '../styles/Global.css';
const Header: React.FC = () => {
    return (
        <header>
            <h1>Maria Parreira</h1>
            <nav>
                <ul>
                    <li><a href="#Aboutme">About Me</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;