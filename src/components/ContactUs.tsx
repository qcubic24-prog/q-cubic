import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Website Development',
  'Application Development',
  'SaaS Development',
  'Automation & Integrations',
  'Intelligent Assistants',
  'Voice Solutions',
  'Other',
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.details.trim()) newErrors.details = 'Please describe your requirement';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      details: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#FFF7F0' }}
      className="relative z-10 w-full py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-orange-100 scroll-mt-20"
    >
      <div id="get-in-touch" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5">
            <div
              id="contact-label"
              className="text-xs sm:text-sm font-semibold tracking-widest text-[#FF5500] uppercase mb-4"
            >
              GET IN TOUCH • CONTACT US
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.18] mb-6 whitespace-pre-line"
            >
              Have an idea?{'\n'}Let's build it.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10 font-normal">
              Tell us what you want to build, automate or improve. Share a few
              details about your requirement and our team can take it from there.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:grid-cols-1 lg:space-y-6 lg:gap-0 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100/60 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    EMAIL
                  </div>
                  <a
                    href="mailto:qcubic24@gmail.com"
                    className="text-base sm:text-lg text-neutral-900 font-medium hover:text-[#FF5500] transition-colors"
                  >
                    qcubic24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100/60 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    PHONE
                  </div>
                  <span className="text-base sm:text-lg text-neutral-900 font-medium">
                    <a
                      href="tel:+917019886914"
                      className="hover:text-[#FF5500] transition-colors"
                    >
                      +91 7019886914
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100/60 flex items-center justify-center text-[#FF5500] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                    LOCATION
                  </div>
                  <span className="text-base sm:text-lg text-neutral-900 font-medium">
                    India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3">
                FOLLOW US
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-neutral-700">
                <a
                  href="https://www.linkedin.com/company/qcubic/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5500] transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://www.instagram.com/qcubic24?stkn=a296ZXg1NGV0b2Jx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61593619222372&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5500] transition-colors"
                >
                  Facebook
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="https://www.tiktok.com/@qcubic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5500] transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[20px] border border-neutral-200/90 shadow-sm p-7 sm:p-10">
              {submitted ? (
                <div
                  id="form-success-message"
                  className="py-12 flex flex-col items-center text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#FF5500] mb-4 stroke-1" />
                  <h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 mb-3">
                    Thank you. We've received your enquiry.
                  </h3>
                  <p className="text-neutral-600 max-w-md mb-8">
                    We'll review your enquiry and get back to you.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-[26px] font-normal text-neutral-900 tracking-tight mb-2">
                      Start a Project
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base font-normal">
                      Tell us a little about your requirement.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Full Name <span className="text-[#FF5500]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 focus:border-[#FF5500] transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Work Email <span className="text-[#FF5500]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 focus:border-[#FF5500] transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1.5">{errors.email}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, company: e.target.value }))
                        }
                        placeholder="Company or organization"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 focus:border-[#FF5500] transition-colors"
                      />
                    </div>

                    {/* Service Required (Dropdown) */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Service Required <span className="text-[#FF5500]">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, service: e.target.value }))
                        }
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 focus:border-[#FF5500] transition-colors ${
                          errors.service ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        } ${!formData.service ? 'text-neutral-400' : 'text-neutral-900'}`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="text-neutral-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-600 text-xs mt-1.5">{errors.service}</p>
                      )}
                    </div>

                    {/* Project Details */}
                    <div>
                      <label
                        htmlFor="details"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                      >
                        Project Details <span className="text-[#FF5500]">*</span>
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        value={formData.details}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, details: e.target.value }))
                        }
                        placeholder="Tell us about your idea, requirement or business challenge."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20 focus:border-[#FF5500] transition-colors resize-y ${
                          errors.details ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {errors.details && (
                        <p className="text-red-600 text-xs mt-1.5">{errors.details}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="submit-enquiry-btn"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF5500] hover:bg-[#E04700] text-white font-medium text-base transition-colors duration-200 shadow-sm cursor-pointer"
                      >
                        Send Enquiry
                      </button>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-3 font-normal">
                        We'll review your enquiry and get back to you.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
