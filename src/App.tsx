import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessSteps } from './components/ProcessSteps';
import { Features } from './components/Features';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>

        <section id="process">
          <ProcessSteps />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="stats">
          <StatsSection />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;