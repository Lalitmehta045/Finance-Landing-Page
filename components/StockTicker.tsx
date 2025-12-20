
import React from 'react';
import { TrendingDown, Minus } from 'lucide-react';

const rates = [
  { type: 'Personal Loan', rate: '5.49%', change: '-0.2%', down: true },
  { type: 'Home Mortgage', rate: '6.12%', change: 'Steady', down: false },
  { type: 'Business Credit', rate: '4.88%', change: '-0.1%', down: true },
  { type: 'Auto Finance', rate: '3.99%', change: 'New Low', down: true },
  { type: 'Credit Line', rate: '8.20%', change: '-0.5%', down: true },
  { type: 'Student Refi', rate: '4.50%', change: 'Steady', down: false },
];

const StockTicker: React.FC = () => {
  return (
    <div className="bg-white/5 border-y border-white/10 py-3 overflow-hidden whitespace-nowrap relative z-20">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 w-max">
        {[...rates, ...rates].map((rate, i) => (
          <div key={i} className="flex items-center gap-4 px-4">
            <span className="font-bold text-gray-300">{rate.type}</span>
            <span className="font-mono text-sm text-white">Starting {rate.rate}</span>
            <div className={`flex items-center gap-1 text-xs font-bold ${rate.down ? 'text-lime-400' : 'text-gray-400'}`}>
              {rate.down ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
              {rate.change}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default StockTicker;
