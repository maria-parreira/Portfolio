import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importa ícones do Heroicons

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-pink-400 py-20">
            <div className="container mx-auto  px-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold ">Maria Parreira</h1>
                {/* Botão do menu */}
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
                {/* Menu de navegação */}
                <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 ">
                        <li><a href="#Aboutme" className="hover:font-bold">About</a></li>
                        <li><a href="#Education" className="hover:font-bold">Education</a></li>
                        <li><a href="#Skills" className="hover:font-bold">Skills</a></li>
                        <li><a href="#Projects" className="hover:font-bold">Projects</a></li>
                        <li><a href="#Resume" className="hover:font-bold">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
