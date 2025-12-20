
import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
        <div className="bg-[#0a251c] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative border border-white/10 shadow-2xl">
          <div className="relative flex-shrink-0 w-full lg:w-auto flex justify-center">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-lime-400 rounded-full z-20" />
            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600" 
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" 
                alt="Happy Business Owner" 
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative z-10">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-lime-400/20 mx-auto lg:mx-0" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white italic">
              "CrediBull funded my expansion within 12 hours. The application was seamless, and the interest rate was lower than any bank offered."
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Sarah Jenkins</h4>
                <p className="text-gray-500 text-sm">Founder, Jenkins Tech Co.</p>
              </div>
              <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-lime-300 transition-all flex items-center justify-center gap-2 group w-full lg:w-auto">
                Start Success Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Decorative background text - hidden on very small mobile */}
          <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none select-none hidden sm:block">
            <span className="text-[8rem] md:text-[12rem] font-black leading-none uppercase">Success</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
