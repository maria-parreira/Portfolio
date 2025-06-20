import resume from "../../assets/cvicon.jpg";
import downloadIcon from "../../assets/cvicon.jpg";

const DownloadButton: React.FC = () => (
  <div className="flex justify-center mb-8 transition-transform duration-1000 scale-100">
    <a
      href={resume}
      download="Maria_Parreira_CV.pdf"
      className="flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-pink-300 text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
    >
      <img src={downloadIcon} alt="Download CV" className="w-8 h-8" />
      <span>Download</span>
    </a>
  </div>
);

export default DownloadButton;
