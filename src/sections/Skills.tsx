import React from "react";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/skills";
import SkillItem from "../components/skills/SkillItem";

const Skills: React.FC = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Fallback para ecrãs pequenos: assume sempre visível
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const showContent = isMobile || skillsInView;

  return (
    <section id="Skills" className="py-20 font-serif">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        My Skills
      </h2>
      <div className="w-24 h-0.5 bg-rose-300 mx-auto mb-12 rounded-full" />

      <div
        ref={skillsRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto transition-opacity duration-1000 ease-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {skills.map((category, idx) => (
          <div
            key={idx}
            className="bg-white border border-yellow-200 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-lg font-bold text-rose-500 mb-4 text-center">
              {category.category}
            </h3>

            <ul className="flex flex-wrap justify-center gap-6">
              {category.items.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  index={index}
                  inView={showContent}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
