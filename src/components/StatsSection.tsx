import React from 'react';
import { Users, Clock, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '5K+',
      label: 'Dreams Fulfilled',
      description: 'Travelers on their journey',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Always Available',
      description: 'Support across time zones',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Success Rate',
      description: 'Visa slots secured',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="py-8 md:py-20 bg-[#0B1121]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-[#151b2d] rounded-xl p-4 md:p-8 
                transform transition-all duration-300 hover:scale-105
                hover:shadow-lg hover:shadow-yellow-400/10"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 mb-3 md:mb-5" />
                
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 md:mb-3">
                  {stat.value}
                </div>
                
                <div className="text-base md:text-xl font-semibold text-yellow-400 mb-1 md:mb-3">
                  {stat.label}
                </div>
                
                <div className="text-xs md:text-base text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}