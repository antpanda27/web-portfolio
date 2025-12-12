import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        degree: 'Diploma of Applied Technolgies',
        school: 'TAFE',
        year: 'ongoing'
    },
    {
        degree: 'Entry to Tech Skill Set',
        school: 'Upskilled',
        year: '2024'
    },
    {
        degree: 'Bachelor of Interactive Media',
        school: 'Academy of Information Technology',
        year: '2022'
    }
];

const certifications = [
    { name: 'AWS Certified Cloud Practitioner', badgeId: 'ecf7f12d-ba08-4e4f-bccb-18adff6c5887', imageUrl: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob' },
    { name: 'Google Cybersecurity Professional Certificate V2', badgeId: 'bb5fc368-92c7-4545-b09c-d1a89cf6ab8a', imageUrl: 'https://images.credly.com/images/0bf0f2da-a699-4c82-82e2-56dcf1f2e1c7/image.png' },
    { name: 'Google UX Design Professional', badgeId: 'ecf7f12d-ba08-4e4f-bccb-18adff6c5887', imageUrl: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob' }, // Placeholder ID
    { name: 'Meta Front-End Developer', badgeId: 'ecf7f12d-ba08-4e4f-bccb-18adff6c5887', imageUrl: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob' }, // Placeholder ID
    { name: 'Adobe Certified Professional', badgeId: 'ecf7f12d-ba08-4e4f-bccb-18adff6c5887', imageUrl: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob' }, // Placeholder ID
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-[#1a1a1a] overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-[#242424] p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 transition-colors flex gap-4"
                        >
                            <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center self-center flex-shrink-0 text-pink-500 mt-1">
                                <GraduationCap size={20} />
                            </div>
                            <div className="flex-1 text-center self-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">{edu.degree}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.school}</p>
                                <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <h3 className="text-center text-xl text-gray-600 dark:text-gray-400 mb-8 font-medium">Certifications & Badges</h3>

                    <div className="flex overflow-hidden group">
                        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
                            {/* First set of items */}
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <a href={`https://www.credly.com/earner/earned/badge/${cert.badgeId}`}>
                                        <img width="150" height="150" src={cert.imageUrl} alt={cert.name} />
                                    </a>
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {certifications.map((cert, index) => (
                                <div key={`dup-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                                    <a href={`https://www.credly.com/earner/earned/badge/${cert.badgeId}`}>
                                        <img width="150" height="150" src={cert.imageUrl} alt={cert.name} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
