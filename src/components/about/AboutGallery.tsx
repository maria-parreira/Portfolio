// src/components/About/AboutGallery.tsx

import { useInView } from "react-intersection-observer";
import { aboutImages } from "../../data/aboutImages";
import AboutImage from "./AboutImage";

const AboutGallery: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-4 md:flex md:flex-row md:space-x-4 items-center justify-center transform transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {aboutImages.map((img, idx) => (
        <AboutImage key={idx} src={img} alt={`Maria Parreira ${idx + 1}`} />
      ))}
    </div>
  );
};

export default AboutGallery;
