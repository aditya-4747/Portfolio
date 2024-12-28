import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const projects = [
    {
        title: "Real-Time Spitting Detection System",
        description: "YOLO-based real-time detection system to identify spitting behavior with high accuracy.",
        image: "./spitting.jpg",
        category: "AI/ML",
    },
    {
        title: "Video Streaming API",
        description: "Backend API for managing video streaming platforms, including playlist management and user interactions.",
        image: "./video_streaming_api.jpg",
        github: "https://github.com/aditya-4747/VideoStreamAPI",
        category: "Backend",
    },
    {
        title: "YouPlay: Video Streaming Platform",
        description: "A user-centric frontend project for a video streaming platform inspired by YouTube.",
        image: "./youplay.png",
        github: "https://github.com/aditya-4747/YouPlay-Video-Streaming-Platform",
        category: "Frontend",
    },
    {
        title: "e-Yoga: Smart Market Place",
        description: "A full-stack web application developed using Next.js for yoga enthusiasts to purchase smart yoga equipments.",
        image: "./e-yoga.png",
        github: "https://github.com/aditya-4747/e-Yoga",
        category: "Full Stack",
    },
    {
        title: "Price Tracking Tool",
        description: "Tracks product prices on Amazon and Flipkart, with email notifications for price changes.",
        image: "./price_tracking.jpg",
        github: "https://github.com/aditya-4747/Price-Tracking-Tool",
        category: "Utilities",
    },
    {
        title: "Real-Time Chatting App",
        description: "A backend project for real-time chatting using WebSockets (Socket.io) and Node.js.",
        image: "./chat_app.png",
        github: "https://github.com/aditya-4747/Real-Time-Chatting-App",
        category: "Backend",
    },
    {
        title: "Customer Churn Prediction",
        description: "Machine learning model for predicting customer churn using data analysis and feature engineering.",
        image: "./customer_churn.png",
        github: "https://github.com/aditya-4747/ML_PROJECTS",
        category: "AI/ML",
    },
    {
        title: "Spam SMS Detection",
        description: "An NLP-based project to detect and classify spam SMS messages with Python and ML models.",
        image: "./spam_sms.jpg",
        github: "https://github.com/aditya-4747/ML_PROJECTS",
        category: "AI/ML",
    },
    {
        title: "Movie Genre Classification",
        description: "AI project to classify movies into genres based on descriptions using machine learning techniques.",
        image: "./movie_genre.jpg",
        github: "https://github.com/aditya-4747/ML_PROJECTS",
        category: "AI/ML",
    },
];

const ProjectsSection = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [activeCategory, setActiveCategory] = useState("All");

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };
    const handleShowLess = () => {
        setVisibleCount(3);
    };

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Utilities"];

    return (
        <Section id="projects" className="bg-black text-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-6xl font-bold mb-12 text-blue-500 text-center font-ysabeau">
                    Projects
                </h2>

                <div className="flex justify-center mb-8 sm:space-x-4 max-sm:grid max-sm:grid-cols-3 max-sm:gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg ${activeCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.slice(0, visibleCount).map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-blue-600 font-karla">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-6">{project.description}</p>
                                {project.github && (
                                    <a href={project.github} className="text-blue-500 border px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white">
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="hover:scale-105 transition-transform delay-50 duration-300">
                    {activeCategory === "All" && (
                        <button
                            onClick={visibleCount < projects.length ? handleShowMore : handleShowLess}
                            className="block mx-auto mt-8 px-4 py-2 rounded-lg bg-blue-600 text-white font-lato"
                        >
                            {visibleCount < projects.length ? 'Show More' : 'Show Less'}
                        </button>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default ProjectsSection;
