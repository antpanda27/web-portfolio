import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen transition-colors duration-300 bg-[var(--bg-color)] text-[var(--text-color)]">
                <Navbar />
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
