import { useRoute } from "wouter";
import { ArrowLeft, Mail, Linkedin, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const expertData = {
  "chandan-kumar-mallah": {
    name: "Mr. Chandan Kumar Mallah",
    role: "Founder & CEO",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    bio: "Chandan Kumar Mallah is a visionary entrepreneur with over 10 years of experience in affiliate marketing and e-commerce growth strategies. He founded AffiliatePro Solutions with the mission to democratize affiliate marketing and help businesses of all sizes leverage the power of performance-based marketing.",
    expertise: ["Affiliate Strategy", "Business Development", "Team Leadership", "E-commerce Growth", "Performance Marketing"],
    achievements: [
      "Built affiliate programs generating $100M+ in revenue",
      "Helped 500+ businesses scale through affiliate marketing",
      "Speaker at 20+ industry conferences",
      "Featured in Forbes, Entrepreneur, and TechCrunch",
      "Mentor to 50+ startup founders"
    ],
    education: [
      "MBA in Marketing - Indian Institute of Management",
      "B.Tech in Computer Science - IIT Delhi"
    ],
    philosophy: "I believe that affiliate marketing is the most powerful growth channel when executed with the right strategy, technology, and partnerships. My goal is to make sophisticated affiliate marketing accessible to every business.",
    contact: {
      email: "chandan@affiliatepro.com",
      linkedin: "https://linkedin.com/in/chandankumarmallah"
    }
  },
  "priya-patel": {
    name: "Priya Patel",
    role: "Head of Performance Marketing",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    bio: "Priya Patel is a performance marketing expert specializing in affiliate tracking, conversion optimization, and data analytics. She leads our performance marketing team and has helped optimize affiliate programs that generate millions in revenue.",
    expertise: ["Performance Analytics", "Conversion Optimization", "A/B Testing", "Data Science", "Attribution Modeling"],
    achievements: [
      "Improved conversion rates by 300% on average",
      "Managed $50M+ in affiliate marketing spend",
      "Developed proprietary attribution models",
      "Certified Google Analytics and Facebook expert",
      "Published researcher in marketing analytics"
    ],
    education: [
      "MS in Data Science - Stanford University",
      "B.S. in Mathematics - University of California, Berkeley"
    ],
    philosophy: "Data-driven decision making is the foundation of successful affiliate marketing. Every optimization should be backed by solid analytics and continuous testing.",
    contact: {
      email: "priya@affiliatepro.com",
      linkedin: "https://linkedin.com/in/priyapatel"
    }
  },
  "arjun-gupta": {
    name: "Arjun Gupta",
    role: "Technical Director",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    bio: "Arjun Gupta is our Technical Director responsible for building and maintaining our affiliate platform infrastructure. With 12+ years in software development and system architecture, he ensures our platform can handle enterprise-scale affiliate programs.",
    expertise: ["Platform Development", "API Integration", "Data Analytics", "System Architecture", "DevOps"],
    achievements: [
      "Built platforms processing 1B+ affiliate events monthly",
      "Designed APIs used by 10,000+ developers",
      "Led technical teams of 50+ engineers",
      "Expert in scalable system architecture",
      "Open source contributor with 100+ repositories"
    ],
    education: [
      "M.S. in Computer Science - Carnegie Mellon University",
      "B.Tech in Software Engineering - IIT Bombay"
    ],
    philosophy: "Technology should empower marketers, not complicate their work. I focus on building intuitive, powerful tools that make affiliate marketing accessible to everyone.",
    contact: {
      email: "arjun@affiliatepro.com",
      linkedin: "https://linkedin.com/in/arjungupta"
    }
  }
};

export default function ExpertDetail() {
  const [, params] = useRoute("/experts/:expertId");
  const expertId = params?.expertId;
  const expert = expertId ? expertData[expertId as keyof typeof expertData] : null;

  if (!expert) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Expert Not Found</h1>
          <p className="text-muted-foreground mb-8">The expert profile you're looking for doesn't exist.</p>
          <Button onClick={() => window.location.href = "/"}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${expert.name} - ${expert.role} | AffiliatePro Solutions`}
        description={`Meet ${expert.name}, our ${expert.role} with ${expert.experience} of experience in affiliate marketing and performance optimization.`}
        keywords={`${expert.name}, affiliate marketing expert, ${expert.role.toLowerCase()}, performance marketing`}
        type="profile"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <article className="pt-24">
          {/* Hero Section */}
          <header className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/"}
                className="mb-6 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Team
              </Button>
              
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <div className="relative">
                    <img 
                      src={expert.image} 
                      alt={`${expert.name} - ${expert.role}`}
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-8 space-y-4">
                    <a 
                      href={`mailto:${expert.contact.email}`}
                      className="flex items-center gap-3 p-3 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-primary font-medium">Contact</span>
                    </a>
                    <a 
                      href={expert.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-600 font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    {expert.name}
                  </h1>
                  <p className="text-2xl text-primary font-semibold mb-2">{expert.role}</p>
                  <p className="text-lg text-muted-foreground mb-8">{expert.experience} of experience</p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {expert.bio}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Expertise */}
              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  Areas of Expertise
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {expert.expertise.map((skill, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                      <span className="font-semibold text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-accent" />
                  Key Achievements
                </h2>
                <div className="space-y-4">
                  {expert.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-lg">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="space-y-4">
                  {expert.education.map((edu, index) => (
                    <div key={index} className="p-6 bg-secondary/30 rounded-xl">
                      <p className="font-semibold text-foreground">{edu}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Philosophy */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Philosophy</h2>
                <div className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/20">
                  <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
                    "{expert.philosophy}"
                  </blockquote>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Work with {expert.name.split(' ')[1]}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert guidance for your affiliate marketing strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Experts
                </Button>
              </div>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}