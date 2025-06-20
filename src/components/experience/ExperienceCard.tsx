import React from "react";
import { ExperienceItem } from "../../data/experience";

interface Props {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="mb-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800">
        {experience.title}
      </h3>
      <h4 className="text-md text-gray-600">{experience.company}</h4>
      <p className="text-sm text-gray-500">{experience.duration}</p>
      <p className="mt-4 text-gray-700">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
