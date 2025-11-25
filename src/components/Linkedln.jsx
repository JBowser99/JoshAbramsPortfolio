import React from 'react'

const Linkedln = () => {
  return (
    <div className='z-10'>
        <button className='hover:border-sky-200/50 bg-sky-600/30 fixed border-2 border-sky-600/60 rounded-full mx-4 my-12 h-16 w-16 sm:w-28 text-[12px] text-white font-semibold'>
            <div>
                <a href="https://linkedin.com/in/joshua-abrams-368387177"> <img
                  src="/images/Link.png"
                  alt="linkedinIcon"
                  title='Find Me On LinkedIn'
                  className="bg-white rounded-md p-0.5 w-6 h-6 mx-auto my-auto mb-0 text-center object-contain"
                  /> 
                  <h1 title='Find Me On LinkedIn' className='object-contain text-white text-[10px] md:text-sm font-bold uppercase text-center'>LinkedIn</h1>
                </a>
            </div>          
        </button>
    </div>
  )
}

export default Linkedln