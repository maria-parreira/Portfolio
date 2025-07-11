import { useInView } from "react-intersection-observer";
import DownloadButton from "../components/resume/DownloadButton";
import ContactForm from "../components/resume/ContactForm";

const Resume: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="Contact" className="py-16 font-serif">
      <h2
        className={`text-3xl font-bold mb-8 text-center text-gray-800 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        ref={sectionRef}
      >
        Contacts
      </h2>
      <DownloadButton />
      <ContactForm />
    </section>
  );
};

export default Resume;
