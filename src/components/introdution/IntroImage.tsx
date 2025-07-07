import helloImage from "../../assets/intro/hello.jpg";

const IntroImage: React.FC = () => (
  <figure className="md:w-1/2 flex justify-center">
    <img
      src={helloImage}
      alt="Portrait of Maria Parreira smiling"
      className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
    />
    <figcaption className="sr-only">Maria Parreira, Web Developer</figcaption>
  </figure>
);

export default IntroImage;
