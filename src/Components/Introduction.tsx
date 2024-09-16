import React from 'react';
import helloImage from "../assets/hello.jpg";

const Introduction: React.FC = () => {
    return (
        <section id="Introduction" className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:items-center">
                {/* Texto de introdução */}
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">I'm a Junior Software Developer</h2>
                    <p className="text-lg font-light"></p>
                </div>
                {/* Imagem de introdução */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={helloImage}
                        alt="Maria Parreira"
                        className="rounded-full shadow-lg w-64 h-64 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
