import React from "react";
import { EducationItem } from "../../data/education";

interface Props {
  edu: EducationItem;
  reverse?: boolean;
}

const EducationCard: React.FC<Props> = ({ edu, reverse = false }) => {
  return (
    <div
      className={`relative flex flex-col items-start md:flex-row md:items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Icon */}
      <div className={`flex-shrink-0 ${reverse ? "ml-6" : "mr-6"} mb-4`}>
        <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            src={edu.icon}
            alt={`${edu.degree} Icon`}
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
      {/* Content */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2 text-teal-700 hover:text-teal-500">
          {edu.degree}
        </h3>
        <h4 className="text-base font-medium text-gray-600 mb-1">
          {edu.institution}
        </h4>
        <p className="text-gray-500 mb-1 text-sm">{edu.duration}</p>
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          {edu.description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
