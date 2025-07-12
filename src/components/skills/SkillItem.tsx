import React from "react";

interface SkillItemProps {
  name: string;
  icon: string;
  index: number;
  inView: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, index, inView }) => (
  <li
    className={`flex flex-col items-center transition-transform duration-700 ${
      inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <img src={icon} alt={`${name} icon`} className="w-12 h-12 mb-1" />
    <span className="text-sm text-gray-700 text-center">{name}</span>
  </li>
);

export default SkillItem;
