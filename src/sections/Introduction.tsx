import IntroText from "../components/introdution/IntroText";
import introImage from "../assets/intro/intro_image.jpg";

const Introduction: React.FC = () => {
  return (
    <section
      id="Introduction"
      aria-labelledby="introduction-heading"
      className="mt-10 py-10"
    >
      <div className="container mx-auto px-4">
        <div
          className="relative bg-cover bg-center rounded-xl shadow-md overflow-hidden max-w-xl mx-auto h-auto min-h-[150px]"
          style={{ backgroundImage: `url(${introImage})` }}
        ></div>
      </div>
    </section>
  );
};

export default Introduction;
