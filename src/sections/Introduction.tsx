import IntroText from "../components/introdution/IntroText";

const Introduction: React.FC = () => {
  return (
    <section
      id="Introduction"
      aria-labelledby="introduction-heading"
      className="mt-10 py-10"
    >
      <div className="container mx-auto px-4">
        <div className="bg-zinc-100 text-base text-gray-800 leading-relaxed rounded-xl shadow-md p-6 md:p-10 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
          <IntroText />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
