import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero" className="flex min-h-screen flex-col items-center justify-center max-w-7xl mx-auto px-6 relative">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 particles-container"></div>

      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-8xl md:text-7xl sm:text-5xl font-bold font-display mb-6 animate-fadeInUp">
          <span className="text-white/90">Hi, I'm</span>{' '}
          <span className="hero-name-gradient">Aryan</span>
        </h1>
        
        <div className="animate-fadeInUp [animation-delay:0.2s]">
          <p className="text-5xl md:text-4xl sm:text-3xl font-semibold font-body text-white/80 mb-8">
            Digital Experience Architect
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-xl font-medium font-body text-white/70 leading-relaxed">
              Merging <span className="text-pink-300">aesthetic innovation</span> with{' '}
              <span className="text-purple-300">technical precision</span> to create web experiences 
              that captivate and convert. Specializing in modern full-stack solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12 animate-fadeInUp [animation-delay:0.4s]">
          <button className="hero-cta group">
            <a href="#contact" className="flex items-center gap-3">
              <span>Hit me Up</span>
              <div className="cta-arrow">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
              </div>
            </a>
          </button>
          
          <button className="hero-secondary-cta group">
            <a href="#projects" className="flex items-center gap-3">
              <span>Explore Work</span>
              <div className="grid-lines">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="grid-line"></div>
                ))}
              </div>
            </a>
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;