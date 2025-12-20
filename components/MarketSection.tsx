
import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const initialAssets = [
  { name: 'Bitcoin', symbol: 'BTC', price: 96420.50, change: 2.45, icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', price: 2540.12, change: -1.24, icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Apple Inc.', symbol: 'AAPL', price: 224.50, change: 0.82, icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Nvidia Corp.', symbol: 'NVDA', price: 135.20, change: 3.12, icon: 'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg' },
  { name: 'Solana', symbol: 'SOL', price: 145.88, change: 4.21, icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
];

const MarketSection: React.FC = () => {
  const [assets, setAssets] = useState(initialAssets);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prev => prev.map(asset => ({
        ...asset,
        price: asset.price * (1 + (Math.random() * 0.002 - 0.001)),
        change: asset.change + (Math.random() * 0.2 - 0.1)
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="market" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-4xl font-bold mb-4">Market Trends</h2>
            <p className="text-gray-400">Stay updated with the latest movements in Global Markets and Crypto.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm outline-none focus:border-lime-400/50 transition-colors"
            />
          </div>
        </div>

        <div className="bg-[#0a251c]/50 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm" data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-sm">
                  <th className="px-8 py-6 font-medium">Asset</th>
                  <th className="px-8 py-6 font-medium">Price</th>
                  <th className="px-8 py-6 font-medium">24h Change</th>
                  <th className="px-8 py-6 font-medium">Trade</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer border-b border-white/5 last:border-0">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-2">
                          <img src={asset.icon} alt={asset.name} className="w-full h-full object-contain brightness-0 invert" />
                        </div>
                        <div>
                          <div className="font-bold">{asset.name}</div>
                          <div className="text-xs text-gray-500">{asset.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-mono font-medium">
                      ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`font-bold ${asset.change >= 0 ? 'text-lime-400' : 'text-red-400'}`}>
                        {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <button className="flex items-center gap-2 bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full text-xs font-bold hover:bg-lime-400 hover:text-black transition-all">
                        Buy Now <ChevronRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
