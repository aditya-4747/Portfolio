import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const HomeSection = () => {
    return (
        <Section
            id="home"
            className="min-h-[90vh] bg-black flex items-center justify-center bg-gradient-to-b"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-left">
                <motion.div
                    className="text-gray-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hey there, <br />I'm <span className="text-blue-600">Aditya Kumar Maddeshiya</span>
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-600 mb-6">
                        A passionate <span className="text-blue-600">Software Developer</span> dedicated to building impactful digital solutions.
                    </p>

                    <motion.div
                        className='w-48'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="#projects"
                            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                >
                    <svg
                        className="mx-auto w-3/4 h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                    >
                        <circle
                            cx="250"
                            cy="250"
                            r="220"
                            fill="url(#gradient)"
                            opacity="0.2"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </Section>
    );
};

export default HomeSection;
