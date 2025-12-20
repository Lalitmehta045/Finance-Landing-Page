
import React from 'react';
import { ArrowRight, Activity, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 space-y-16 sm:space-y-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 block">Financial Intelligence</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Financial Tools</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to manage your credit and repay with confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1" data-aos="fade-right">
            <div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
              <Activity className="text-lime-400 w-6 h-6" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">Live Credit <br className="hidden sm:block" /> Score Monitoring</h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Get real-time updates on your credit score and personalized tips on how to improve it to unlock better interest rates in the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 text-lime-400 font-bold hover:gap-4 transition-all group">
                Open Dashboard <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full order-1 lg:order-2" data-aos="fade-left">
            <div className="bg-[#0a251c] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/10 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-[60px] rounded-full" />
              
               <div className="bg-white/5 rounded-2xl p-6 sm:p-8 mb-6 text-center border border-white/5 relative z-10">
                  <div className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Real-time Credit Score</div>
                  <div className="text-5xl sm:text-7xl font-black text-lime-400 mb-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">785</div>
                  <div className="text-xs sm:text-sm font-bold text-lime-400/50 uppercase tracking-widest">Excellent Score</div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-white/5 p-4 sm:p-5 rounded-xl border border-white/5">
                    <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Utilization</div>
                    <div className="text-xl sm:text-2xl font-black text-white">12%</div>
                  </div>
                  <div className="bg-lime-400 p-4 sm:p-5 rounded-xl text-black shadow-lg">
                    <div className="text-[10px] font-bold opacity-60 uppercase mb-1">Health Status</div>
                    <div className="text-xl sm:text-2xl font-black flex items-center gap-2">
                      Optimal <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
