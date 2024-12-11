import React, { useState, useEffect } from 'react';
import { Plane, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => scrollToSection('home')}
          >
            <Plane className="w-8 h-8 text-yellow-400 animate-glow" />
            <span className="text-xl font-bold text-white">DreamVisa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'Testimonials', id: 'testimonials' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('process')}
              className="ml-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg 
                transform hover:scale-105 hover:bg-yellow-500 
                transition-all duration-200 shadow-lg hover:shadow-yellow-400/20"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm py-4 px-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Services', id: 'services' },
                { name: 'Testimonials', id: 'testimonials' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-yellow-400 py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={() => {
                  scrollToSection('process');
                  setIsMobileMenuOpen(false);
                }}
                className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg 
                  transform hover:scale-105 hover:bg-yellow-500 
                  transition-all duration-200 shadow-lg hover:shadow-yellow-400/20"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}