
import React from 'react';
import { CreditCard, TrendingUp, CheckCircle2, History } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, Cell, Rectangle } from 'recharts';

const repaymentData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 12500 },
  { name: 'Mar', value: 11800 },
  { name: 'Apr', value: 12200 },
  { name: 'May', value: 13000 },
  { name: 'Jun', value: 12000 },
  { name: 'Jul', value: 12400 }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-[#051911] px-3 py-1.5 rounded-lg shadow-2xl border border-lime-400/20 animate-in fade-in zoom-in duration-200">
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Installment</p>
        <p className="text-sm font-black">₹{payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export const DashboardWidget1 = () => (
  <div className="bg-[#0a251c] p-6 rounded-3xl border border-white/10 shadow-xl transform -rotate-3 transition-all hover:rotate-0 hover:scale-[1.02] duration-500">
    <div className="text-gray-400 text-xs mb-1 text-left">Your Repayments</div>
    <div className="text-2xl font-bold mb-6 text-left">₹12,000/mo</div>
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={repaymentData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: 'rgba(163, 230, 53, 0.03)' }}
            animationDuration={200}
          />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
            activeBar={<Rectangle fill="#bef264" stroke="#a3e635" strokeWidth={1} />}
          >
            {repaymentData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill="#a3e635" 
                className="transition-all duration-300 cursor-pointer hover:opacity-90"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-4 flex justify-between text-[10px] text-gray-500 font-medium tracking-widest uppercase">
      <span>Jan</span>
      <span className="text-lime-400/50">Trends</span>
      <span>Jul</span>
    </div>
  </div>
);

export const DashboardWidget2 = () => (
  <div className="bg-[#0a251c] p-8 rounded-3xl border border-white/10 shadow-2xl relative group overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-[50px] rounded-full pointer-events-none" />
    <div className="flex justify-between items-center mb-6">
      <div className="text-left">
        <div className="text-gray-400 text-sm">Outstanding Balance</div>
        <div className="text-3xl font-bold group-hover:text-lime-400 transition-colors">₹2,45,000.00</div>
      </div>
      <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-lime-400/10 transition-colors">
        <TrendingUp className="text-lime-400 w-6 h-6" />
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
            <History className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-sm">Next Due Date</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold">Oct 15, 2024</div>
          </div>
        </div>
        <div className="text-lime-400 font-bold text-xs uppercase tracking-widest">Scheduled</div>
      </div>
      <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-lime-400/20 rounded-full flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-lime-400" />
          </div>
          <div className="text-left">
            <div className="font-semibold text-sm">Auto-Pay Active</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold">Ending in **** 9012</div>
          </div>
        </div>
        <CheckCircle2 className="text-lime-400 w-5 h-5" />
      </div>
    </div>
  </div>
);

export const DashboardWidget3 = () => (
  <div className="bg-[#0a251c] p-5 rounded-2xl border border-white/10 shadow-xl transform rotate-2 hover:rotate-0 transition-all hover:scale-105">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 bg-lime-400/20 rounded-full flex items-center justify-center font-bold text-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.2)]">785</div>
      <div className="text-left">
        <div className="text-sm font-bold">Credit Score</div>
        <div className="text-[10px] text-lime-400 font-bold uppercase tracking-wider">Excellent</div>
      </div>
    </div>
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={`h-1 flex-1 rounded-full transition-all duration-700 ${i < 4 ? 'bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.4)]' : 'bg-white/10'}`} 
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  </div>
);

export const DashboardWidget4 = () => (
  <div className="bg-lime-400 p-6 rounded-3xl shadow-xl text-black hover:scale-105 active:scale-95 transition-all cursor-pointer group">
    <div className="text-left">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">Approved Credit</div>
      <div className="text-2xl font-black">₹5,00,000.00</div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-bold">Withdraw Now</span>
        <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-lime-400 transition-all">
          <TrendingUp className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);
