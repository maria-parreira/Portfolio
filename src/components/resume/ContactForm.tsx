import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPen, FaUser } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52sen5b",
        "template_z4h2i2s",
        e.currentTarget,
        "6ZZVpxgRfRbkOJsj_"
      )
      .then(() => {
        setFormStatus("Message sent successfully!");
        setFormState({ subject: "", email: "", message: "" });
      })
      .catch(() => {
        setFormStatus("Failed to send message.");
      });
  };

  return (
    <div className="max-w-xl mx-auto px-2 text-sm font-light text-rose-500">
      <h3 className="text-base font-serif font-bold text-center mb-2">
        Send me a message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="subject" className="text-xs mb-1 block font-serif">
              Subject
            </label>
            <div className="flex items-center border border-yellow-200 rounded-md px-2 py-1  bg-white opacity-60">
              <FaPen className="text-rose-500 mr-2 text-xs font-serif" />
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleInputChange}
                className="w-full text-xs bg-transparent focus:outline-none font-serif"
                placeholder="Subject"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-xs mb-1 block font-serif">
              Email
            </label>
            <div className="flex items-center border border-yellow-200 rounded-md px-2 py-1 bg-white opacity-60">
              <FaEnvelope className="text-rose-400 mr-2 text-xs font-serif" />
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full text-xs bg-transparent focus:outline-none font-serif"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs mb-1 block font-serif">
            Message
          </label>
          <div className="flex items-start border border-yellow-200 rounded-md px-2 py-1  bg-white opacity-60">
            <FaUser className="text-rose-400 mr-2 mt-1 text-xs font-serif" />
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              className="w-full text-xs bg-transparent focus:outline-none resize-none font-serif"
              rows={3}
              placeholder="Your message..."
              required
            />
          </div>
        </div>

        <div className="text-center mt-2">
          <button
            type="submit"
            className="bg-rose-400 hover:bg-rose-500 text-white text-xs py-1.5 px-5 rounded-full transition duration-200 font-serif font-bold"
          >
            Send
          </button>
        </div>
      </form>

      {formStatus && (
        <p
          className={`mt-3 text-center text-xs ${
            formStatus.includes("successfully")
              ? "text-rose-500"
              : "text-rose-500"
          }`}
        >
          {formStatus}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
