import { Linkedin, Twitter, Mail, Award, TrendingUp, Users, Target, Star, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Link } from "wouter";

export default function Team() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const teamMembers = [
    {
      name: "Mr. Chandan Kumar Mallah",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in affiliate marketing, driving innovation and strategic growth across global markets.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Strategy", "Leadership", "Growth"],
      experience: "10+ years",
      icon: Award,
      social: {
        linkedin: "https://linkedin.com/in/chandankumarmallah",
        twitter: "https://twitter.com/chandanmallah",
        email: "chandan@growthhexa.com"
      }
    },
    {
      name: "Priya Patel",
      role: "Head of Performance Marketing",
      description: "Performance marketing expert specializing in conversion optimization and data-driven affiliate strategies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Analytics", "Optimization", "ROI"],
      experience: "8+ years",
      icon: TrendingUp,
      social: {
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel",
        email: "priya@growthhexa.com"
      }
    },
    {
      name: "Arjun Gupta",
      role: "Technical Director",
      description: "Technology leader building scalable affiliate platforms and innovative tracking solutions for enterprise clients.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Platform", "API", "Scale"],
      experience: "12+ years",
      icon: Zap,
      social: {
        linkedin: "https://linkedin.com/in/arjungupta",
        twitter: "https://twitter.com/arjungupta",
        email: "arjun@growthhexa.com"
      }
    },
  ];

  return (
    <section id="team" ref={ref} className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Meet Our <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Industry veterans with decades of combined experience in affiliate marketing, performance optimization, and platform development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:shadow-2xl hover:border-purple-400 transition-all duration-700 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Link to={`/experts/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>
              {/* Role Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full"></div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {member.experience}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {member.description}
              </p>
              
              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </Link>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}