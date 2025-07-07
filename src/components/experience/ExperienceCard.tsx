// src/components/Journey/ExperienceCard.tsx

import React from "react";
import { ExperienceItem } from "../../data/experience";

interface Props {
  experience: ExperienceItem;
  reverse?: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, reverse = false }) => {
  return (
    <div
      className={`relative flex flex-col items-start md:flex-row md:items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } w-full max-w-4xl mx-auto`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 ${reverse ? "ml-6" : "mr-6"} mb-4 md:mb-0`}
      >
        <div className="w-14 h-14 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            src={experience.icon}
            alt={`${experience.title} Icon`}
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex-grow max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2 text-blue-700 hover:text-blue-500">
          {experience.title}
        </h3>
        <h4 className="text-base font-medium text-gray-600 mb-1">
          {experience.company}
        </h4>
        <p className="text-gray-500 mb-1 text-sm">{experience.duration}</p>
        <p className="text-gray-700 text-sm leading-relaxed text-justify">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
