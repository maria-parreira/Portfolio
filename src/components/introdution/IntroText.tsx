const IntroText: React.FC = () => (
  <div className="w-full md:w-1/2 text-center px-4">
    <h1
      id="introduction-heading"
      className="whitespace-nowrap text-2xl md:text-2xl font-semibold mb-6 tracking-wide text-rose-400"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Welcome to my digital space!
    </h1>
    <div
      className="text-sm font-bold max-w-xl mx-auto text-gray-800 leading-relaxed"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Explore my journey and what inspires me.
    </div>
  </div>
);

export default IntroText;
