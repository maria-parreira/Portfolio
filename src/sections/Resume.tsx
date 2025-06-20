import { useInView } from "react-intersection-observer";
import DownloadButton from "../components/resume/DownloadButton";
import ContactForm from "../components/resume/ContactForm";

const Resume: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="Resume" className="py-12">
      <h2
        className={`text-3xl font-bold mb-8 text-center text-gray-800 transition-transform transform hover:scale-105 hover:text-pink-400 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        ref={sectionRef}
      >
        Resume
      </h2>
      <p
        className={`text-center text-lg text-gray-600 mb-6 transition-opacity duration-1000 ${sectionInView ? "opacity-100" : "opacity-0"}`}
      >
        For a detailed overview of my professional background, skills, and
        experiences, click below:
      </p>
      <DownloadButton />
      <ContactForm />
    </section>
  );
};

export default Resume;
