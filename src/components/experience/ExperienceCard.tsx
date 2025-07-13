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
      } w-full max-w-5xl mx-auto`} // ← AUMENTADO
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 ${reverse ? "ml-6" : "mr-6"} mb-4 md:mb-0`}
      >
        <div className="w-14 h-14 bg-yellow-200 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img
            src={experience.icon}
            alt={`${experience.title} Icon`}
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 rounded-lg shadow-md border border-white flex-grow w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="font-bold font-serif mb-2 text-rose-500">
          {experience.title}
        </h3>
        <h4 className="text-base font-bold font-serif text-gray-600 mb-1">
          {experience.company}
        </h4>
        <p className="font-light font-serif text-gray-500 mb-1 text-sm">
          {experience.duration}
        </p>
        <ul className="font-light text-justify text-xs font-serif list-disc list-inside space-y-2 text-gray-700">
          {experience.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
