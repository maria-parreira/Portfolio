import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importa ícones do Heroicons

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Meu Site</h1>
                {/* Botão do menu */}
                <button
                    className="md:hidden flex items-center space-x-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
                {/* Menu de navegação */}
                <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4">
                        <li><a href="#about" className="hover:underline">Sobre</a></li>
                        <li><a href="#education" className="hover:underline">Educação</a></li>
                        <li><a href="#skills" className="hover:underline">Habilidades</a></li>
                        <li><a href="#projects" className="hover:underline">Projetos</a></li>
                        <li><a href="#experience" className="hover:underline">Experiência</a></li>
                        <li><a href="#resume" className="hover:underline">Currículo</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
