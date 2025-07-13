interface AboutImageProps {
  src: string;
  alt: string;
  location: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt, location }) => (
  <div className="relative rounded-2xl w-full max-w-[160px] md:max-w-[200px] h-auto border-2 border-rose-400 shadow-md overflow-hidden group cursor-pointer">
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition-opacity duration-300">
      <p className="text-white text-center px-2">{location}</p>
    </div>
  </div>
);

export default AboutImage;
