import React from 'react';
import SkillImg from '../../assets/asset 2.png';


const Skills = () => {
  const skills = [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 84 },
    { name: 'JavaScript', level: 74 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Git & GitHub', level: 60 },
    { name: 'React', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'TypeScript', level: 70 },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-10 md:py-20 px-4 md:px-20 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-purple-500 text-center md:text-left">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold dark:text-gray-300">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={SkillImg} alt="Developer Illustration" className="w-full md:w-1/2 mt-6 md:mt-0" />
    </section>
  );
};

export default Skills;