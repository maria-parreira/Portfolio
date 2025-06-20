// src/components/About/AboutImage.tsx

interface AboutImageProps {
  src: string;
  alt: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="rounded-lg w-full md:w-40 h-auto object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
  />
);

export default AboutImage;
