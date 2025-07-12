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
        If I could fit my personality into a suitcase, it would be packed with{" "}
        <span className="font-light text-slate-900">
          sunshine, passport stamps
        </span>
        , and probably a few snacks for the road. ✈️🍪 I’m someone who’s always
        ready for the next adventure — whether it’s exploring a hidden beach,
        hiking up a trail just to catch the sunset, or saying “yes” to a food I
        can’t pronounce (but will absolutely try).
      </p>

      <p className="text-sm font-light md:text-base text-slate-800 leading-relaxed mb-4 text-justify">
        I live for the thrill of discovering{" "}
        <span className="font-light text-slate-900">
          new places, new flavors
        </span>
        , and even new mosquito bites from my latest camping trip. 🏕️ When I’m
        not outside trying to convince every stray animal to be my best friend
        🐶, you’ll probably find me soaking up the sun, laughing with friends,
        or enjoying a good meal with my family — because yes, food tastes better
        when you're surrounded by people you love.
      </p>

      <p className="text-sm font-light md:text-base text-slate-800 leading-relaxed text-justify">
        In short? I’m a mix of{" "}
        <span className="font-light text-slate-900">
          curiosity, warmth, and a little bit of chaos
        </span>{" "}
        — but the fun kind. Life’s too short not to explore it all… and I fully
        intend to!
      </p>
    </div>
  );
};

export default AboutText;
