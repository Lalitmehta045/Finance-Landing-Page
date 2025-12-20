
import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, CheckCircle2, IndianRupee, Info, User, Briefcase, Home, Car } from 'lucide-react';

const loanOptions = [
  { title: 'Personal Loan', rate: '10.5%', icon: User },
  { title: 'Business Loan', rate: '12.0%', icon: Briefcase },
  { title: 'Home Loan', rate: '8.5%', icon: Home },
  { title: 'Auto Loan', rate: '9.0%', icon: Car },
];

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [months, setMonths] = useState(36);

  const [displayMonthly, setDisplayMonthly] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);

  const calculatedValues = useMemo(() => {
    const r = rate / 100 / 12;
    const n = months;
    let payment = 0;
    if (r === 0) {
      payment = amount / n;
    } else {
      payment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    const total = payment * n;
    return {
      monthly: parseFloat(payment.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
    };
  }, [amount, rate, months]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayMonthly(calculatedValues.monthly);
      setDisplayTotal(calculatedValues.total);
    }, 50);
    return () => clearTimeout(timer);
  }, [calculatedValues]);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-black/40 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 text-left w-full" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-400/10 text-lime-400 text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 border border-lime-400/20">
              <Calculator className="w-4 h-4" /> Personalized EMI Quotes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 leading-[1.1]">
              Calculate Your <br />
              <span className="text-lime-400">Financial Freedom</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Use our interactive tool to visualize your repayment journey. Slide to adjust and see instant changes.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[
                { title: 'Transparent APR', desc: 'No hidden compounding' },
                { title: 'Instant Approval', desc: 'Digital verification' },
                { title: 'Flexible Tenure', desc: 'Up to 60 months' },
                { title: 'Easy Top-ups', desc: 'Available after 6 EMIs' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-lime-400 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-gray-500 text-[10px] sm:text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl" data-aos="fade-left">
            <div className="bg-gradient-to-br from-[#0a251c] to-[#051911] p-5 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/5 rounded-full blur-[80px]" />
              
              <div className="space-y-10 sm:space-y-12 relative z-10">
                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                      Amount <Info className="w-3 h-3 opacity-50 cursor-help hidden sm:block" />
                    </label>
                    <span className="text-white font-mono text-xl sm:text-2xl font-bold flex items-baseline gap-1">
                      <span className="text-sm text-lime-400 font-sans">₹</span>
                      {amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <input 
                      type="range" min="10000" max="5000000" step="10000" value={amount} 
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Interest Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Interest Rate</label>
                    <span className="text-white font-mono text-xl sm:text-2xl font-bold">{rate}<span className="text-sm text-lime-400 ml-1 font-sans">%</span></span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <input 
                      type="range" min="8" max="24" step="0.1" value={rate} 
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">Tenure</label>
                    <span className="text-white font-mono text-xl sm:text-2xl font-bold">{months}<span className="text-sm text-lime-400 ml-1 font-sans">Mo</span></span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <input 
                      type="range" min="6" max="60" step="6" value={months} 
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Result Area */}
              <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 relative z-10">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1 sm:mb-2 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                    Estimated EMI
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white flex items-baseline gap-1">
                    <span className="text-xl text-lime-400">₹</span>
                    {displayMonthly.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1 sm:mb-2">Total Interest</div>
                  <div className="text-xl sm:text-2xl font-black text-white/50 flex items-baseline gap-1">
                    <span className="text-lg">₹</span>
                    {(displayTotal - amount).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 sm:mt-12 bg-lime-400 text-black py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-lime-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_-10px_rgba(163,230,53,0.3)] flex items-center justify-center gap-2 relative z-10">
                Apply Now <IndianRupee className="w-4 h-4" />
              </button>

              {/* Loan Options Grid - Optimized for Mobile */}
              <div className="mt-10 pt-10 border-t border-white/5 relative z-10">
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-6 text-center">Available Loan Rates</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {loanOptions.map((opt, i) => (
                    <div 
                      key={i} 
                      className="bg-white/5 p-4 rounded-xl sm:rounded-2xl border border-white/5 hover:border-lime-400/30 transition-all hover:bg-lime-400/[0.02] group/opt cursor-pointer flex flex-row sm:flex-col justify-between items-center sm:items-start"
                      onClick={() => {
                        setRate(parseFloat(opt.rate));
                        window.scrollTo({ top: document.getElementById('calculator')?.offsetTop || 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="flex items-center gap-3 sm:mb-2">
                        <div className="w-8 h-8 rounded-lg bg-lime-400/10 flex items-center justify-center group-hover/opt:bg-lime-400/20 transition-colors">
                          <opt.icon className="w-4 h-4 text-lime-400" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-gray-300 group-hover/opt:text-white transition-colors uppercase tracking-wider">{opt.title}</span>
                      </div>
                      <div className="flex items-baseline gap-1 text-right sm:text-left">
                        <span className="text-base sm:text-lg font-black text-white">{opt.rate}</span>
                        <span className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Starting</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center mt-8 text-[9px] sm:text-[10px] text-gray-600 font-medium">
                *T&C Apply. Approval is subject to credit check.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #a3e635;
          cursor: pointer;
          border: 3px solid #051911;
          box-shadow: 0 0 10px rgba(163, 230, 53, 0.4);
        }
        @media (min-width: 640px) {
          input[type=range]::-webkit-slider-thumb {
            height: 24px;
            width: 24px;
            border-width: 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default LoanCalculator;
