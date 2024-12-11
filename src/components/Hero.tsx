import React, { useState } from 'react';
import { Plane, ArrowRight, Globe } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Hero() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
      </div>

      {/* Floating Globes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${(i * 25) % 100}%`,
              top: `${((i * 30) + Math.random() * 20)}%`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.2
            }}
          >
            <Globe className="text-yellow-400 w-16 h-16 md:w-24 md:h-24" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-center max-w-4xl pt-16 md:pt-0">
          <div className="mb-4 md:mb-8 relative">
            <Plane className="w-10 h-10 md:w-20 md:h-20 mx-auto text-yellow-400 animate-glow transform -rotate-12" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">
            Your Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              Begins Here
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 px-4 md:px-0">
            Experience the future of visa bookings. Fast, seamless, and stress-free.
          </p>
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="px-5 md:px-8 py-2.5 md:py-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] flex items-center justify-center mx-auto"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
}