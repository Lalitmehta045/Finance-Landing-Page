
import React from 'react';
import { Landmark, Apple, Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051911] pt-16 sm:pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile App Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 sm:mb-32 relative">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="flex-1 relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative inline-block group max-w-full">
              <div className="absolute inset-0 bg-lime-400/20 rounded-[3.5rem] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" 
                className="w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl border-[8px] sm:border-[12px] border-[#0a251c] relative z-10 transform lg:-rotate-6 group-hover:rotate-0 transition-transform duration-500" 
                alt="CrediBull Mobile App Mockup" 
              />
              <div className="absolute top-1/4 -right-4 sm:-right-12 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hidden md:block z-20 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Loan Approved</div>
                    <div className="text-xs font-black text-black">₹5,00,000 Disbursed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left relative z-10 order-1 lg:order-2" data-aos="fade-left">
            <span className="text-lime-400 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-sm block">Mobile Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">Manage Your Credit <br className="hidden sm:block" /> From Anywhere</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your financial control center in your pocket. Track repayments, monitor your health, and get instant approvals.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 px-4 sm:px-0">
               <button className="bg-black border border-white/10 flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/5 hover:border-lime-400/50 transition-all group w-full sm:w-auto active:scale-95">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-lime-400 text-lime-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-60 uppercase font-bold tracking-tighter">Get it on</div>
                    <div className="font-black text-base sm:text-lg">Google Play</div>
                  </div>
               </button>
               <button className="bg-black border border-white/10 flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/5 hover:border-lime-400/50 transition-all group w-full sm:w-auto active:scale-95">
                  <Apple className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-60 uppercase font-bold tracking-tighter">Download on</div>
                    <div className="font-black text-base sm:text-lg">App Store</div>
                  </div>
               </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20" data-aos="fade-up">
          <div className="col-span-2 lg:col-span-2 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                <Landmark className="text-[#051911] w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">CrediBull</span>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed text-sm">
              Modern lending for modern needs. Join 50,000+ borrowers today.
            </p>
          </div>
          <div className="text-left col-span-1">
            <h4 className="font-bold mb-6 text-white uppercase text-[10px] tracking-widest">Loans</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Personal</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Mortgages</a></li>
            </ul>
          </div>
          <div className="text-left col-span-1">
            <h4 className="font-bold mb-6 text-white uppercase text-[10px] tracking-widest">Resources</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-lime-400 transition-colors">EMI Tool</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Score Tips</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Help</a></li>
            </ul>
          </div>
          <div className="text-left col-span-2 sm:col-span-1">
            <h4 className="font-bold mb-6 text-white uppercase text-[10px] tracking-widest">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-gray-500 text-center">
          <p>© 2025 CrediBull Inc. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
