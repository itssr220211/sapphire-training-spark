import React from 'react';
import { Users, Award, Target, Zap, TrendingUp, Globe } from 'lucide-react';
import ScrollRevealSection from './ScrollRevealSection';

const ModernAboutSection = () => {
  const stats = [
    { number: '1,200+', label: 'Professionals Trained', icon: Users },
    { number: '50+', label: 'Enterprise Clients', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Zap },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Track progress with detailed analytics and performance metrics that demonstrate ROI.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized content and culturally relevant training approaches.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with decades of experience in corporate training and development.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 text-sapphire mb-6">
              <div className="w-12 h-px bg-sapphire"></div>
              <span className="text-sm font-medium tracking-wider uppercase">About Us</span>
              <div className="w-12 h-px bg-sapphire"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire via-blue-600 to-sapphire bg-[length:200%_100%] hover:bg-[position:100%_0%] transition-all duration-500 ease-in-out cursor-pointer">Intelligence</span> at Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a premier training consultancy specializing in corporate excellence. 
              Our mission is to unlock human potential through strategic learning initiatives.
            </p>
          </div>
        </ScrollRevealSection>

        {/* Stats Grid */}
        <ScrollRevealSection delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sapphire to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-sapphire/20 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-sapphire mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Features Grid */}
        <ScrollRevealSection delay={400}>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sapphire/10 to-blue-600/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-sapphire" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sapphire transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollRevealSection>

        {/* Enhanced Mission Statement with Animated Border */}
        <ScrollRevealSection delay={600}>
          <div className="relative group">
            {/* Animated border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-blue-400 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-x bg-[length:400%_400%]"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-center text-white overflow-hidden">
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Our Mission
                </h3>
                <p className="text-xl leading-relaxed mb-8 text-blue-100">
                  To bridge the skills gap in modern organizations by delivering world-class training 
                  experiences that combine theoretical excellence with practical application.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                    <h4 className="font-semibold text-white mb-2 text-lg">Expert-Led</h4>
                    <p className="text-blue-100">Industry professionals with proven track records</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                    <h4 className="font-semibold text-white mb-2 text-lg">Customized</h4>
                    <p className="text-blue-100">Tailored programs for your specific business needs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                    <h4 className="font-semibold text-white mb-2 text-lg">Results-Driven</h4>
                    <p className="text-blue-100">Measurable outcomes and continuous improvement</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced background pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default ModernAboutSection;