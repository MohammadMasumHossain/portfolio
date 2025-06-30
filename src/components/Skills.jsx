import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiDaisyui, SiMongodb, SiExpress, SiFirebase, SiJsonwebtokens, SiReactrouter } from 'react-icons/si';

const skills = [
  { name: 'C++', icon: <FaCode className="text-blue-700" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'DaisyUI', icon: <SiDaisyui className="text-purple-500" /> },
  { name: 'React JS', icon: <FaReact className="text-sky-400" /> },
  { name: 'React Router', icon: <SiReactrouter className="text-red-500" /> },
  { name: 'Node JS', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express JS', icon: <SiExpress className="text-gray-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <div className="bg-base-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-10">My Skills</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5 flex flex-col items-center gap-2"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
