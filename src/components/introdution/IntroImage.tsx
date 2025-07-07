import helloImage from "../../assets/intro/hello.jpg";

const IntroImage: React.FC = () => (
  <figure className="md:w-1/2 flex justify-center">
    <img
      src={helloImage}
      alt="Portrait of Maria Parreira smiling"
      className="rounded-full shadow-lg w-2 h-2 sm:w-24 sm:h-24 md:w-12 md:h-12 object-cover"
    />
    <figcaption className="sr-only">Maria Parreira, Web Developer</figcaption>
  </figure>
);

export default IntroImage;
