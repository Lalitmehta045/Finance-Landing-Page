
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="payment" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="bg-lime-400 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 text-black text-left">
            <span className="text-sm font-bold uppercase tracking-widest block mb-4">Start your application.</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Ready to fund <br /> your next big move?
            </h2>
          </div>
          <div className="w-full max-w-md relative z-10">
            <div className="bg-white rounded-full p-2 flex">
              <input 
                type="email" 
                placeholder="Your work email" 
                className="bg-transparent flex-1 px-6 text-black outline-none placeholder:text-gray-400"
              />
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all whitespace-nowrap">
                Check Eligibility
              </button>
            </div>
            <p className="text-black/60 text-sm mt-4 text-center md:text-left">
              Join over <span className="font-bold">50,000+</span> satisfied borrowers.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-black/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
