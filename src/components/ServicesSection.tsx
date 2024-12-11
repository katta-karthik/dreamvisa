import React from 'react';
import { FileCheck, Calendar, Shield, Globe } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: FileCheck,
      title: 'Document Assistance',
      description: 'Expert guidance on visa documentation and requirements for a hassle-free application process.'
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Secure your visa appointment slots with our efficient booking system.'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance solutions for your peace of mind.'
    },
    {
      icon: Globe,
      title: 'Visa Consultation',
      description: 'Professional consultation for various types of visas and immigration services.'
    }
  ];

  return (
    <div className="py-8 md:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Comprehensive visa solutions for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0B1121] rounded-xl p-3 md:p-6 
                transform transition-all duration-300 hover:scale-105
                hover:shadow-lg hover:shadow-yellow-400/10"
            >
              <service.icon className="w-6 h-6 md:w-10 md:h-10 text-yellow-400 mb-3 md:mb-4" />
              
              <h3 className="text-base md:text-xl font-semibold text-white mb-1 md:mb-2">
                {service.title}
              </h3>
              
              <p className="text-xs md:text-sm text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 