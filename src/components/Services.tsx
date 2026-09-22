import { Globe, AppWindow, Layers, Workflow, Bot, Mic, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: typeof Globe;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'website-dev',
    title: 'WEBSITE DEVELOPMENT',
    description: 'Modern, responsive websites built around your brand, audience and business goals.',
    capabilities: ['Business websites', 'E-commerce', 'Landing pages', 'Customer portals'],
    icon: Globe,
  },
  {
    id: 'app-dev',
    title: 'APPLICATION DEVELOPMENT',
    description: 'Custom applications designed around specific workflows, users and business requirements.',
    capabilities: ['Web applications', 'Mobile applications', 'Dashboards', 'Internal business tools'],
    icon: AppWindow,
  },
  {
    id: 'saas-dev',
    title: 'SAAS DEVELOPMENT',
    description: 'Scalable digital products designed for recurring use, subscriptions and growing businesses.',
    capabilities: ['Business platforms', 'Subscription software', 'Customer systems', 'Digital products'],
    icon: Layers,
  },
  {
    id: 'automation-integrations',
    title: 'AUTOMATION & INTEGRATIONS',
    description: 'Connect systems and reduce repetitive work through smarter digital workflows.',
    capabilities: ['CRM workflows', 'Lead processing', 'Reports', 'Business process automation'],
    icon: Workflow,
  },
  {
    id: 'intelligent-assistants',
    title: 'INTELLIGENT ASSISTANTS',
    description: 'Useful digital assistants for customers, teams, knowledge and everyday business operations.',
    capabilities: ['Customer support', 'Sales assistance', 'Knowledge systems', 'Document-based assistance'],
    icon: Bot,
  },
  {
    id: 'voice-solutions',
    title: 'VOICE SOLUTIONS',
    description: 'Voice-based experiences for customer interaction, support and business workflows.',
    capabilities: ['Voice agents', 'Appointment booking', 'Lead qualification', 'Customer support'],
    icon: Mic,
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    desc: 'Understand the business and requirements.',
  },
  {
    step: '02',
    title: 'PLAN',
    desc: 'Define the right solution and user experience.',
  },
  {
    step: '03',
    title: 'BUILD',
    desc: 'Design and develop the product.',
  },
  {
    step: '04',
    title: 'TEST',
    desc: 'Review, refine and quality-check.',
  },
  {
    step: '05',
    title: 'LAUNCH',
    desc: 'Deploy, support and improve.',
  },
];

const FUTURE_LABELS = [
  'INTELLIGENT SYSTEMS',
  'ADVANCED AUTOMATION',
  'DIGITAL PRODUCTS',
  'ROBOTICS',
  'ENGINEERING TECHNOLOGY',
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-neutral-50/70 text-black py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div
            id="services-label"
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF5500] uppercase mb-4"
          >
            WHAT WE BUILD
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.18] mb-5"
          >
            Technology for real business needs.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal">
            From digital presence to intelligent business systems, Q-CUBIC TECH
            builds solutions around how your business works.
          </p>
        </div>

        {/* 6 Service Cards (3-col Desktop, 2-col Tablet, 1-col Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-[16px] border border-neutral-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-[#FF5500] hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Small Orange Icon */}
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF5500] mb-5">
                    <IconComponent className="w-5 h-5 text-[#FF5500]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-[19px] font-semibold tracking-tight text-neutral-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <ul className="space-y-2 mb-8 border-t border-neutral-100 pt-5">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-xs sm:text-sm text-neutral-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]/70 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Action */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#FF5500] hover:text-[#E04700] transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* HOW WE WORK: FROM IDEA TO LAUNCH */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 md:p-10 rounded-[18px] bg-white border border-neutral-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-semibold tracking-widest text-[#FF5500] uppercase mb-2">
              HOW WE WORK
            </div>
            <h4 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight">
              FROM IDEA TO LAUNCH
            </h4>
          </div>

          {/* 5 Sequential Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {WORKFLOW_STEPS.map((item) => (
              <div
                key={item.step}
                className={`p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between ${
                  item.step === '05' ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF5500] mb-1">
                    {item.step}
                  </div>
                  <div className="text-sm font-semibold tracking-wider text-neutral-900 uppercase mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base text-neutral-600 font-normal mt-8">
            Tell us what you want to build, improve or scale.
          </p>
        </div>

        {/* FUTURE SECTION: Building what's next */}
        <div className="mt-12 p-8 sm:p-10 rounded-[18px] bg-neutral-900 text-white shadow-sm">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-[#FF5500] uppercase mb-3">
              THE ROADMAP
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-4">
              Building what's next.
            </h3>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8">
              Our technology roadmap extends into intelligent systems, advanced automation, digital products, robotics and engineering solutions.
            </p>

            {/* Future Labels */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {FUTURE_LABELS.map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-800 text-neutral-200 border border-neutral-700/80"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
