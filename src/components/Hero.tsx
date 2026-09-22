import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import QCubicLogo from './QCubicLogo';

export default function Hero() {
  const [showPills, setShowPills] = useState(false);

  const typewriterText =
    'Glad you stopped in. Good taste tends to find us. Now, what are we building?';
  const { displayed, done } = useTypewriter(typewriterText, 38, 600);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative z-[1] w-full h-screen flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 lg:justify-center lg:pb-0 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Top-Left Company Logo */}
      <div className="absolute top-6 sm:top-8 md:top-10 left-5 sm:left-8 md:left-10 z-20">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Q-CUBIC Home"
          className="inline-block no-underline select-none"
        >
          <QCubicLogo
            id="hero-qcubic-logo"
            className="h-11 sm:h-13 md:h-15 w-auto object-contain"
          />
        </a>
      </div>

      <div className="max-w-xl relative z-10">
        {/* 1. Typewriter text */}
        <p
          id="aria-typewriter-text"
          className="text-black mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(20px, 4vw, 28px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 2. Action pill buttons - Q-CUBIC Navigation & CTA */}
        <div
          id="hero-action-pills"
          className="flex flex-col items-start gap-2.5"
          style={{
            opacity: showPills ? 1 : 0,
            transform: showPills ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* ROW 1: About Q-CUBIC, Our Services, Start a Project */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <a
              id="hero-cta-about"
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.35em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
            >
              About Q-CUBIC
            </a>

            <a
              id="hero-cta-services"
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] font-medium px-4 sm:px-5 py-[0.35em] whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
            >
              Our Services
            </a>

            <a
              id="hero-cta-project"
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center justify-center bg-[#FF5500] hover:bg-[#E04700] text-white border border-[#FF5500] rounded-full text-[13px] sm:text-[15px] font-semibold px-4 sm:px-5 py-[0.35em] whitespace-nowrap cursor-pointer transition-colors duration-200 shadow-sm"
            >
              Start a Project
            </a>
          </div>

          {/* ROW 2: Reach us */}
          <div>
            <a
              id="hero-cta-email"
              href="mailto:qcubic24@gmail.com"
              className="inline-flex items-center justify-center text-white bg-transparent border border-white/80 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] whitespace-nowrap cursor-pointer hover:bg-white hover:text-black transition-colors duration-200 backdrop-blur-xs"
            >
              Reach us: qcubic24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
