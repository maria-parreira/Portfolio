import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Maria Parreira</h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;