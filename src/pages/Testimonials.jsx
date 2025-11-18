import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      // role: 'Founder & CEO',
      company: 'TechGear India',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Growthexa helped us achieve 3x growth on Amazon in just 6 months. Their strategies are exceptional and data-driven. The team is professional, responsive, and truly invested in our success.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      // role: 'CEO',
      company: 'Fashion Hub',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The SEO optimization and review management services transformed our Myntra presence completely. We went from page 5 to consistently ranking in the top 10 for our main categories. Outstanding results!',
    },
    {
      id: 3,
      name: 'Amit Patel',
      // role: 'Director',
      company: 'HomeEssentials',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Professional team with deep marketplace knowledge. Our sales increased by 250% on Flipkart within 4 months. Their affiliate review services are authentic and highly effective.',
    },
    {
      id: 4,
      name: 'Sneha Desai',
      // role: 'Founder',
      company: 'BeautyBliss',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Working with Growthexa was a game-changer for our beauty brand. Their multi-platform strategy helped us establish a strong presence on Amazon, Flipkart, and Myntra simultaneously.',
    },
    {
      id: 5,
      name: 'Karthik Reddy',
      // role: 'Co-Founder',
      company: 'SportsFit Pro',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The product listing optimization services are top-notch. Our conversion rates improved by 180%, and we\'re now consistently winning the buy box on Amazon. Highly recommended!',
    },
    {
      id: 6,
      name: 'Ananya Singh',
      // role: 'Marketing Head',
      company: 'GreenLife Organics',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Exceptional service and results! Growthexa helped us navigate the complex world of marketplace algorithms and social proof marketing. Our brand visibility has increased dramatically.',
    },
    {
      id: 7,
      name: 'Rohan Malhotra',
      // role: 'CEO',
      company: 'ElectroMart',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'From struggling to compete to dominating our category - that\'s what Growthexa achieved for us. Their data-driven approach and marketplace expertise are unmatched in the industry.',
    },
    {
      id: 8,
      name: 'Meera Kapoor',
      // role: 'Owner',
      company: 'KidsKorner',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The team at Growthexa is incredibly knowledgeable and supportive. They helped us understand the nuances of each marketplace and develop tailored strategies that actually work.',
    },
    {
      id: 9,
      name: 'Vikram Joshi',
      // role: 'Managing Director',
      company: 'FurnitureHub',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'Best investment we made for our e-commerce business. The ROI has been phenomenal. Growthexa\'s strategies are practical, effective, and delivered consistent results month after month.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Hear from businesses that have transformed their e-commerce success with Growthexa
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Quote className="text-teal-600" size={24} />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center border-t border-gray-100 pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-teal-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their e-commerce presence with our proven strategies
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-semibold hover:bg-gray-200 transition-colors"
              >
                Brand {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
