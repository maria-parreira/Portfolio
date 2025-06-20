// src/components/Header/MenuToggle.tsx
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface MenuToggleProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, toggleOpen }) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="md:hidden flex items-center space-x-2 relative z-10"
      onClick={toggleOpen}
    >
      {isOpen ? (
        <XMarkIcon className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
      ) : (
        <Bars3Icon className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
      )}
    </button>
  );
};

export default MenuToggle;
