
import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StockTicker from './components/StockTicker';
import Services from './components/Services';
import LoanCalculator from './components/LoanCalculator';
import WhyUs from './components/WhyUs';
import Features from './components/Features';
import Reasons from './components/Reasons';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-lime-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StockTicker />
        <Services />
        <LoanCalculator />
        <WhyUs />
        <Features />
        <Reasons />
        <FAQ />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
