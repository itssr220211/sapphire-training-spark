import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img alt="Sapphire Training Solutions" src="/lovable-uploads/dc785b32-7742-48f3-a331-ceb7e7f5a270.png" className="h-20 w-20" />
            <div className="hidden sm:block">
              <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-sapphire' : 'text-white'}`}>
                SAPPHIRE
              </span>
              <div className={`text-xs tracking-wider transition-colors ${isScrolled ? 'text-gray-600' : 'text-blue-200'}`}>
                TRAINING SOLUTIONS
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Solutions', 'Industries', 'Testimonials', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${isScrolled ? 'text-gray-700 hover:text-sapphire' : 'text-white/80 hover:text-white'}`}>
                {item}
              </button>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection('contact')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${isScrolled ? 'bg-sapphire hover:bg-sapphire/90 text-white' : 'bg-white text-sapphire hover:bg-blue-50'}`}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-gray-200/20 bg-white/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Solutions', 'Industries', 'Testimonials', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-left text-gray-700 hover:text-sapphire transition-colors py-2">
                  {item}
                </button>)}
              <Button onClick={() => scrollToSection('contact')} className="bg-sapphire hover:bg-sapphire/90 text-white mt-4 w-full rounded-full">
                Get Started
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default ModernHeader;