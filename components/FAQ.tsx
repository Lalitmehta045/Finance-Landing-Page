
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How fast can I get my loan approved?",
    a: "Our automated credit analysis system typically provides a decision within minutes. Once approved and the digital agreement is signed, funds are usually disbursed to your bank account within 2 to 24 hours."
  },
  {
    q: "What documents are required for the application?",
    a: "We operate a 100% paperless process. You'll only need your digital ID (like Aadhaar/PAN), proof of address, and your last 3 months' bank statements, all of which can be securely uploaded or verified via Net Banking."
  },
  {
    q: "Are there any hidden charges or processing fees?",
    a: "At CrediBull, transparency is our priority. We have zero hidden fees. All interest rates and one-time processing charges (if applicable) are clearly disclosed in your loan agreement before you sign."
  },
  {
    q: "Can I repay my loan early without penalties?",
    a: "Yes! We encourage financial freedom. You can make part-payments or fully foreclose your loan at any time after the first 3 EMIs without any additional foreclosure charges."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 block">Common Questions</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked <br className="hidden sm:block" /> Questions</h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left group"
              >
                <span className={`text-base sm:text-lg font-bold transition-colors pr-8 ${openIndex === i ? 'text-lime-400' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-lime-400" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                  )}
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-6 sm:px-6 sm:pb-8 text-gray-400 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
