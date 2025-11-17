import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Star, ShoppingBag, Search, Award, Zap, CheckCircle, BarChart3 } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedSection from '../components/AnimatedSection';
import { WaveDivider, CurveDivider } from '../components/SvgDividers';

export default function Home() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Affiliate Review Services',
      description: 'Boost your product visibility with authentic reviews on Amazon, Flipkart, and more.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Rank higher on search engines and marketplaces with our proven SEO strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Marketplace Growth',
      description: 'Scale your business across multiple e-commerce platforms efficiently.',
    },
    {
      icon: Zap,
      title: 'Social Proof Marketing',
      description: 'Leverage customer testimonials and social proof to build trust and drive conversions.',
    },
    {
      icon: Target,
      title: 'Product Listing Optimization',
      description: 'Transform your listings into conversion machines with optimized content and images.',
    },
    {
      icon: Award,
      title: 'Digital Growth Strategy',
      description: 'Get a comprehensive roadmap tailored to your unique business goals and market.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      // role: 'Founder & CEO',
      company: 'TechGear India',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Growthexa helped us achieve 3x growth on Amazon in just 6 months. Their strategies are exceptional and data-driven. The team is professional, responsive, and truly invested in our success.',
    },
    {
      name: 'Priya Sharma',
      // role: 'CEO',
      company: 'Fashion Hub',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The SEO optimization and review management services transformed our Myntra presence completely. We went from page 5 to consistently ranking in the top 10 for our main categories.',
    },
    {
      name: 'Amit Patel',
      // role: 'Director',
      company: 'HomeEssentials',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Professional team with deep marketplace knowledge. Our sales increased by 250% on Flipkart within 4 months. Their affiliate review services are authentic and highly effective.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Satisfied Clients', icon: Users },
    { number: '450+', label: 'Successful Campaigns', icon: Target },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '250%', label: 'Average Growth', icon: TrendingUp },
  ];

  const whyChooseUs = [
    {
      icon: BarChart3,
      title: 'Data-Driven Results',
      description: 'Every strategy is backed by comprehensive market analysis and real-time performance tracking.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Industry veterans with deep expertise in e-commerce optimization and marketplace algorithms.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: '500+ successful partnerships and an average 250% growth rate across all client campaigns.',
    },
    {
      icon: Star,
      title: 'Personalized Approach',
      description: 'Custom strategies tailored to your unique business goals, target audience, and market position.',
    },
  ];

  const caseStudies = [
    {
      client: 'Fashion Brand X',
      category: 'Fashion & Lifestyle',
      challenge: 'Low visibility on Myntra',
      result: '320% increase in sales',
      metric: '15th to Top 3 ranking',
    },
    {
      client: 'Electronics Store Y',
      category: 'Consumer Electronics',
      challenge: 'Poor conversion rates',
      result: '180% conversion boost',
      metric: '4.8 star rating achieved',
    },
    {
      client: 'Home Decor Z',
      category: 'Home & Living',
      challenge: 'Limited marketplace presence',
      result: '5x revenue growth',
      metric: 'Expanded to 4 platforms',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-white via-teal-50 to-blue-50 pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full animate-particle-float opacity-40"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-particle-float animation-delay-1000 opacity-40"></div>
        <div className="absolute bottom-32 right-40 w-5 h-5 bg-teal-300 rounded-full animate-particle-float animation-delay-2000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-particle-float animation-delay-500 opacity-40"></div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 animate-fade-in-up">
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                  Trusted by 500+ Businesses
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up animation-delay-200">
                Transform Your<br />
                <span className="text-teal-600">E-commerce Success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                Drive exponential growth with data-driven affiliate marketing, SEO optimization,
                and marketplace strategies. Dominate Amazon, Flipkart, Myntra, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transform hover:scale-105 transition-all duration-200"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-700">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="E-commerce Growth"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl animate-float">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">250%</p>
                      <p className="text-sm text-gray-600 font-medium">Average Growth</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-xl animate-float animation-delay-1000">
                  <Star className="text-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-teal-600" size={28} />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <div className="bg-gray-50">
        <CurveDivider color="#f9fafb" flip={true} />
      </div>

      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why Choose Growthexa?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine deep marketplace expertise with cutting-edge strategies to deliver exceptional results
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <div className="bg-white">
        <CurveDivider color="#ffffff" flip={true} />
      </div>

      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive solutions designed to accelerate your e-commerce growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-teal-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="text-teal-600" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      <Link
                        to="/services"
                        className="inline-flex items-center text-teal-600 font-semibold group-hover:text-teal-700"
                      >
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <div className="bg-gray-50">
        <WaveDivider color="#f9fafb" />
      </div>

      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real results from businesses we've helped transform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-lg text-sm font-semibold mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600">Result:</span>
                        <span className="text-teal-600 font-bold text-lg">{study.result}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Achievement:</span>
                        <span className="text-gray-900 font-semibold">{study.metric}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <div className="bg-white">
        <WaveDivider color="#ffffff" />
      </div>

      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Success stories from businesses we've helped grow
                </p>
              </div>

              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptMCAwdi00aDR2NGgtNHptLTQgNHY0aC00di00aDR6bTAgMHYtNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="w-full relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful brands that have scaled their e-commerce presence with our proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
