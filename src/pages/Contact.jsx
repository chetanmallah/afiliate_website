import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@growthexa.com',
      link: 'mailto:support@growthexa.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9892590355',
      link: 'tel:+919892590355',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Mulund West, Mumbai, Maharashtra 400078',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="bg-gradient-to-br from-gray-50 via-teal-50/20 to-blue-50/20 pt-32 pb-20 border-b border-gray-200">
        <div className="section-container text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
            Ready to accelerate your e-commerce growth? Let's discuss how we can help your business succeed
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input-field"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="input-field"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                    placeholder="+91 9892590355"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="input-field"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="input-field bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="affiliate-reviews">Affiliate Review Services</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social-proof">Social Proof Marketing</option>
                    <option value="ranking">Marketplace Ranking Boost</option>
                    <option value="listing">Product Listing Optimization</option>
                    <option value="strategy">Digital Growth Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact Information</h2>
                <p className="text-gray-600">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-4 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="card p-6 group hover:-translate-y-0.5 border-2 hover:border-teal-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                          <Icon className="text-teal-600" size={22} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 text-sm">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-teal-600 transition-colors text-sm"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="card-elevated p-8 border-2 border-teal-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Why Choose Growthexa?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">15+ years of e-commerce expertise</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">500+ successful client partnerships</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Data-driven strategies that deliver results</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Dedicated account management</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">98% client satisfaction rate</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-t border-gray-200">
        <div className="section-container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Find Us on the Map</h2>
            <p className="text-gray-600">Visit our office in the heart of Mumbai</p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-gray-600 font-semibold">Map Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Mulund West, Mumbai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
