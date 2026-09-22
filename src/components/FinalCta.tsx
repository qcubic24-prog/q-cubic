import React from 'react';

export default function FinalCta() {
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
      id="final-cta-section"
      className="relative z-10 w-full py-20 sm:py-28 px-5 sm:px-8 md:px-12 bg-white text-neutral-900 border-t border-neutral-200"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Primary Heading */}
        <h2
          id="final-cta-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-tight text-neutral-900 leading-tight mb-8 sm:mb-10 uppercase"
        >
          Let's build something together.
        </h2>

        {/* Navigation & CTA Button Group */}
        <div id="final-cta-buttons" className="flex flex-col items-center gap-3 sm:gap-4 w-full">
          {/* ROW 1: About Q-CUBIC, Our Services, Start a Project */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            <a
              id="final-cta-about"
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="inline-flex items-center justify-center bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full text-sm sm:text-[15px] font-medium px-5 sm:px-6 py-2.5 sm:py-3 cursor-pointer hover:bg-neutral-900 hover:text-white transition-all duration-200"
            >
              About Q-CUBIC
            </a>

            <a
              id="final-cta-services"
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="inline-flex items-center justify-center bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full text-sm sm:text-[15px] font-medium px-5 sm:px-6 py-2.5 sm:py-3 cursor-pointer hover:bg-neutral-900 hover:text-white transition-all duration-200"
            >
              Our Services
            </a>

            {/* Primary CTA: Start a Project with Q-CUBIC Orange */}
            <a
              id="final-cta-project"
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center justify-center bg-[#FF5500] hover:bg-[#E04700] text-white border border-[#FF5500] rounded-full text-sm sm:text-[15px] font-semibold px-6 sm:px-7 py-2.5 sm:py-3 cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
            >
              Start a Project
            </a>
          </div>

          {/* ROW 2: Reach us email */}
          <div className="pt-1">
            <a
              id="final-cta-email"
              href="mailto:qcubic24@gmail.com"
              className="inline-flex items-center justify-center bg-transparent text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-400 rounded-full text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 cursor-pointer transition-colors duration-200"
            >
              Reach us: <span className="underline underline-offset-2 ml-1 text-[#FF5500] hover:text-[#E04700]">qcubic24@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
