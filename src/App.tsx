/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  const getRouteFromLocation = (): 'home' | 'terms' | 'privacy' => {
    const path = window.location.pathname.replace(/\/$/, '');
    const hash = window.location.hash;
    if (path === '/terms-and-conditions' || hash === '#/terms-and-conditions') {
      return 'terms';
    }
    if (path === '/privacy-policy' || hash === '#/privacy-policy') {
      return 'privacy';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<'home' | 'terms' | 'privacy'>(getRouteFromLocation);

  const navigate = useCallback((target: string) => {
    let newRoute: 'home' | 'terms' | 'privacy' = 'home';
    if (target.startsWith('/terms-and-conditions')) {
      newRoute = 'terms';
    } else if (target.startsWith('/privacy-policy')) {
      newRoute = 'privacy';
    } else {
      newRoute = 'home';
    }

    window.history.pushState(null, '', target);
    setCurrentRoute(newRoute);

    if (newRoute === 'home') {
      document.title = 'Q-CUBIC — AI Technology & Business Solutions';
      const hashIndex = target.indexOf('#');
      if (hashIndex !== -1) {
        const targetId = target.slice(hashIndex + 1);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getRouteFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentRoute !== 'home') return;

    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash === '#contact' || hash === '#get-in-touch') {
        const el = document.getElementById('contact');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
        }
      } else if (hash === '#about') {
        const el = document.getElementById('about');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
        }
      } else if (hash === '#services') {
        const el = document.getElementById('services');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
        }
      }
    };
    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, [currentRoute]);

  if (currentRoute === 'terms') {
    return <TermsAndConditions onNavigate={navigate} />;
  }

  if (currentRoute === 'privacy') {
    return <PrivacyPolicy onNavigate={navigate} />;
  }

  return (
    <div
      id="mainframe-app"
      className="relative w-full min-h-screen overflow-x-hidden bg-neutral-100"
    >
      <BackgroundVideo />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <ContactUs />
        <FinalCta />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

