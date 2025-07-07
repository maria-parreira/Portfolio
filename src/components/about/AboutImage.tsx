// src/components/About/AboutImage.tsx

interface AboutImageProps {
  src: string;
  alt: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="rounded-2xl w-full max-w-[160px] md:max-w-[200px] h-auto object-cover border-4 border-green-400 shadow-md transition-transform duration-500 hover:scale-105"
  />
);

export default AboutImage;
