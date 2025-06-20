// src/components/Header/NavLinkItem.tsx
import React from "react";
import type { NavLink } from "../../data/navLinks";

interface NavLinkItemProps {
  link: NavLink;
  onClick?: () => void;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ link, onClick }) => {
  return (
    <li className="relative group">
      <a
        href={link.href}
        onClick={onClick}
        className="text-lg font-semibold transition-colors duration-300 hover:text-pink-400"
      >
        {link.label}
      </a>
      {/* Underline animado ao hover */}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left"></span>
    </li>
  );
};

export default NavLinkItem;
