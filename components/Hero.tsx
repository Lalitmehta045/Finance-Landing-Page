
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { DashboardWidget1, DashboardWidget2, DashboardWidget3, DashboardWidget4 } from './DashboardWidgets';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 md:pb-20 overflow-hidden scroll-mt-20">
      {/* Background Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay grayscale transition-transform duration-75 ease-out"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#0f3d2a_0%,transparent_60%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-lime-400 mb-6 sm:mb-8" data-aos="fade-down">
          <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          Loans Approved in Under 24 Hours
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight" data-aos="fade-up">
          Fund Your Future <br />
          <span className="text-white/80">with CrediBull</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed px-2" data-aos="fade-up" data-aos-delay="100">
          Whether it's a new home, business expansion, or personal growth, get the capital you need with flexible terms and industry-leading interest rates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 px-4" data-aos="fade-up" data-aos-delay="200">
          <button className="bg-lime-400 text-black px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:bg-lime-300 transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(163,230,53,0.3)] text-base sm:text-lg active:scale-95">
            Apply for a Loan
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto justify-center backdrop-blur-sm text-base active:scale-95">
            Check Your Rate
          </button>
        </div>

        {/* Responsive Dashboard Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end mt-12 max-w-6xl mx-auto px-2">
          {/* Item 1 - Mobile: Row 1, Desktop: Col 1 */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="400">
            <DashboardWidget1 />
          </div>
          {/* Item 2 - Mobile: Row 2 (Full Width), Desktop: Cols 2-3 */}
          <div className="sm:col-span-2 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="300">
            <DashboardWidget2 />
          </div>
          {/* Item 3 - Mobile: Row 3, Desktop: Col 4 */}
          <div className="order-3 lg:order-3 flex flex-col gap-6">
            <div data-aos="fade-left" data-aos-delay="400">
              <DashboardWidget3 />
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <DashboardWidget4 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
