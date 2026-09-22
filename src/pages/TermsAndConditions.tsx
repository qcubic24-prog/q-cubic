import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import QCubicLogo from '../components/QCubicLogo';
import Footer from '../components/Footer';

interface TermsAndConditionsProps {
  onNavigate: (path: string) => void;
}

export default function TermsAndConditions({ onNavigate }: TermsAndConditionsProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Terms & Conditions — Q-CUBIC';
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
              id="legal-terms-logo"
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

      {/* MAIN LEGAL CONTENT */}
      <main className="flex-1 w-full py-12 sm:py-16 md:py-20 px-5 sm:px-8">
        <article className="max-w-[880px] mx-auto">
          {/* Document Header */}
          <div className="border-b border-neutral-200 pb-8 mb-10">
            <div className="text-xs font-semibold tracking-widest text-[#FF7A00] uppercase mb-2">
              LEGAL AGREEMENT
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900 mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Last updated: September 22, 2026
            </p>
          </div>

          {/* Legal Body Sections */}
          <div className="space-y-10 text-[15px] sm:text-base text-neutral-700 leading-relaxed font-normal">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                1. Introduction
              </h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern the digital technology, design, development, consulting, and engineering services provided by [Q-CUBIC LEGAL ENTITY NAME] (&quot;Q-CUBIC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to our clients (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;). By engaging Q-CUBIC for services, approving a quotation, signing a statement of work, or utilizing our digital solutions, you acknowledge and agree to be bound by these Terms.
              </p>
            </section>

            {/* 2. Services */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                2. Services
              </h2>
              <p>
                Q-CUBIC provides custom technology and digital solutions including, but not limited to, website development, application development, SaaS development, workflow automation and integrations, intelligent digital assistants, and voice solution engineering. The specific services, deliverables, milestones, and timelines for any engagement will be established in an agreed Statement of Work, quotation, or formal proposal.
              </p>
            </section>

            {/* 3. Project Scope */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                3. Project Scope
              </h2>
              <p>
                All work will be executed strictly within the boundaries of the approved project scope document. Any modifications, feature additions, design alterations, or architectural changes requested outside of the defined project scope will be evaluated separately and may require an adjustment to project timelines, resource allocation, and associated professional service fees.
              </p>
            </section>

            {/* 4. Client Responsibilities */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                4. Client Responsibilities
              </h2>
              <p className="mb-3">
                Successful project delivery relies on active and timely collaboration. Clients agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                <li>Provide accurate, complete, and timely project requirements, assets, brand materials, copy, and credentials when requested.</li>
                <li>Appoint a designated point of contact with decision-making authority for milestone reviews and sign-offs.</li>
                <li>Respond to clarification inquiries, testing feedback, and approval requests within reasonable timeframes, understanding that delays in feedback directly affect overall project delivery schedules.</li>
              </ul>
            </section>

            {/* 5. Payments and Invoicing */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                5. Payments and Invoicing
              </h2>
              <p>
                Payment schedules, invoicing intervals, deposits, and accepted payment methods are specified in the individual project proposal or invoice. Unless otherwise agreed in writing, invoices are payable within the net term stated on each invoice. Q-CUBIC reserves the right to suspend active development or defer production deployments in the event of overdue or outstanding balances.
              </p>
            </section>

            {/* 6. Revisions and Approvals */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                6. Revisions and Approvals
              </h2>
              <p>
                Revisions are accommodated in accordance with the specific revision rounds outlined in the agreed project proposal. Once a milestone, design concept, or deliverable is formally reviewed and approved by the Client, subsequent structural or scope adjustments will be treated as additional work subject to supplemental quotation.
              </p>
            </section>

            {/* 7. Intellectual Property */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                7. Intellectual Property
              </h2>
              <p>
                Ownership and licensing rights to custom deliverables, source code, designs, and materials created during an engagement will be determined by the specific terms set forth in the applicable project agreement or statement of work. Pre-existing proprietary frameworks, developer toolkits, background libraries, and generalized software routines developed or utilized by Q-CUBIC remain the property of Q-CUBIC or their respective licensors, with appropriate operational licenses granted to the Client upon fulfillment of agreed payment obligations.
              </p>
            </section>

            {/* 8. Third-Party Tools and Services */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                8. Third-Party Tools and Services
              </h2>
              <p>
                Projects may interface with, embed, or utilize third-party platforms, hosting services, APIs, databases, domain registrars, or software libraries (e.g., cloud infrastructure, AI model providers, payment processors). These services operate under their own independent terms, conditions, uptime guarantees, and billing models. Q-CUBIC is not liable for disruptions, pricing changes, or policy updates imposed by third-party service providers.
              </p>
            </section>

            {/* 9. Website and Application Maintenance */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                9. Website and Application Maintenance
              </h2>
              <p>
                Following the completion of warranty or post-launch handoff periods defined in a project agreement, ongoing maintenance, security patching, feature expansion, and infrastructure monitoring require an active maintenance agreement or separate hourly support arrangement.
              </p>
            </section>

            {/* 10. Confidentiality */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                10. Confidentiality
              </h2>
              <p>
                Both Q-CUBIC and the Client agree to treat non-public proprietary information, technical specifications, commercial data, and trade secrets disclosed during the course of the engagement with the highest degree of care. Confidential information shall not be disclosed to unauthorized third parties without prior written consent, except as required by law.
              </p>
            </section>

            {/* 11. Warranties and Limitations */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                11. Warranties and Limitations
              </h2>
              <p>
                Q-CUBIC warrants that services will be performed in a professional, workmanlike manner aligned with industry engineering and design practices. Except as expressly stated in a project contract, all digital deliverables are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without implied warranties of merchantability or fitness for an unstated particular purpose.
              </p>
            </section>

            {/* 12. Cancellation and Termination */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                12. Cancellation and Termination
              </h2>
              <p>
                Either party may terminate a project agreement in accordance with the notice provisions set forth in that agreement. Upon early termination, the Client remains responsible for payment for all verified work, milestones achieved, and non-cancellable third-party commitments incurred up to the date of termination.
              </p>
            </section>

            {/* 13. Limitation of Liability */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                13. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Q-CUBIC, its directors, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of business profits, data loss, or system downtime, arising from or connected to the use of deliverables. Q-CUBIC&apos;s aggregate liability shall be limited to the total fees paid by Client for the specific deliverable giving rise to the claim.
              </p>
            </section>

            {/* 14. Changes to These Terms */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                14. Changes to These Terms
              </h2>
              <p>
                Q-CUBIC reserves the right to review and update these Terms periodically to reflect changes in regulatory standards, technology practices, or service offerings. The updated version will be posted on this page with an updated &quot;Last updated&quot; date. Continued engagement of our services after publication constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* 15. Governing Law */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                15. Governing Law
              </h2>
              <p>
                These Terms and any contractual disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of [GOVERNING JURISDICTION], without regard to its conflict of law provisions.
              </p>
            </section>

            {/* 16. Contact Information */}
            <section className="pt-4 border-t border-neutral-200">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                16. Contact Information
              </h2>
              <p className="mb-2">
                For questions regarding these Terms &amp; Conditions or legal notices, please reach out to:
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
