import IntroText from "../components/introdution/introText";
import IntroImage from "../components/introdution/introImage";

const Introduction: React.FC = () => {
  return (
    <section
      id="Introduction"
      aria-labelledby="introduction-heading"
      className="py-20 bg-gradient-to-r from-blue-200 to-pink-300 text-white rounded-lg"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        <IntroText />
        <IntroImage />
      </div>
    </section>
  );
};

export default Introduction;
