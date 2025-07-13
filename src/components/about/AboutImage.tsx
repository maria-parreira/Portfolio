interface AboutImageProps {
  src: string;
  alt: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => (
  <div className="w-full flex justify-center">
    <img
      src={src}
      alt={alt}
      className="rounded-2xl w-full max-w-[140px] sm:max-w-[160px] md:max-w-[200px] h-auto object-cover border-2 border-rose-400 shadow-md transition-transform duration-500 hover:scale-105"
    />
  </div>
);

export default AboutImage;
