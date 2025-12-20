
import React, { useState, useRef, useEffect } from 'react';
import { Landmark, Globe, ChevronDown, Menu, X } from 'lucide-react';

const languages = [
  { code: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'FR', name: 'Français', flag: '🇫🇷' },
];

const Navbar: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#051911]/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer relative z-[110]" onClick={(e) => scrollToSection(e as any, 'home')}>
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
              <Landmark className="text-[#051911] w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">CrediBull</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-lime-400 transition-colors">Apply</a>
            <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="hover:text-lime-400 transition-colors">Calculator</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-lime-400 transition-colors">Loan Types</a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-lime-400 transition-colors">Why Us</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Dropdown - Desktop */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium"
              >
                <Globe className="w-4 h-4 text-lime-400" />
                <span>{selectedLang.code}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0a251c] border border-white/10 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden backdrop-blur-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-lime-400 hover:text-black transition-all text-sm font-medium text-left"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button - Desktop */}
            <button className="hidden sm:block bg-lime-400 text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] active:scale-95">
              Check Eligibility
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors relative z-[110]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-lime-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[100] bg-[#051911] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-3xl font-bold hover:text-lime-400 transition-colors">Apply</a>
          <a href="#calculator" onClick={(e) => scrollToSection(e, 'calculator')} className="text-3xl font-bold hover:text-lime-400 transition-colors">Calculator</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-3xl font-bold hover:text-lime-400 transition-colors">Loan Types</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="text-3xl font-bold hover:text-lime-400 transition-colors">Why CrediBull</a>
          
          <div className="pt-8 border-t border-white/5 w-full max-w-xs flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {languages.map(l => (
                <button 
                  key={l.code} 
                  onClick={() => setSelectedLang(l)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${selectedLang.code === l.code ? 'bg-lime-400 border-lime-400 text-black' : 'border-white/10'}`}
                >
                  {l.flag}
                </button>
              ))}
            </div>
            <button className="w-full bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(163,230,53,0.3)]">
              Check Eligibility
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
