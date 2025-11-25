import React from 'react';
import { SectionWrapper } from '../utils';
import { FaChevronRight } from 'react-icons/fa';

const experiences = [
  { role: 'I.T Professional', name: 'Joshua Abrams', location: 'Arkansas' },
];

const About = () => {
  return (
    <section className='relative z-0 mt-20 bg-sky-200/20 border border-slate-950/20 rounded-xl backdrop-blur-lg mx-2 flex flex-col overflow-hidden'>
      <h2 className="text-3xl font-bold text-center text-white uppercase mt-4">About Me</h2>
      <div className='bg-slate-950/30 border border-slate-950/20 rounded-xl p-4 mx-4 my-4'>
        {experiences.map((exp, index) => (
          <div key={index} className="px-2">
            <h3 className="text-white text-xl font-semibold mb-2">{exp.role}</h3>
            <p className="text-md text-slate-100">{exp.name} | {exp.location}</p>
            <div className='text-md text-slate-100 mt-4'>
              <p className="mb-4">
                Hello, my name is Josh. I'm a passionate solo developer with a keen interest in cybersecurity and cloud engineering. Here's a quick look at my journey:
              </p>
              <ul className="space-y-4 pl-5">
                <li className="flex items-center text-slate-100">
                  <FaChevronRight className="text-blue-400 mr-2" /> Started with CSS and HTML, creating simple website layouts.
                </li>
                <li className="flex items-center text-slate-100">
                  <FaChevronRight className="text-blue-400 mr-2" /> Learned Python, React.js, and React Native for web and mobile apps.
                </li>
                <li className="flex items-center text-slate-100">
                  <FaChevronRight className="text-blue-400 mr-2" /> Focused on cloud computing and cybersecurity for future career growth.
                </li>
              </ul>
              <p className='mt-4'>
                Looking forward, I plan to continue expanding my knowledge in cloud computing and eventually dive deeper into cybersecurity. I'm driven by passion and the desire to always grow in my field.
              </p>
              <p className='mt-4'>
                Thank you for taking the time to read my story!
              </p>
            </div>
          </div>            
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
