import { useRoute } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceData = {
  "real-time-tracking": {
    title: "Real-Time Tracking & Analytics",
    description: "Advanced affiliate tracking with real-time performance monitoring and detailed analytics",
    fullDescription: "Our real-time tracking system provides comprehensive insights into your affiliate performance with millisecond precision. Monitor clicks, conversions, revenue, and ROI across all your affiliate partnerships with our enterprise-grade analytics platform.",
    features: [
      "Real-time click and conversion tracking",
      "Advanced attribution modeling",
      "Custom dashboard creation",
      "API integration capabilities",
      "Fraud detection and prevention",
      "Multi-device tracking",
      "Lifetime value analysis",
      "Performance benchmarking"
    ],
    benefits: [
      "Increase conversion rates by 35% on average",
      "Reduce tracking discrepancies by 99%",
      "Save 20+ hours per week on reporting",
      "Identify top-performing affiliates instantly"
    ],
    pricing: "Starting at $99/month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "automated-payouts": {
    title: "Automated Payouts",
    description: "Streamlined commission payments with automated processing and multiple payment methods",
    fullDescription: "Eliminate manual payment processing with our automated payout system. Set custom commission structures, payment schedules, and let our platform handle the rest while maintaining full transparency and compliance.",
    features: [
      "Automated commission calculations",
      "Multiple payment methods (PayPal, Bank, Crypto)",
      "Custom payment schedules",
      "Tax compliance automation",
      "Payment history tracking",
      "Dispute resolution system",
      "Multi-currency support",
      "Instant payment notifications"
    ],
    benefits: [
      "Reduce payment processing time by 90%",
      "Eliminate payment errors completely",
      "Improve affiliate satisfaction rates",
      "Ensure 100% compliance with regulations"
    ],
    pricing: "Starting at $149/month",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "fraud-protection": {
    title: "Fraud Protection",
    description: "AI-powered fraud detection to protect your affiliate program from malicious activities",
    fullDescription: "Protect your affiliate program with our advanced AI-powered fraud detection system. Our machine learning algorithms analyze patterns in real-time to identify and prevent fraudulent activities before they impact your business.",
    features: [
      "AI-powered fraud detection",
      "Real-time risk scoring",
      "Automated blocking systems",
      "Pattern recognition algorithms",
      "Compliance monitoring",
      "Detailed fraud reports",
      "Custom rule creation",
      "24/7 monitoring"
    ],
    benefits: [
      "Reduce fraudulent activities by 95%",
      "Save thousands in prevented losses",
      "Maintain program integrity",
      "Protect brand reputation"
    ],
    pricing: "Starting at $199/month",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "multi-channel-integration": {
    title: "Multi-Channel Integration",
    description: "Seamless integration across all marketing channels and platforms",
    fullDescription: "Connect your affiliate program with all major marketing channels and platforms. Our integration system supports over 100+ platforms including social media, email marketing, content management systems, and e-commerce platforms.",
    features: [
      "100+ platform integrations",
      "Social media connectivity",
      "Email marketing integration",
      "E-commerce platform sync",
      "CRM system connections",
      "API-first architecture",
      "Custom webhook support",
      "Real-time data synchronization"
    ],
    benefits: [
      "Centralize all affiliate activities",
      "Reduce manual data entry by 80%",
      "Improve data accuracy",
      "Scale across multiple channels"
    ],
    pricing: "Starting at $179/month",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "performance-optimization": {
    title: "Performance Optimization",
    description: "AI-driven insights to optimize your affiliate program performance",
    fullDescription: "Leverage artificial intelligence to optimize your affiliate program performance. Our AI analyzes millions of data points to provide actionable insights and automated optimizations that drive better results.",
    features: [
      "AI-powered performance analysis",
      "Automated optimization suggestions",
      "Predictive analytics",
      "A/B testing automation",
      "Conversion rate optimization",
      "Audience segmentation",
      "Performance forecasting",
      "Custom optimization rules"
    ],
    benefits: [
      "Increase overall ROI by 45%",
      "Improve conversion rates significantly",
      "Reduce optimization time by 70%",
      "Make data-driven decisions"
    ],
    pricing: "Starting at $249/month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "global-reach": {
    title: "Global Reach",
    description: "Expand your affiliate program worldwide with localized support",
    fullDescription: "Take your affiliate program global with our comprehensive international expansion tools. Support multiple currencies, languages, and local payment methods while maintaining compliance with regional regulations.",
    features: [
      "Multi-currency support",
      "Localization in 25+ languages",
      "Regional compliance tools",
      "Local payment methods",
      "Timezone management",
      "Cultural adaptation features",
      "International tax handling",
      "Global affiliate recruitment"
    ],
    benefits: [
      "Expand to new markets quickly",
      "Increase global revenue by 200%",
      "Maintain compliance everywhere",
      "Build international partnerships"
    ],
    pricing: "Starting at $299/month",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:serviceId");
  const serviceId = params?.serviceId;
  const service = serviceId ? serviceData[serviceId as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
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
        title={`${service.title} - AffiliatePro Solutions`}
        description={service.fullDescription}
        keywords={`${service.title.toLowerCase()}, affiliate marketing, ${serviceId?.replace(/-/g, ' ')}`}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = "/"}
              className="mb-6 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started - {service.pricing}
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Benefits</h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                      <p className="font-semibold text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Affiliate Program?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to scale their affiliate marketing efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}