import { Target, Eye, Award, Users, TrendingUp, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is focused on delivering measurable growth and ROI for our clients.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of marketplace trends and continuously evolve our strategies to maintain competitive advantage.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy development to execution.',
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to being true partners in your growth journey.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '250%', label: 'Average Growth' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const team = [
    {
      name: 'Vikram Singh',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'E-commerce strategist with 15+ years of experience in marketplace optimization.',
    },
    {
      name: 'Neha Reddy',
      role: 'Head of SEO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'SEO expert specializing in marketplace search algorithms and product ranking.',
    },
    {
      name: 'Arjun Mehta',
      role: 'Growth Strategist',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data analyst focused on marketplace trends and performance optimization.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About Growthexa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Your trusted partner in e-commerce growth and marketplace optimization
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Growthexa was founded with a simple yet powerful vision: to help businesses
                  unlock their full potential on e-commerce marketplaces. What started as a
                  small consulting firm has grown into a comprehensive digital growth agency
                  serving clients across India.
                </p>
                <p>
                  We've helped hundreds of businesses navigate the complex world of online
                  marketplaces, from Amazon and Flipkart to Myntra and Meesho. Our deep
                  understanding of marketplace algorithms, consumer behavior, and growth
                  strategies has enabled our clients to achieve remarkable results.
                </p>
                <p>
                  Today, we're proud to be one of the leading affiliate services and SEO
                  optimization firms in the country, with a track record of delivering
                  measurable growth and exceptional ROI for our clients.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <Eye className="text-teal-600 mr-4" size={40} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the leading catalyst for e-commerce success in India, empowering
                businesses of all sizes to thrive in the digital marketplace through
                innovative strategies and data-driven solutions.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-6">
                <Target className="text-teal-600 mr-4" size={40} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver exceptional growth results by combining deep marketplace expertise,
                cutting-edge SEO strategies, and authentic affiliate services that build trust
                and drive sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <Icon className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
