import React from 'react'
import { SectionWrapper } from '../utils';
import Timeline from './Timeline';

const Experience = () => {
  return (
    <section className='relative z-0 mt-20 bg-sky-200/20 border border-slate-950/20 rounded-xl backdrop-blur-lg mx-2 flex flex-col overflow-hidden'>
      <h2 className="text-2xl font-bold text-center text-white uppercase mt-4">Experience</h2>
      <div className='bg-slate-950/30 border border-slate-950/20 rounded-xl p-4 mx-4 my-4'>
        <div>
        <Timeline />
        </div>
      </div>
  </section>
  );
};

export default SectionWrapper(Experience, "experience");
