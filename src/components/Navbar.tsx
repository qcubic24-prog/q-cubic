import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import QCubicLogo from './QCubicLogo';

const NAV_ITEMS = [
  { label: 'Work', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'Hire', href: '#contact' },
  { label: 'Audit', href: '#contact' },
  { label: 'Team', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection =
      document.getElementById('contact') || document.getElementById('get-in-touch');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 500);
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        style={{ backgroundColor: '#fcfcff' }}
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl lg:max-w-6xl rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
          scrolled ? 'backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.12)]' : 'backdrop-blur-xl'
        }`}
      >
        {/* Logo (left) */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center no-underline pl-1 sm:pl-2"
          aria-label="Q-CUBIC Home"
        >
          <QCubicLogo
            id="nav-logo-image"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav Links (center, hidden on mobile/tablet) */}
        <nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Desktop navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] sm:text-[14px] font-medium text-neutral-700 hover:text-black transition-colors duration-150 tracking-normal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="desktop-cta"
            href="#contact"
            onClick={handleGetInTouch}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-black text-white hover:bg-neutral-800 font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95 group cursor-pointer"
          >
            <span>Book a call</span>
            <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </a>

          {/* Mobile Hamburger (visible on screens below lg) */}
          <button
            id="mobile-hamburger-btn"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="lg:hidden flex flex-col justify-center items-center gap-[4.5px] p-2 rounded-full text-neutral-800 hover:bg-black/5 transition-colors z-40 cursor-pointer"
          >
            <span
              className={`w-5 h-[2px] bg-neutral-900 transition-all duration-300 transform origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-neutral-900 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-[2px] bg-neutral-900 transition-all duration-300 transform origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu (matching light pill design) */}
      <div
        id="mobile-nav-overlay"
        style={{ backgroundColor: '#fcfcff' }}
        className={`fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-35 w-[94%] max-w-sm backdrop-blur-2xl border border-neutral-200/80 rounded-3xl p-6 shadow-2xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col gap-4 w-full">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-base font-medium text-neutral-700 hover:text-black py-1.5 transition-colors border-b border-neutral-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              closeMenu();
              handleGetInTouch(e);
            }}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-black text-white font-semibold text-sm py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </>
  );
}
