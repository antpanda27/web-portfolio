import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#111] py-12 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider"><img src="/logo.svg" alt="Anthony Phun" className="h-12 w-auto" /></span>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">© 2025 Anthony Phun. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
