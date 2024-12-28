import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-black shadow-lg z-50">
            <nav className="container mx-auto flex items-center justify-between py-7 px-6">
                <motion.div
                    className="text-2xl font-bold text-gray-400 cursor-pointer font-libre-baskerville"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <a href="/">Aditya Maddeshiya</a>
                </motion.div>

                <ul className="hidden md:flex space-x-8">
                    {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                        <motion.li
                            key={item}
                            className="text-gray-500 text-lg cursor-pointer hover:text-blue-500"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
