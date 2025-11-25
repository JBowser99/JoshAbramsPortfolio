
const Hero = () => {
  return (
  <section className={'relative w-full h-screen mx-auto my-auto'}>
    <div className={'sm:ml-36 ml-24 bg-sky-950/10 border-l-2 border-slate-950/20 h-full w-full mx-auto my-auto'}>
      <h1 className="pl-2 pt-2 text-2xl uppercase leading-tight">
        <span className="text-white">Hello,</span><span className="text-blue-400"> I'm </span><br/>
        <span className="text-white font-bold">Joshua</span><span className="text-blue-400 font-bold"> Abrams</span><br/>
        <span className="text-white">Solo</span><span className="text-blue-400"> Developer</span>
      </h1>
    </div>
  </section>  
  );
};

export default Hero;