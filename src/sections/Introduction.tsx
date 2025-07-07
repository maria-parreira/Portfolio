import IntroText from "../components/introdution/IntroText";
import IntroImage from "../components/introdution/IntroImage";

const Introduction: React.FC = () => {
  return (
    <section
      id="Introduction"
      aria-labelledby="introduction-heading"
      className="py-10"
    >
      <div className="container mx-auto px-4">
        <div className="bg-zinc-100 text-base text-gray-800 leading-relaxed rounded-xl shadow-md p-6 md:p-10 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 max-w-5xl mx-auto">
          <IntroText />
          <IntroImage />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
