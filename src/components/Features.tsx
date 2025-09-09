import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe 
} from "lucide-react";

export default function Features() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      icon: Target,
      title: "Real-Time Tracking",
      description: "Monitor affiliate performance with millisecond precision. Track clicks, conversions, and revenue across all channels with our advanced analytics dashboard.",
      gradient: { from: "#3B82F6", to: "#8B5CF6" }
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Deep insights into your affiliate program performance. Identify top performers, optimize campaigns, and maximize ROI with data-driven decisions.",
      gradient: { from: "#8B5CF6", to: "#A855F7" }
    },
    {
      icon: Users,
      title: "Affiliate Management",
      description: "Streamline affiliate recruitment, onboarding, and relationship management. Build a network of high-performing partners with our comprehensive tools.",
      gradient: { from: "#A855F7", to: "#C084FC" }
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced AI-powered fraud detection protects your program from malicious activities. Maintain program integrity with real-time monitoring.",
      gradient: { from: "#C084FC", to: "#DDD6FE" }
    },
    {
      icon: Zap,
      title: "Automated Payouts",
      description: "Eliminate manual payment processing with automated commission calculations and payouts. Support multiple payment methods and currencies.",
      gradient: { from: "#8B5CF6", to: "#A855F7" }
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scale your affiliate program worldwide with multi-currency support, localized tracking, and compliance tools for international markets.",
      gradient: { from: "#7C3AED", to: "#8B5CF6" }
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Our E-commerce <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Comprehensive affiliate marketing tools designed to scale your business and maximize revenue through strategic partnerships.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-700 hover:shadow-2xl border border-border/50 backdrop-blur-sm ${
                isIntersecting ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, ${feature.gradient.from}15 0%, ${feature.gradient.to}15 100%)`
              }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 animate-float shadow-lg`}
                     style={{ 
                       background: `linear-gradient(135deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`,
                       animationDelay: `${index * 200}ms`
                     }}>
                  <feature.icon className="text-white h-8 w-8 group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <div className="pt-6 border-t border-border/30">
                <button 
                  onClick={() => window.location.href = `/services/${feature.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                  className="inline-flex items-center text-primary hover:text-accent font-semibold transition-all duration-300 group/btn hover:gap-3"
                >
                  Learn More
                  <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}