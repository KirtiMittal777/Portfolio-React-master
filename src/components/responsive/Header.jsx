import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "@fontsource/poppins/700.css";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-4 md:px-[10rem] fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-500 cursor-pointer">
          Kirti Mittal
        </h1>
        
        <nav className="hidden md:block px-6">
          <ul className="flex space-x-4 md:space-x-8 font-bold text-lg">
            <li><a href="#home" className="text-gray-700 dark:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300">Skills</a></li>
            <li><a href="#portfolio" className="text-gray-700 dark:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl focus:outline-none transition duration-500 ease-in-out"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>
      </div>
    </header>
  );
};

export default Header;