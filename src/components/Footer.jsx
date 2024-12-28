import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Section from './Section';

const Footer = () => {
    return (
        <Section id="contact" className="bg-gray-900 text-white py-16">
            <div class="container mx-auto px-8">

                {/* Contact Section */}
                <h2 class="text-4xl font-bold text-center text-blue-500 mb-12 font-ysabeau">Get in Touch</h2>
                <div class="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Contact Form */}
                    <form class="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label for="name" class="block text-sm text-blue-400 mb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name"
                                class="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm text-blue-400 mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email"
                                class="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-sm text-blue-400 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message"
                                class="w-full px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Details */}
                    <div class="w-full md:w-1/2 text-center md:text-left">
                        <p class="text-lg mb-4">Feel free to reach out for collaborations, inquiries, or just a friendly chat!</p>
                        <p class="mb-2"><span class="font-bold text-blue-400">Email:</span> adityamaddeshiya470@gmail.com</p>
                        <p class="mb-2"><span class="font-bold text-blue-400">Phone:</span> +91-6392241445</p>
                        <p><span class="font-bold text-blue-400">Location:</span> Uttar Pradesh, India</p>
                        <div class="mt-8 flex justify-center md:justify-start space-x-4">
                            <a href="https://github.com/aditya-4747" class="text-blue-400 hover:text-blue-500">
                                <GitHubIcon />
                            </a>
                            <a href="https://linkedin.com/in/aditya-kumar47" class="text-blue-400 hover:text-blue-500">
                                <LinkedInIcon />
                            </a>
                            <a href="https://x.com/Adityak47_" class="text-blue-400 hover:text-blue-500">
                                <XIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer class="bg-gray-900 text-gray-400 mt-16">
                <div class="container mx-auto px-8 text-center">
                    <p class="mb-4">Designed & Developed by <span class="text-blue-400 font-bold">Aditya Maddeshiya</span></p>
                    <p>&copy; 2024 Aditya Maddeshiya. All rights reserved.</p>
                </div>
            </footer>
        </Section>
    )
}

export default Footer