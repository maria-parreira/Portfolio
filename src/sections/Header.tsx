// src/components/Header/Header.tsx
import React, { useState, useEffect, useCallback } from "react";
import NavLinkItem from "../components/header/NavLinkItem";
import MenuToggle from "../components/header/MenuToggle";
import { navLinks } from "../data/navLinks";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle do menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Fecha o menu quando clicas num link (em mobile)
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  // (Opcional) Fecha o menu se redimensionares para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className="text-white py-6 fixed top-0 left-0 right-0 bg-opacity-80 bg-black backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo / Título */}
        <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text">
          Maria Parreira
        </h1>

        {/* Botão mobile */}
        <MenuToggle isOpen={isOpen} toggleOpen={toggleMenu} />

        {/* Navegação */}
        <nav
          // Em mobile: hidden ou block conforme isOpen; em md+: sempre flex
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.href}
                link={link}
                onClick={handleLinkClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
