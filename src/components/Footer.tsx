import React from 'react';
import { Linkedin, Instagram, Facebook, Music, Mail, ArrowUpRight } from 'lucide-react';
import QCubicLogo from './QCubicLogo';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleInternalScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    // If currently on a different page (e.g. /terms-and-conditions), navigate back to home with hash
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      if (onNavigate) {
        onNavigate(`/#${sectionId}`);
      } else {
        window.history.pushState(null, '', `/#${sectionId}`);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    // On home page, smooth scroll directly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handlePageNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer
      id="main-footer"
      className="relative z-10 w-full bg-[#101722] text-[#A7AFBB] pt-16 pb-12 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[rgba(255,255,255,0.15)]"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* 4-Column Layout (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* COLUMN 1 — Q-CUBIC BRAND (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Actual Q-CUBIC logo */}
            <a
              href="/"
              onClick={(e) => handlePageNavigation(e, '/')}
              aria-label="Q-CUBIC Home"
              className="inline-block mb-5 no-underline"
            >
              <QCubicLogo
                id="footer-qcubic-logo"
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
                alt="Q-CUBIC"
              />
            </a>

            <p className="text-white text-[15px] font-medium leading-snug">
              AI Technology &amp; Business Solutions
            </p>
            <p className="text-[#A7AFBB] text-xs sm:text-sm mt-1 mb-6 font-normal tracking-wide">
              Build. Automate. Scale.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/qcubic/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#FF7A00] text-[#A7AFBB] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(255,255,255,0.1)]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/qcubic24?stkn=a296ZXg1NGV0b2Jx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#FF7A00] text-[#A7AFBB] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(255,255,255,0.1)]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61593619222372&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#FF7A00] text-[#A7AFBB] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(255,255,255,0.1)]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@qcubic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#FF7A00] text-[#A7AFBB] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(255,255,255,0.1)]"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="mailto:qcubic24@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#FF7A00] text-[#A7AFBB] hover:text-white flex items-center justify-center transition-all duration-200 border border-[rgba(255,255,255,0.1)]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 — OUR SERVICES (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              OUR SERVICES
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Application Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  SaaS Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Automation &amp; Integrations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Intelligent Assistants
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Voice Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleInternalScroll(e, 'about')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  About Q-CUBIC
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleInternalScroll(e, 'services')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleInternalScroll(e, 'contact')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — LEGAL (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-5">
              LEGAL
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => handlePageNavigation(e, '/terms-and-conditions')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Terms &amp; Conditions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handlePageNavigation(e, '/privacy-policy')}
                  className="text-[#A7AFBB] hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER CTA (Above bottom divider) */}
        <div className="py-6 px-6 sm:px-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-white text-base sm:text-lg font-medium tracking-tight">
              Have an idea? Let&apos;s build it.
            </p>
            <p className="text-xs sm:text-sm text-[#A7AFBB] font-normal">
              Get in touch to discuss your product, project, or workflow.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleInternalScroll(e, 'contact')}
            className="inline-flex items-center justify-center bg-[#FF7A00] hover:bg-[#E06C00] text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm shrink-0"
          >
            Start a Project
          </a>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="w-full h-px bg-[rgba(255,255,255,0.15)] mb-8" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7AFBB]">
          <p>© 2026 Q-CUBIC. All rights reserved.</p>

          <div className="flex items-center gap-5 sm:gap-6 text-xs">
            <a
              href="/terms-and-conditions"
              onClick={(e) => handlePageNavigation(e, '/terms-and-conditions')}
              className="text-[#A7AFBB] hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="w-1 h-1 rounded-full bg-[#A7AFBB]/40" />
            <a
              href="/privacy-policy"
              onClick={(e) => handlePageNavigation(e, '/privacy-policy')}
              className="text-[#A7AFBB] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
