import React, { useState } from 'react';
import { FaLink } from "react-icons/fa";
import p2 from '../../assets/asset 4.png';
import p4 from '../../assets/asset 7.png';
import p6 from '../../assets/p6.png';


const portfolioData = [
  { id: 1, title: 'Project 1', category: 'Application', image: p6, link: 'https://github.com/KirtiMittal777/ReactWork/tree/main/todo' },
  { id: 2, title: 'Project 2', category: 'Application', image: p2, link: 'https://github.com/KirtiMittal777/ReactWork-TicTacToe' },
  { id: 3, title: 'Project 4', category: 'Website', image: p4, link : 'https://github.com/KirtiMittal777/OpenBank' },
]

const Project = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-10 px-4 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-50' : 'opacity-100'}`}
              />
              {hoveredItem === item.id && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white text-xl font-bold cursor-pointer transition-opacity duration-300 z-10"
                >
                  <FaLink /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
