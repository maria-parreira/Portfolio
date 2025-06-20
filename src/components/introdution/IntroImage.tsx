import helloImage from "../../assets/hello.jpg";

const IntroImage: React.FC = () => (
  <figure className="md:w-1/2 flex justify-center">
    <img
      src={helloImage}
      alt="Portrait of Maria Parreira smiling"
      className="rounded-full shadow-lg w-64 h-64 object-cover transition-transform duration-500 hover:scale-105"
    />
    <figcaption className="sr-only">Maria Parreira, Web Developer</figcaption>
  </figure>
);

export default IntroImage;
