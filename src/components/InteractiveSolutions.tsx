
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, BarChart, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollRevealSection from './ScrollRevealSection';

const InteractiveSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: Users,
      title: 'Soft Skills Training',
      description: 'Leadership development, communication mastery, and team collaboration skills that drive organizational success.',
      features: ['Leadership Excellence', 'Communication Skills', 'Team Building', 'Emotional Intelligence'],
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: FileText,
      title: 'Microsoft Excel Mastery',
      description: 'From basic functions to advanced analytics, transform your team into Excel power users.',
      features: ['Advanced Formulas', 'Data Visualization', 'Pivot Tables', 'Macro Automation'],
      gradient: 'from-green-500 to-green-600',
      hoverGradient: 'from-green-600 to-green-700',
    },
    {
      icon: BarChart,
      title: 'Data Science for Corporates',
      description: 'Unlock the power of data-driven decision making with practical analytics training.',
      features: ['Data Analysis', 'Statistical Modeling', 'Business Intelligence', 'Predictive Analytics'],
      gradient: 'from-purple-500 to-purple-600',
      hoverGradient: 'from-purple-600 to-purple-700',
    },
    {
      icon: Briefcase,
      title: 'Customized Corporate Programs',
      description: 'Bespoke training solutions designed specifically for your organization\'s unique challenges.',
      features: ['Needs Assessment', 'Custom Curriculum', 'On-site Training', 'Progress Tracking'],
      gradient: 'from-orange-500 to-orange-600',
      hoverGradient: 'from-orange-600 to-orange-700',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 text-sapphire mb-6">
              <div className="w-12 h-px bg-sapphire"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Our Solutions</span>
              <div className="w-12 h-px bg-sapphire"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire to-blue-600">Training</span> Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elevate your workforce with world-class training experiences designed for measurable business impact
            </p>
          </div>
        </ScrollRevealSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <ScrollRevealSection key={index} delay={index * 100}>
              <Card 
                className="group border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${hoveredCard === index ? solution.hoverGradient : solution.gradient} transition-all duration-300`}></div>
                
                <CardHeader className="pb-4 pt-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${solution.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-sapphire transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-200 text-gray-700 hover:border-sapphire hover:bg-sapphire hover:text-white transition-all duration-300 group-hover:scale-105 rounded-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollRevealSection>
          ))}
        </div>

        <ScrollRevealSection delay={400}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-sapphire to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                  Every organization is unique. Let's create a training program that fits your specific needs and goals.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-sapphire hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Discuss Custom Training
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
};

export default InteractiveSolutions;
