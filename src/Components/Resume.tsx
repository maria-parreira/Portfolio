import React, { useState } from 'react';
import resume from '../assets/CV.pdf';
import downloadIcon from '../assets/cvicon.jpg';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPen, FaUser } from 'react-icons/fa';

const Resume: React.FC = () => {
    const [formState, setFormState] = useState({
        subject: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_52sen5b', 'template_z4h2i2s', e.currentTarget, '6ZZVpxgRfRbkOJsj_')
            .then((result) => {
                setFormStatus('Message sent successfully!');
                setFormState({ subject: '', email: '', message: '' });
            }, (error) => {
                setFormStatus('Failed to send message.');
            });
    };

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section id="Resume" className="py-12">
            <h2
                className={`text-3xl font-bold text-center mb-6 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                ref={sectionRef}
            >
                Resume
            </h2>
            <p className={`text-center text-lg text-gray-600 mb-6 transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
                For a detailed overview of my professional background, skills, and experiences, click below:
            </p>
            <div className={`flex justify-center mb-8 transition-transform duration-1000 ${sectionInView ? 'scale-100' : 'scale-90 opacity-0'}`}>
                <a
                    href={resume}
                    download="Maria_Parreira_CV.pdf"
                    className="flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-pink-300 text-white py-2 px-4 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
                >
                    <img
                        src={downloadIcon}
                        alt="Download CV"
                        className="w-8 h-8"
                    />
                    <span>Download</span>
                </a>
            </div>

            {/* Formulário de contato */}
            <div className={`max-w-2xl mx-auto px-4 transition-opacity duration-1000 ${formInView ? 'opacity-100' : 'opacity-0'}`} ref={formRef}>
                <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Contact Me</h3>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                                <FaPen className="ml-3 text-gray-400" />
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleInputChange}
                                    className="w-full p-2 pl-4 border-none focus:outline-none rounded-lg"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                                <FaEnvelope className="ml-3 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 pl-4 border-none focus:outline-none rounded-lg"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                        <div className="flex items-start border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                            <FaUser className="ml-3 mt-2 text-gray-400" />
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                className="w-full p-2 pl-4 border-none focus:outline-none rounded-lg"
                                rows={4}
                                placeholder="Write your message"
                                required
                            />
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-400 to-pink-300 text-white py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                {formStatus && (
                    <p className={`mt-4 text-center ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                        {formStatus}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Resume;
