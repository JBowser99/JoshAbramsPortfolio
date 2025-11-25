import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const data = [
  {
    title: 'Software Engineer',
    company: 'Tech Co',
    date: 'Jan 2020 - Present',
    description:
      'Worked on building scalable web applications and mobile apps with modern technologies like React and React Native.',
  },
  {
    title: 'Frontend Developer',
    company: 'Design Inc',
    date: 'May 2018 - Dec 2019',
    description:
      'Developed sleek and interactive UIs using React and implemented complex animations with CSS and JS.',
  },
  {
    title: 'Intern Developer',
    company: 'Startup Hub',
    date: 'Jun 2017 - Apr 2018',
    description:
      'Assisted with full-stack web development and bug fixes on client projects, while learning from senior developers.',
  },
  {
    title: 'Intern Developer',
    company: 'Startup Hub',
    date: 'Jun 2017 - Apr 2018',
    description:
      'Assisted with full-stack web development and bug fixes on client projects, while learning from senior developers.',
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { ref: experienceRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div className="flex flex-col items-center space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            ref={index === activeIndex ? experienceRef : null}
            className={`${
              inView && activeIndex === index ? 'scale-105 opacity-100' : 'scale-95 opacity-80'
            } transition-all duration-500 ease-in-out w-4/5 max-w-lg bg-white/20 p-4 rounded-xl bgShadowlg`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-md text-slate-100">{item.company}</p>
            <p className="text-md text-slate-100">{item.date}</p>
            <p className="text-md text-slate-100 mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
