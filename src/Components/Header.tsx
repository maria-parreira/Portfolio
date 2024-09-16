import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importa ícones do Heroicons

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-pink-300 to-blue-200 text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Maria Parreira</h1>
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
                        <li><a href="#about" className="hover:font-bold">Sobre</a></li>
                        <li><a href="#education" className="hover:font-bold">Educação</a></li>
                        <li><a href="#skills" className="hover:font-bold">Habilidades</a></li>
                        <li><a href="#projects" className="hover:font-bold">Projetos</a></li>
                        <li><a href="#experience" className="hover:font-bold">Experiência</a></li>
                        <li><a href="#resume" className="hover:font-bold">Currículo</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
