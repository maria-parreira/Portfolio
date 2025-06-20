import React from "react";

interface SkillItemProps {
  name: string;
  icon: string;
  index: number;
  inView: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, index, inView }) => (
  <li
    className={`flex items-center bg-blue-200 text-white py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 ${
      inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <img src={icon} alt={`${name} Icon`} className="w-8 h-8 mr-2" />
    {name}
  </li>
);

export default SkillItem;
