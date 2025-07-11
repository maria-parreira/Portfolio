import React from "react";
import { useInView } from "react-intersection-observer";
import SkillItem from "../components/skills/SkillItem";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="Skills" className="py-20 font-serif">
      <h2 className="text-3xl font-bold mb-20 text-center text-gray-800">
        Some of my skills
      </h2>
      <ul
        ref={skillsRef}
        className={`flex flex-wrap justify-center gap-6 transform transition-opacity duration-1000 ease-out ${
          skillsInView ? "opacity-100" : "opacity-0"
        }`}
      >
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            {...skill}
            index={index}
            inView={skillsInView}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
