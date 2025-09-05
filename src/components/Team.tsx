import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Team() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const teamMembers = [
    {
      name: "Mr. Chandan Kumar Mallah",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in affiliate marketing, driving innovation and strategic growth across global markets.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Strategy", "Leadership", "Growth"],
      experience: "10+ years"
    },
    {
      name: "Priya Patel",
      role: "Head of Performance Marketing",
      description: "Performance marketing expert specializing in conversion optimization and data-driven affiliate strategies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Analytics", "Optimization", "ROI"],
      experience: "8+ years"
    },
    {
      name: "Arjun Gupta",
      role: "Technical Director",
      description: "Technology leader building scalable affiliate platforms and innovative tracking solutions for enterprise clients.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      expertise: ["Platform", "API", "Scale"],
      experience: "12+ years"
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
              onClick={() => window.location.href = `/experts/${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
              className={`group cursor-pointer text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:shadow-2xl transition-all duration-700 ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-500 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {member.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}