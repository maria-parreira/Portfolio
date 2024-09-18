import React from 'react';
import { useInView } from 'react-intersection-observer';
import myImage1 from '../assets/profile-image.jpg';
import myImage2 from '../assets/me-2.jpg';
import myImage3 from '../assets/me-3.jpg';
import myImage4 from '../assets/image4.jpg';
import myImage5 from '../assets/image5.jpg';

const About: React.FC = () => {
    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <section id="Aboutme" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Galeria de Imagens */}
                    <div
                        ref={imageRef}
                        className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 transform transition-opacity duration-1000 ease-out ${imageInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={myImage1}
                            alt="Maria Parreira"
                            className="rounded-lg w-full md:w-40 h-auto object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                        />
                        <img
                            src={myImage2}
                            alt="Maria Parreira"
                            className="rounded-lg w-full md:w-40 h-auto object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                        />
                        <img
                            src={myImage3}
                            alt="Maria Parreira"
                            className="rounded-lg w-full md:w-40 h-auto object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                        />
                        <img
                            src={myImage4}
                            alt="Maria Parreira"
                            className="rounded-lg w-full md:w-40 h-auto object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                        />
                        <img
                            src={myImage5}
                            alt="Maria Parreira"
                            className="rounded-lg w-full md:w-40 h-52 object-cover border-4 border-green-500 shadow-lg transform transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>

                <div
                    ref={textRef}
                    className={`mt-8 md:mt-16 text-center md:text-left transform transition-opacity duration-1000 ease-out ${textInView ? 'opacity-100' : 'opacity-0'} max-w-4xl mx-auto`}
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 transition-transform transform hover:scale-105 hover:text-blue-300">
                        Who am I?
                    </h2>
                    <p className="text-sm text-justify text-gray-700 mb-4">
                        I’m Maria Parreira, a software developer based in Porto with roots in Évora, Portugal.
                        While technology is a big part of my life, there’s so much more that keeps me grounded and connected to the world around me.
                    </p>
                    <p className="text-sm text-justify text-gray-700 mb-4">
                        I absolutely love spending time outdoors, and the beach is my happy place.
                        Whether it's soaking up the sun, swimming in the ocean, or taking long walks on the shore, I always make the most of these moments.
                        I’m also a big fan of outdoor activities like hiking and camping — being surrounded by nature always recharges me.
                    </p>
                    <p className="text-sm text-justify text-gray-700 mb-4">
                        Traveling is another passion of mine. I love exploring new places, diving into different cultures, and of course, trying local food (especially if it's something I’ve never tasted before!).
                        I also deeply value time with my family and friends, whether it's cozy dinners, spontaneous adventures, or simply gathering at home to enjoy each other’s company.
                    </p>
                    <p className="text-sm text-justify text-gray-700 mb-4">
                        On the professional side, I’m a dedicated software developer who thrives on building innovative solutions.
                        But more than anything, I believe in maintaining a healthy balance between work and life, and I’m always seeking new experiences and ways to grow both personally and professionally.
                    </p>
                    <p className="text-sm text-justify text-gray-700 font-semibold">
                        Whether you want to talk tech, travel, or your favorite dish, I’d love to connect! 😻
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
