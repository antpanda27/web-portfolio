import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-teal-600 dark:text-teal-400 font-semibold mb-4">
                        Hello, I'm Anthony Phun
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Creative Designer <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">IT Professional</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Crafting digital experiences where creative design meets technical excellence.
                    </p>

                    <div className="mt-10 flex justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 !text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
