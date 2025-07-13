import { useInView } from "react-intersection-observer";
import { aboutImages } from "../../data/aboutImages";
import AboutImage from "./AboutImage";

const AboutGallery: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {aboutImages.map((img, idx) => (
          <AboutImage key={idx} src={img} alt={`Maria Parreira ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;
