import { useInView } from "react-intersection-observer";
import { aboutImages } from "../../data/aboutImages";
import AboutImage from "./AboutImage";

const AboutGallery: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {aboutImages.map((img, idx) => (
          <AboutImage key={idx} src={img} alt={`Maria Parreira ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
