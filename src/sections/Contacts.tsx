import { useInView } from "react-intersection-observer";
import DownloadButton from "../components/resume/DownloadButton";
import ContactForm from "../components/resume/ContactForm";

const Contacts: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section id="Contacts" className="mb-20 py-0 font-serif">
      <h2
        className={`text-3xl font-bold mb-4 text-center text-gray-800 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        ref={sectionRef}
      >
        Let's Connect!
      </h2>
      {/* Linha separadora */}
      <div className="w-25 h-0.5 bg-rose-200 mx-auto mb-12 rounded-full" />
      <DownloadButton />
      <ContactForm />
    </section>
  );
};

export default Contacts;
