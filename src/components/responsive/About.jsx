import React from "react";
import AboutImg from "../../assets/asset 1.webp";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-10 md:py-20 px-4 md:px-20 flex flex-col md:flex-row items-center">
      <img src={AboutImg} alt="Developer Illustration" className="w-full md:w-1/2 mb-6 md:mb-0" />
      <div className="container text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300 mb-6">
          As a web developer, I am passionate about creating visually appealing and user-friendly websites...
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          <a href="https://drive.google.com/file/d/1bkuo3-INP5uonaLrjLYjA3uyNuHzBMDV/view?usp=drive_link">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
