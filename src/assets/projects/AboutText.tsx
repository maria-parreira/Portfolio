// src/components/About/AboutText.tsx

import React from "react";
import { useInView } from "react-intersection-observer";

const AboutText: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`w-full md:w-[100%] mt-8 md:mt-0 text-center md:text-left transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } px-4`}
    >
      <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed mb-4">
        I’m Maria Parreira, a software developer based in Porto with roots in
        Évora, Portugal.
      </p>
      <p className="text-base md:text-lg text-center text-gray-700 leading-relaxed">
        If I could fit my personality into a suitcase, it would be packed with
        sunshine, passport stamps, and probably a few snacks for the road. ✈️🌞
        I’m someone who’s always ready for the next adventure — whether it’s
        exploring a hidden beach, hiking up a trail just to catch the sunset, or
        saying “yes” to a food I can’t pronounce (but will absolutely try). I
        live for the thrill of discovering new places, new flavors, and even new
        mosquito bites from my latest camping trip. 🏕️ When I’m not outside
        trying to convince every stray animal to be my best friend 🐶, you’ll
        probably find me soaking up the sun, laughing with friends, or enjoying
        a good meal with my family — because yes, food tastes better when you're
        surrounded by people you love. In short? I’m a mix of curiosity, warmth,
        and a little bit of chaos — but the fun kind. Life’s too short not to
        explore it all… and I fully intend to!
      </p>
    </div>
  );
};

export default AboutText;
