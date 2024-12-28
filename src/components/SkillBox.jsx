import React, { useState, useEffect } from 'react';

const skills = ['Artificial Intelligence', 'Frontend', 'Backend', 'Cloud Services', 'Node.js', 'React.js', 'Python', 'C++', 'SQL', 'HTML', 'CSS', 'Docker', 'Amazon Web Services', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Git', 'Linux', 'Postman', 'Image Processing', 'Deep Learning', 'PyTorch', 'TailwindCSS', 'Express', 'Redux', 'Next.js', 'WebSockets', 'OAuth', 'JavaScript', 'Machine Learning', 'Computer Vision', 'Communication', 'Soft Skills', 'MATLAB'];

const SkillBox = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly select a skill and position
            const randomSkill = skills[Math.floor(Math.random() * skills.length)];
            const randomPosition = {
                // Random position within 20%-50% top & 20%-80% left the box
                top: `${Math.random() * 30 + 20}%`, 
                left: `${Math.random() * 60 + 20}%`,
            };

            setActiveSkill(randomSkill);
            setPosition(randomPosition);

            // Clear the skill after 1 seconds
            setTimeout(() => setActiveSkill(null), 900);
        }, 1000); // Change skill every 1.5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="container mx-auto text-center">
            <div className="relative h-28 w-full rounded-lg overflow-hidden shadow-md">
                {activeSkill && (
                    <span
                        className="absolute text-3xl font-bold font-ysabeau text-gray-600 animate-fade-in-out min-w-full"
                        style={{
                            top: position.top,
                            left: position.left,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {activeSkill}
                    </span>
                )}
            </div>
        </div>
    );
};

export default SkillBox;
