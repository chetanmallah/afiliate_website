import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Affiliate Reviews', path: '/services' },
    { name: 'SEO Optimization', path: '/services' },
    { name: 'Social Proof Marketing', path: '/services' },
    { name: 'Marketplace Ranking', path: '/services' },
    { name: 'Growth Strategy', path: '/services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Growthexa
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Helping businesses grow on Amazon, Flipkart, Myntra, Meesho, and other
                e-commerce platforms through smart affiliate marketing and SEO optimization.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300 group"
                    >
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <Mail size={18} className="mr-3 mt-1 flex-shrink-0 text-teal-500 group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:support@growthexa.com"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    support@growthexa.com
                  </a>
                </div>
                <div className="flex items-start group">
                  <Phone size={18} className="mr-3 mt-1 flex-shrink-0 text-teal-500 group-hover:scale-110 transition-transform" />
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    +91 9892590355
                  </a>
                </div>
                <div className="flex items-start group">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-teal-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-gray-400">
                    Mulund West, Mumbai, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Growthexa. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
