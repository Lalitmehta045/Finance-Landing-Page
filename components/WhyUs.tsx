
import React from 'react';
import { Zap, ShieldCheck, DollarSign, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Instant Decision",
    desc: "Our proprietary AI analyzes your eligibility in seconds, giving you an immediate pre-approval status."
  },
  {
    icon: DollarSign,
    title: "Zero Hidden Fees",
    desc: "What you see is what you pay. No application fees, no processing fees, and absolutely no surprises."
  },
  {
    icon: Clock,
    title: "Same Day Funding",
    desc: "Once approved, funds are transferred via instant payment rails, typically arriving in your account in hours."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "Your data is encrypted with bank-level security and we never sell your personal info to third parties."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden bg-[#051911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 block">The CrediBull Advantage</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lending Designed <br className="hidden sm:block" /> For Your Speed</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Traditional banks are slow. We use advanced technology to assess your application in minutes, not weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-20 lg:gap-x-16">
          {reasons.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-lime-400/10 rounded-2xl flex items-center justify-center text-lime-400">
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
