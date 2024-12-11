import React, { useState } from 'react';
import { DollarSign, Clock, Bell, CalendarCheck } from 'lucide-react';
import { ContactForm } from './ContactForm';

const steps = [
  {
    icon: DollarSign,
    title: 'Pay Service Fee',
    description: 'Make payment for our visa slot booking service. We charge only after successful booking.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'We Monitor 24/7',
    description: 'Our expert team monitors visa appointment slots round the clock to find earliest dates.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: CalendarCheck,
    title: 'Instant Booking',
    description: 'As soon as a slot is available, we immediately book it for you without any delay.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Bell,
    title: 'Get Notified',
    description: 'Receive your confirmed visa appointment details instantly via WhatsApp/Email.',
    color: 'from-pink-500 to-pink-600'
  }
];

export function ProcessSteps() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="py-10 md:py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff11_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            We Book Your Visa Slot
          </h2>
          <p className="text-sm md:text-lg text-gray-300">
            Stop refreshing visa websites. We'll monitor and book for you 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line - Only visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-800 to-gray-700">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gray-700" />
                </div>
              )}

              {/* Step Content */}
              <div className="relative flex flex-col items-center">
                {/* Icon Container */}
                <div className={`w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.color} p-0.5 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="w-full h-full bg-black rounded-2xl md:rounded-3xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-xs sm:text-sm md:text-base">
                  {index + 1}
                </div>

                {/* Text Content */}
                <div className="mt-4 md:mt-6 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 md:mt-16 text-center">
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className="px-5 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl text-sm md:text-base transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
          >
            Book Our Service
          </button>
        </div>

        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      </div>
    </div>
  );
}