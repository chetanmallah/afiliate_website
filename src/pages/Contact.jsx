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
      link: 'tel:+919876543210',
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
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Ready to accelerate your e-commerce growth? Let's discuss how we can help your business succeed
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help!
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                        <Icon className="text-teal-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Growthexa?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">15+ years of e-commerce expertise</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">500+ successful client partnerships</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Data-driven strategies that deliver results</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">Dedicated account management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">98% client satisfaction rate</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">Visit our office in the heart of Mumbai</p>
          </div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 font-semibold">Map Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Mulund West, Mumbai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
