import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Nhan Van Education',
        category: 'Backend Development',
        description: 'Complete brand overhaul for a tech startup, including logo, color palette, and marketing materials.',
        image: '/nhanvan/homepage.png',
        tags: ['ARP.NET', 'AWS', 'Terraform', 'GitActions'],
        link: '#'
    },
    {
        title: 'Cookify',
        category: 'Personal Web Project',
        description: 'A fully functional e-commerce site built with React and Node.js, featuring secure payments and inventory management.',
        image: '/cookify/homepage.png',
        tags: ['React', 'Next.js', 'ARP.NET', 'AWS'],
        link: '#',
        github: '#'
    },
    {
        title: 'Doppio Espresso & Bakery',
        category: 'Graphic Design & Photography',
        description: 'A fully functional e-commerce site built with React and Node.js, featuring secure payments and inventory management.',
        image: 'doppio/displays.png',
        tags: ['Logo Design', 'Branding', 'Digital Menu'],
        link: 'https://aphun27.myportfolio.com/graphic-design#:~:text=Doppio',
        github: '#'
    },
    {
        title: 'Hong Ha Bakery Mascot',
        category: 'Graphic Design & Photography',
        description: 'Series of high-engagement social media graphics and motion design assets for a product launch.',
        image: '/hongha/wallmenu.png',
        tags: ['Digital Menu', 'Large Format'],
        link: 'https://aphun27.myportfolio.com/graphic-design#:~:text=Hong%20Ha%20Bakery'
    },
    {
        title: 'Macarthur Camera House',
        category: 'Graphic Design & Videography',
        description: 'Series of high-engagement social media graphics and motion design assets for a product launch.',
        image: 'camerahouse/mch-sns.png',
        tags: ['Social Media', 'Large Format'],
        link: 'https://aphun27.myportfolio.com/graphic-design#:~:text=Macarthur%20Camera%20House'
    },
    {
        title: 'Janchi Korean Grill',
        category: 'Graphic Design & Photography',
        description: 'Series of high-engagement social media graphics and motion design assets for a product launch.',
        image: "janchi/Menu@0.25x.png",
        tags: ['Branding', 'Social Media'],
        link: 'https://aphun27.myportfolio.com/graphic-design#:~:text=Janchi%20Korean%20Grill'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-[#242424] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-[#242424]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-130 hover:rotate-4"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-purple-400 text-sm font-medium">{project.category}</span>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a href={project.github} className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        <a href={project.link} className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-left">{project.title}</h3>
                                {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-left">{project.description}</p> */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
