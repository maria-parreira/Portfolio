import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" text-white py-6">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-400 to-green-500 bg-clip-text">
                    Maria Parreira
                </h1>

                <button
                    className="md:hidden flex items-center space-x-2 relative z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
                    ) : (
                        <Bars3Icon className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
                    )}
                </button>

                <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        <li className="relative group">
                            <a
                                href="#Aboutme"
                                className="text-lg font-semibold transition-colors duration-300 hover:text-pink-300"
                            >
                                About
                            </a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
                        </li>
                        <li className="relative group">
                            <a
                                href="#Education"
                                className="text-lg font-semibold transition-colors duration-300 hover:text-pink-300"
                            >
                                Education
                            </a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
                        </li>
                        <li className="relative group">
                            <a
                                href="#Skills"
                                className="text-lg font-semibold transition-colors duration-300 hover:text-pink-300"
                            >
                                Skills
                            </a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
                        </li>
                        <li className="relative group">
                            <a
                                href="#Projects"
                                className="text-lg font-semibold transition-colors duration-300 hover:text-pink-300"
                            >
                                Projects
                            </a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
                        </li>
                        <li className="relative group">
                            <a
                                href="#Resume"
                                className="text-lg font-semibold transition-colors duration-300 hover:text-pink-300"
                            >
                                Contacts
                            </a>
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
