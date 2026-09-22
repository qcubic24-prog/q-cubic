import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import QCubicLogo from '../components/QCubicLogo';
import Footer from '../components/Footer';

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy — Q-CUBIC';
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
  };

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 flex flex-col justify-between">
      {/* SIMPLE HEADER */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200/80 px-5 sm:px-8 md:px-12 py-4">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={handleBack}
            aria-label="Back to Q-CUBIC Home"
            className="inline-flex items-center no-underline"
          >
            <QCubicLogo
              id="legal-privacy-logo"
              className="h-9 sm:h-10 w-auto object-contain"
              alt="Q-CUBIC"
            />
          </a>

          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-[#FF7A00] transition-colors px-3 py-1.5 rounded-full border border-neutral-300 hover:border-[#FF7A00]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Website</span>
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <article className="max-w-[880px] mx-auto">
          {/* Document Header */}
          <div className="border-b border-neutral-200 pb-8 mb-10">
            <div className="text-xs font-semibold tracking-widest text-[#FF7A00] uppercase mb-2">
              PRIVACY &amp; DATA
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900 mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Last updated: September 22, 2026
            </p>
          </div>

          {/* Legal Body Sections */}
          <div className="space-y-10 text-[15px] sm:text-base text-neutral-700 leading-relaxed font-normal">
            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                [Q-CUBIC LEGAL ENTITY NAME] (&quot;Q-CUBIC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects only information necessary to communicate with clients, respond to project inquiries, and deliver digital engineering services. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li><strong className="font-semibold text-neutral-900">Directly Provided Information:</strong> Name, professional email address, phone number, company name, project brief details, and budget specifications submitted through contact forms.</li>
                <li><strong className="font-semibold text-neutral-900">Technical Data:</strong> Basic browser metadata, operating system type, and standard server connection details transmitted during regular website interactions.</li>
              </ul>
            </section>

            {/* 2. How We Use Information */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                2. How We Use Information
              </h2>
              <p className="mb-2">We process collected data exclusively to:</p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li>Evaluate project requirements and provide customized proposals, quotations, and technology consultations.</li>
                <li>Communicate with clients throughout the design, development, and delivery lifecycle.</li>
                <li>Maintain operational security, troubleshoot technical issues, and improve website performance.</li>
              </ul>
            </section>

            {/* 3. Contact Forms */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                3. Contact Forms
              </h2>
              <p>
                When you submit an inquiry through our contact or project intake forms, your details are securely routed to our business development and technical teams. We do not sell, rent, or trade your contact information to third-party marketers.
              </p>
            </section>

            {/* 4. Cookies */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                4. Cookies
              </h2>
              <p>
                Our website utilizes essential functional cookies and session tokens required for basic site navigation and responsive display. Where non-essential performance or analytics tools are integrated, users may configure their web browser preferences to accept or decline cookie storage.
              </p>
            </section>

            {/* 5. Third-Party Services */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                5. Third-Party Services
              </h2>
              <p>
                We may employ reputable third-party infrastructure providers for web hosting, cloud storage, content delivery networks (CDNs), and transactional email dispatch. These providers access data only to perform specific tasks on our behalf and are obligated to protect confidentiality in compliance with standard data protection regulations.
              </p>
            </section>

            {/* 6. Data Retention */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain client project communications and contact submissions only for as long as necessary to fulfill the business purposes for which they were collected, comply with legal and accounting requirements, or resolve contractual obligations.
              </p>
            </section>

            {/* 7. Security */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                7. Security
              </h2>
              <p>
                Q-CUBIC implements commercial-grade technical and organizational measures to safeguard transmitted information against unauthorized access, disclosure, alteration, or destruction. However, no internet transmission method or electronic storage solution can be guaranteed 100% secure.
              </p>
            </section>

            {/* 8. Your Rights */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                8. Your Rights
              </h2>
              <p>
                Depending on your location and applicable privacy laws, you may have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion of your information from our direct inquiry databases, subject to legitimate record-keeping requirements.
              </p>
            </section>

            {/* 9. Changes to This Policy */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications to our business operations or legal requirements. Updates will be reflected with a revised &quot;Last updated&quot; date at the top of this document.
              </p>
            </section>

            {/* 10. Contact */}
            <section className="pt-4 border-t border-neutral-200">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                10. Contact
              </h2>
              <p className="mb-2">
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact:
              </p>
              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 text-sm space-y-1">
                <p className="font-semibold text-neutral-900">[Q-CUBIC LEGAL ENTITY NAME]</p>
                <p className="text-neutral-600">[REGISTERED ADDRESS]</p>
                <p className="text-neutral-600">
                  Email:{' '}
                  <a
                    href="mailto:qcubic24@gmail.com"
                    className="text-[#FF7A00] hover:underline"
                  >
                    qcubic24@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
