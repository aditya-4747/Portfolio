import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const AboutSection = () => {
    return (
        <Section
            id="about"
            className="py-16 bg-white text-gray-800"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            About Me
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 font-lato">
                            I'm a passionate <span className="text-blue-600">Software Developer</span> with experience in technologies like the MERN stack, Image Processing, Cloud Services and more. I love solving problems and building applications that make a real impact.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 font-lato">
                            With projects ranging from <span className="text-blue-600">Video Streaming API</span> to <span className="text-blue-600">YOLO-based real-time detection models</span>, I bring a unique blend of analytical thinking and creativity.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 font-lato">
                            In addition to coding, I enjoy gaming, especially <span className="text-blue-600">strategic games</span>, which inspires my problem-solving mindset.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 font-lato">
                            Let’s connect and create something amazing!
                        </p>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
};

export default AboutSection;
