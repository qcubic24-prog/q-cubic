import AboutDiagram from './AboutDiagram';

export default function AboutUs() {
  const capabilities = [
    {
      title: 'TECHNOLOGY-DRIVEN',
      desc: 'Technology built with modern tools and practical engineering.',
    },
    {
      title: 'BUSINESS-FOCUSED',
      desc: 'Solutions designed around real business requirements.',
    },
    {
      title: 'HUMAN-DRIVEN',
      desc: 'Experience, creativity and judgment remain at the centre of every project.',
    },
    {
      title: 'END-TO-END',
      desc: 'From idea and design to development and deployment.',
    },
  ];

  return (
    <section
      id="about"
      className="relative z-10 w-full bg-white text-black py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Heading & Description */}
          <div className="lg:col-span-7">
            <div
              id="about-label"
              className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF5500] uppercase mb-4"
            >
              ABOUT Q-CUBIC
            </div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-900 leading-[1.18] mb-6"
            >
              Technology built around your business.
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed mb-5 font-normal">
              Q-CUBIC TECH is a technology and digital solutions company focused on building practical digital products and intelligent business solutions.
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              We combine modern technology, thoughtful design and human expertise to help businesses build, improve and scale.
            </p>
          </div>

          {/* Right: Q-CUBIC Platform Visual (Build, Scale, Connect, Automate) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AboutDiagram />
          </div>
        </div>

        {/* 4 Small Capability Statements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-14 mt-16 border-t border-neutral-200">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="p-5 sm:p-6 rounded-[14px] bg-neutral-50 border border-neutral-200/80 hover:border-[#FF5500]/50 transition-colors duration-200"
            >
              <div className="text-xs font-bold tracking-wider text-[#FF5500] uppercase mb-2">
                {item.title}
              </div>
              <p className="text-sm sm:text-[15px] text-neutral-700 leading-snug font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Human + Technology Positioning */}
        <div className="mt-12 p-8 sm:p-10 rounded-[16px] bg-neutral-50/90 border border-neutral-200">
          <div className="text-xs font-semibold tracking-widest text-[#FF5500] uppercase mb-3">
            HUMAN + TECHNOLOGY
          </div>
          <h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight mb-3">
            Technology gives us speed.<br className="hidden sm:inline" /> Experience gives it direction.
          </h3>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl font-normal">
            We use modern tools and technologies to work efficiently, while our team remains responsible for strategy, creativity, quality and final delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
