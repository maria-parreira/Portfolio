import React, { useState } from 'react';
import resume from '../assets/CV.pdf';
import downloadIcon from '../assets/cvicon.jpg';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';

const Resume: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
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

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
            .then((result) => {
                setFormStatus('Message sent successfully!');
                setFormState({ name: '', email: '', message: '' });
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
        <section id="Resume" className="py-30">
            <h2
                className={`text-3xl font-bold text-center mb-6 transform transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                ref={sectionRef}
            >
                Resume
            </h2>
            <p className={`text-center text-lg text-gray-700 mb-6 transform transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}>
                For a detailed overview of my professional background, skills, and experiences, click below:
            </p>
            <div className={`flex justify-center mb-8 transform transition-transform duration-1000 ${sectionInView ? 'scale-100' : 'scale-90 opacity-0'}`}>
                <a
                    href={resume}
                    download="Maria_Parreira_CV.pdf"
                    className="flex items-center space-x-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
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
            <div className={`max-w-2xl mx-auto px-4 transform transition-opacity duration-1000 ${formInView ? 'opacity-100' : 'opacity-0'}`} ref={formRef}>
                <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Contact Me</h3>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                {formStatus && (
                    <p className={`mt-4 text-center ${formStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {formStatus}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Resume;
