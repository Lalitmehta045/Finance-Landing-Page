
import React from 'react';
import { User, Briefcase, Home, Car } from 'lucide-react';

const services = [
  {
    title: "Personal Loans",
    icon: <User className="w-8 h-8 text-lime-400" />,
    desc: "Fast, flexible cash for anything you need. Travel, medical, or debt consolidation with zero collateral."
  },
  {
    title: "Business Credit",
    icon: <Briefcase className="w-8 h-8 text-lime-400" />,
    desc: "Empower your venture with working capital, equipment financing, and growth-focused credit lines."
  },
  {
    title: "Mortgages",
    icon: <Home className="w-8 h-8 text-lime-400" />,
    desc: "Fixed and variable rate home loans designed to put you in your dream house faster and with less stress."
  },
  {
    title: "Auto Finance",
    icon: <Car className="w-8 h-8 text-lime-400" />,
    desc: "Drive away today with competitive rates and flexible repayment terms for both new and used vehicles."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a251c]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">The Right Loan <br /> for Every Life Stage</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Transparent lending designed to help you move forward. No hidden fees, just pure support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-[#0a251c] border border-white/5 hover:border-lime-400 hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-lime-400/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
