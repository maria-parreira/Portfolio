// src/components/About/AboutGallery.tsx

import { useInView } from "react-intersection-observer";
import { aboutImages } from "../../data/aboutImages";
import AboutImage from "./AboutImage";

const AboutGallery: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {aboutImages.map((img, idx) => (
        <AboutImage key={idx} src={img} alt="Maria Parreira" />
      ))}
    </div>
  );
};

export default AboutGallery;
