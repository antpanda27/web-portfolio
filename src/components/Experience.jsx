import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Software Engineer Intern',
        company: 'Jung Talents',
        period: '2025 - Present',
        description: 'Leading a team of designers, overseeing brand identity projects, and collaborating with developers on web implementations.'
    },
    {
        role: 'Supervisior & Marketing',
        company: 'Gong cha',
        period: '2020 - Present',
        description: 'Oversee the marketing strategy and implementation of the company, manage the team, and ensure the company is running smoothly.'
    },
    {
        role: 'Junior Designer',
        company: 'StartUp Hub',
        period: '2018 - 2019',
        description: 'Created marketing assets, social media graphics, and assisted in UI/UX design for mobile applications.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-[#242424]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-purple-500/30"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-[#242424]"></div>
                            <div className="mb-1 flex items-center gap-2 text-purple-400">
                                <Briefcase size={16} />
                                <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                            <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">{exp.company}</div>
                            <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
