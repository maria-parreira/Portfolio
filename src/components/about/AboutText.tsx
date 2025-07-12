import React from "react";
import { useInView } from "react-intersection-observer";

const AboutText: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`w-full md:w-[100%] mt-10 md:mt-0 transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } px-6 max-w-4xl mx-auto font-serif`}
    >
      <h2 className="text-xl md:text-2xl text-slate-900 mb-6 text-center md:text-left leading-snug tracking-tight">
        Hello there!
      </h2>

      <p className="text-sm md:text-base font-light text-slate-800 leading-relaxed mb-4 text-justify">
        I’m Maria Parreira, a software developer based in Porto with roots in
        Évora, Portugal. My journey into development is grounded in curiosity,
        problem-solving, and a love for building meaningful digital experiences.
      </p>
      <p className="text-sm font-light md:text-base text-slate-800 leading-relaxed text-justify">
        If I could fit my personality into a suitcase, it would be packed with
        sunshine, passport stamps , and probably a few snacks for the road. ✈️🍪
        I’m someone who’s always ready for the next adventure — whether it’s
        exploring a hidden beach, hiking up a trail just to catch the sunset, or
        saying “yes” to a food I can’t pronounce (but will absolutely try). I
        live for the thrill of discovering new places, new flavors, and even new
        mosquito bites from my latest camping trip. 🏕️
      </p>
    </div>
  );
};

export default AboutText;
