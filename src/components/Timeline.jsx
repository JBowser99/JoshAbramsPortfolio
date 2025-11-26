import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const data = [
  {
    title: 'Resolution Specialist 3',
    company: 'Walmart',
    date: 'May 2020 - January 2021',
    description:
      'Received calls from customers about any and all issues they may be having. Always listened to the customer and made them feel valued, resolving any problems that caller had. Provided guidance to customers and documented each call with an explanation on my resolution as to what I did and how I helped the caller.',
  },
  {
    title: 'Digital Assets',
    company: 'Walmart',
    date: 'January 2021 - October 2023',
    description:
      'Performed unique or special programming changes within our IOT systems Novar, Opus, Danfoss, and CPC. This is to ensure equipment is healthy and running properly by changing setpoints or updating controllers on the Rack house for onsite HVAC technicians.',
  },
  {
    title: 'System Admin/Analyst',
    company: 'Walmart',
    date: 'September 2022 - April 2023',
    description:
      'Temporary SAM Role in the business enablement team. Used Excel daily performing wide range analysis with user and team data to update substantial changes. Managed large volumes of user data to add and remove access to specific applications for new hires. Assisted our team in China in a process called BPO (Business Process Outsource), ensuring users were added to proper systems such as Stella and Dispatcher.',
  },
  {
    title: 'Techpod',
    company: 'Walmart',
    date: 'December 2023 - Current',
    description:
      'Working offline to support all Spark driver technical issues. This includes Spark app issues, communication problems, driver account errors, background or application update issues, information changes, payment inquiries, and deactivations. Utilized tools such as Dispatcher, GSCOPE, CCA2, Oracle, and now OpenObserve (replacement for Splunk). Communicating via email with detailed resolutions and troubleshooting steps.',
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { ref: experienceRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center space-y-10 w-full">
        
        {data.map((item, index) => (
          <div
            key={index}
            ref={index === activeIndex ? experienceRef : null}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`
              transition-all duration-500 ease-in-out
              w-[90%] md:w-4/5 lg:w-3/5
              bg-white/10 border border-white/10 backdrop-blur-lg 
              p-6 rounded-2xl shadow-xl
              ${inView && activeIndex === index 
                ? 'scale-[1.03] opacity-100' 
                : 'scale-[0.98] opacity-80'
              }
            `}
          >
            {/* Title */}
            <h3 className="text-white text-2xl font-bold tracking-wide leading-snug">
              {item.title}
            </h3>

            {/* Company & Date */}
            <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
              <p className="text-slate-200 text-md font-semibold">
                {item.company}
              </p>
              <p className="text-slate-300 text-sm italic mt-1 sm:mt-0">
                {item.date}
              </p>
            </div>

            {/* Description (auto line-break & improved readability) */}
            <p className="text-slate-100 text-md leading-relaxed mt-4 whitespace-pre-line break-words">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Timeline;
