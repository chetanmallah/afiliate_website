import { useRoute } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceData = {
  "influencer-marketing": {
    title: "Influencer Marketing",
    description: "Connect with top influencers and content creators to amplify your brand reach",
    fullDescription: "Our influencer marketing service connects your brand with the most relevant content creators and influencers across all social media platforms. We manage everything from influencer discovery and outreach to campaign execution and performance tracking.",
    features: [
      "Micro & macro influencer partnerships",
      "Campaign strategy and planning",
      "Content creation guidelines",
      "Performance tracking and analytics",
      "ROI measurement and reporting",
      "Multi-platform campaign management",
      "Influencer relationship management",
      "Brand safety and compliance"
    ],
    benefits: [
      "Increase brand awareness by 400%",
      "Reach targeted audiences effectively",
      "Generate authentic user-generated content",
      "Boost social media engagement rates"
    ],
    pricing: "Starting at ₹25,000/month",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "seo-optimization": {
    title: "SEO Optimization",
    description: "Dominate search rankings with comprehensive SEO strategies",
    fullDescription: "Our SEO optimization service helps your website rank higher in search engine results through technical optimization, content strategy, and link building. We focus on sustainable, white-hat techniques that deliver long-term results.",
    features: [
      "Comprehensive keyword research",
      "Technical SEO audits and fixes",
      "Content optimization and strategy",
      "Local SEO optimization",
      "Link building campaigns",
      "Performance monitoring and reporting",
      "Competitor analysis",
      "Mobile and Core Web Vitals optimization"
    ],
    benefits: [
      "Increase organic traffic by 300%",
      "Improve search engine rankings",
      "Enhance user experience and site speed",
      "Generate qualified leads consistently"
    ],
    pricing: "Starting at ₹20,000/month",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "amazon-listing-optimization": {
    title: "Amazon Listing Optimization",
    description: "Maximize your Amazon sales with optimized listings and PPC campaigns",
    fullDescription: "Our Amazon optimization service helps sellers maximize their visibility and sales on the world's largest marketplace. We optimize product listings, manage PPC campaigns, and handle inventory management to boost your Amazon presence.",
    features: [
      "Product listing optimization",
      "Amazon PPC campaign management",
      "A+ Content creation",
      "Inventory management",
      "Review management and optimization",
      "Competitor analysis and pricing strategy",
      "Brand Store setup and optimization",
      "Amazon SEO and keyword optimization"
    ],
    benefits: [
      "Increase Amazon sales by 250%",
      "Improve product visibility and rankings",
      "Optimize advertising spend and ROI",
      "Build stronger brand presence on Amazon"
    ],
    pricing: "Starting at ₹30,000/month",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "flipkart-and-e-commerce-management": {
    title: "Flipkart & E-commerce Management",
    description: "Complete marketplace management for Flipkart and other platforms",
    fullDescription: "Our e-commerce management service provides comprehensive support for selling on Flipkart, Myntra, and other major Indian marketplaces. We handle everything from listing optimization to customer service and inventory management.",
    features: [
      "Multi-platform marketplace management",
      "Product catalog optimization",
      "Inventory and order management",
      "Customer service and support",
      "Promotional campaign management",
      "Performance analytics and reporting",
      "Return and refund management",
      "Seller account optimization"
    ],
    benefits: [
      "Expand reach across multiple platforms",
      "Streamline operations and reduce workload",
      "Improve customer satisfaction ratings",
      "Increase overall marketplace revenue"
    ],
    pricing: "Starting at ₹35,000/month",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "digital-marketing-growth": {
    title: "Digital Marketing Growth",
    description: "Accelerate online growth with data-driven marketing strategies",
    fullDescription: "Our digital marketing growth service combines multiple channels and strategies to accelerate your online business growth. We use data-driven approaches to optimize conversion rates and maximize your marketing ROI across all digital touchpoints.",
    features: [
      "Growth hacking strategies",
      "Conversion rate optimization",
      "Multi-channel marketing campaigns",
      "Marketing automation setup",
      "Analytics and performance tracking",
      "A/B testing and optimization",
      "Customer journey mapping",
      "Lead generation and nurturing"
    ],
    benefits: [
      "Accelerate business growth by 400%",
      "Improve conversion rates significantly",
      "Reduce customer acquisition costs",
      "Build scalable marketing systems"
    ],
    pricing: "Starting at ₹40,000/month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  "brand-and-content-strategy": {
    title: "Brand & Content Strategy",
    description: "Build compelling brand presence with strategic content creation",
    fullDescription: "Our brand and content strategy service helps you build a strong, recognizable brand presence across all digital channels. We create compelling content that resonates with your audience and drives engagement and conversions.",
    features: [
      "Brand identity development",
      "Content strategy and planning",
      "Social media content creation",
      "Brand voice and messaging",
      "Visual identity and design",
      "Content calendar management",
      "Community management",
      "Brand reputation monitoring"
    ],
    benefits: [
      "Build strong brand recognition",
      "Increase social media engagement by 300%",
      "Create consistent brand messaging",
      "Develop loyal customer community"
    ],
    pricing: "Starting at ₹28,000/month",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
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
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = "/#services"}
              className="mb-6 hover:bg-primary/20 text-primary border-primary/20"
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
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
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