import React from 'react';
import DevImg from '../../assets/asset 0.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-10 px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-5">
        <div className="flex flex-col items-center md:items-start p-4 md:p-16 text-center md:text-left mt-4 text-xl">
          <a href="https://www.linkedin.com/in/kirti-mittal-17159bb5" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/KirtiMittal777/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-300 py-4"><i className="fab fa-github"></i></a>
        </div>
        <div className="text-center md:text-left md:mt-5">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Greetings, I'm <br />
            <span className="text-purple-600 dark:text-purple-400">Kirti Mittal</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">Frontend Developer</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">I Design Web Application for my Clients and Company.<br/> If you want to hire me, Contact me.</p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600" onClick={() => window.location.href = 'mailto:mittalkirti1994@gmail.com'}>
            Contact Me
          </button>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="w-full md:w-1/2 mt-6 md:mt-0" />
      </div>
    </section>
  );
};

export default Hero;
