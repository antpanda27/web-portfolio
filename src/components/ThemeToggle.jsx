import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (

        <div
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex items-center justify-center text-gray-800 cursor-pointer"
        >
            {isDarkMode ? <Moon fill="#ffffffff" size={18} className="text-white" /> : <Sun fill="#ecc94b" size={18} className="text-yellow-500" />}
        </div>
    );
};

export default ThemeToggle;
