import React, { useState } from "react";
import downloadIcon from "../../assets/cv/cv-icon.png";

const DownloadButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center mb-8 relative">
      <a
        href="/Portfolio/public/CV.pdf"
        download="Maria_Parreira_CV.pdf"
        className="p-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={downloadIcon} alt="Download CV" className="w-20 h-20" />
      </a>

      {hovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-100 text-gray-700 text-xs rounded px-2 py-1 pointer-events-none">
          Download my Resume
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
