import helloImage from "../../assets/intro/hello.jpg";

const IntroImage: React.FC = () => (
  <figure className="flex justify-center items-center">
    <img
      src={helloImage}
      alt="Portrait of Maria Parreira smiling"
      className="rounded-full shadow-lg w-12 h-12 object-cover"
    />
    <figcaption className="sr-only">Maria Parreira, Web Developer</figcaption>
  </figure>
);

export default IntroImage;
