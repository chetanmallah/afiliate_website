import { Link } from 'react-router-dom';
import { ShoppingBag, Search, TrendingUp, Users, FileText, Target, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { WaveDivider } from '../components/SvgDividers';

export default function Services() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Affiliate Review Services',
      platforms: 'Amazon, Flipkart, Myntra, Meesho',
      description: 'Boost your product credibility and visibility with authentic, high-quality reviews that drive conversions. Our strategic review management helps build trust with potential customers.',
      features: [
        'Targeted review campaigns',
        'Verified buyer reviews',
        'Review response management',
        'Reputation monitoring',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      platforms: 'All Marketplaces & Search Engines',
      description: 'Dominate search results with our proven SEO strategies. We optimize your product listings and content to rank higher on both search engines and marketplace platforms.',
      features: [
        'Keyword research & optimization',
        'Product listing optimization',
        'Content strategy',
        'Technical SEO audits',
      ],
    },
    {
      icon: Users,
      title: 'Social Proof Marketing',
      platforms: 'Multi-channel Approach',
      description: 'Leverage the power of social proof to influence buying decisions. We create compelling social proof campaigns that showcase your brand\'s credibility and customer satisfaction.',
      features: [
        'Customer testimonial management',
        'User-generated content strategy',
        'Influencer collaborations',
        'Social media amplification',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Marketplace Ranking Boost',
      platforms: 'Amazon, Flipkart, Myntra, Meesho',
      description: 'Climb to the top of marketplace search results with our specialized ranking strategies. We use data-driven techniques to improve your product visibility and sales velocity.',
      features: [
        'A+ content optimization',
        'Backend keyword optimization',
        'Sales velocity campaigns',
        'Competitor analysis',
      ],
    },
    {
      icon: FileText,
      title: 'Product Listing Optimization',
      platforms: 'All E-commerce Platforms',
      description: 'Transform your product listings into conversion machines. We optimize every element from titles to images to create listings that attract and convert customers.',
      features: [
        'Compelling product titles',
        'High-quality image optimization',
        'Persuasive bullet points',
        'Enhanced brand content',
      ],
    },
    {
      icon: Target,
      title: 'Digital Growth Strategy',
      platforms: 'Comprehensive Approach',
      description: 'Get a holistic growth plan tailored to your business goals. We combine multiple strategies to create a comprehensive roadmap for sustainable e-commerce success.',
      features: [
        'Market analysis & research',
        'Custom growth roadmap',
        'Performance tracking',
        'Continuous optimization',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-white via-teal-50 to-blue-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              Complete E-commerce Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Comprehensive solutions designed to accelerate your e-commerce growth across
            all major marketplaces
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <AnimatedSection key={index}>
                    <div
                      className={`flex flex-col ${
                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } gap-12 items-center`}
                    >
                      <div className="flex-1">
                        <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50 p-12 rounded-3xl h-full flex items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="text-center relative z-10">
                            <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                              <Icon className="text-teal-600" size={64} />
                            </div>
                            <p className="text-sm font-bold text-teal-600 uppercase tracking-wider">
                              {service.platforms}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="inline-block mb-4">
                          <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-lg text-sm font-semibold">
                            Service {index + 1}
                          </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start group">
                              <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                                <CheckCircle className="text-teal-600" size={16} />
                              </div>
                              <p className="text-gray-700 ml-3 group-hover:text-gray-900 transition-colors">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="w-full relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let's create a customized growth strategy for your e-commerce success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transform hover:scale-105 transition-all duration-200"
                >
                  Learn About Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
