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
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="w-full">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Growthexa</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Helping businesses grow on Amazon, Flipkart, Myntra, Meesho, and other
                e-commerce platforms through smart affiliate marketing and SEO optimization.
              </p>
              <div className="flex gap-2 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 group"
                    >
                      <Icon size={16} className="text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                  <a
                    href="mailto:support@growthexa.com"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    support@growthexa.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                  <a
                    href="tel:+919892590355"
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    +91 9892590355
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                  <span className="text-sm text-gray-400">
                    Mulund West, Mumbai
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Growthexa. All rights reserved.
              </p>
              <div className="flex gap-6">
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
