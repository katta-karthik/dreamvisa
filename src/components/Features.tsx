import React from 'react';
import { Clock, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Time is on Your Side',
    description: 'Secure visa slots in days, not months. Our AI-powered system finds the earliest available appointments.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    icon: Shield,
    title: 'Peace of Mind',
    description: 'Your journey is protected. We handle the complexities while you focus on planning your adventure.',
    image: 'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?auto=format&fit=crop&q=80'
  },
  {
    icon: Sparkles,
    title: 'Dreams to Reality',
    description: "Join thousands who have turned their travel dreams into memories. 99% success rate in slot booking.",
    image: 'https://images.unsplash.com/photo-1536152470836-b943b246224c?auto=format&fit=crop&q=80'
  }
];

export function Features() {
  return (
    <div className="py-12 md:py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Your Passport to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Possibilities
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-400">
            We make visa appointments effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl hover-lift transform transition-all duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${feature.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 transition-opacity group-hover:opacity-75" />
              </div>
              
              <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col items-center text-center z-10">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-yellow-400 mb-4 md:mb-6 animate-glow" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}