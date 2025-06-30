
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  
  const animatedTexts = [
    "Empowering Intelligence",
    "Transforming Teams", 
    "Driving Excellence"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-sapphire to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sapphire/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Geometric Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-300">
                <div className="w-12 h-px bg-blue-300"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Sapphire Training Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">
                  {animatedTexts[currentText].split(' ')[0]}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  {animatedTexts[currentText].split(' ')[1]}
                </span>
                <span className="block text-white">at Work</span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                Transform your workforce with premium training solutions designed for enterprise excellence. 
                From soft skills mastery to advanced data analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                onClick={() => scrollToSection('solutions')}
                size="lg"
                className="bg-white text-sapphire hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all hover:shadow-2xl hover:scale-105 group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('testimonials')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sapphire px-8 py-4 text-lg font-semibold rounded-full transition-all group"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1,200+</div>
                <div className="text-blue-300 text-sm">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-300 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-blue-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/cb6c7757-2ba6-4d75-9379-00ed412e6065.png" 
                alt="Sapphire Training Solutions" 
                className="h-64 w-auto mx-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-blue-300/20 rounded-full blur-sm animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-16 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
