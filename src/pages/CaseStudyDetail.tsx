import { useRoute } from "wouter";
import { ArrowLeft, Calendar, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudyData = {
  "fashion-brand-amazon-growth": {
    title: "Fashion Brand Amazon Growth",
    subtitle: "How we achieved 300% sales increase in 6 months",
    client: "StyleCraft Fashion",
    industry: "Fashion & Apparel",
    duration: "6 months",
    results: {
      salesIncrease: "300%",
      revenueGrowth: "₹2.5Cr",
      conversionRate: "12.5%",
      affiliatePartners: "150+"
    },
    challenge: "StyleCraft Fashion was struggling with low visibility on Amazon and poor conversion rates. Their product listings were not optimized, and they had minimal brand presence on the platform.",
    solution: "We implemented a comprehensive Amazon optimization strategy including listing optimization, PPC campaigns, influencer partnerships, and brand store development.",
    implementation: [
      "Conducted thorough market analysis and competitor research",
      "Optimized all product listings with SEO-focused keywords",
      "Created compelling A+ content and brand store",
      "Launched targeted PPC campaigns across multiple ad types",
      "Partnered with fashion influencers for product promotion",
      "Implemented inventory management and pricing strategies"
    ],
    results_detail: "Within 6 months, StyleCraft Fashion saw unprecedented growth. Sales increased by 300%, revenue grew to ₹2.5Cr, and conversion rates improved to 12.5%. The brand became a top seller in their category.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "The results exceeded our wildest expectations. Our Amazon business transformed completely.",
      author: "Priya Sharma",
      position: "Founder, StyleCraft Fashion"
    }
  },
  "tech-startup-seo-campaign": {
    title: "Tech Startup SEO Campaign",
    subtitle: "Ranking #1 for 50+ keywords and 500% traffic growth",
    client: "TechFlow Solutions",
    industry: "SaaS Technology",
    duration: "8 months",
    results: {
      trafficIncrease: "500%",
      keywordRankings: "50+",
      organicRevenue: "₹1.8Cr",
      leadGeneration: "300+"
    },
    challenge: "TechFlow Solutions had virtually no organic presence and was heavily dependent on paid advertising. They needed to establish authority and reduce customer acquisition costs.",
    solution: "We developed a content-driven SEO strategy combined with technical optimization and link building to create sustainable organic growth.",
    implementation: [
      "Comprehensive keyword research and content strategy",
      "Created 100+ high-quality blog posts and resources",
      "Built authoritative backlink profile",
      "Optimized technical SEO and site performance",
      "Developed lead magnets and conversion funnels",
      "Implemented local SEO for target markets"
    ],
    results_detail: "The campaign resulted in 500% organic traffic growth, #1 rankings for 50+ target keywords, and ₹1.8Cr in organic revenue. Customer acquisition costs decreased by 60%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "The SEO results were incredible. We went from invisible to industry leaders in organic search.",
      author: "Rahul Gupta",
      position: "CEO, TechFlow Solutions"
    }
  },
  "beauty-brand-influencer-strategy": {
    title: "Beauty Brand Influencer Strategy",
    subtitle: "50M+ impressions through strategic influencer partnerships",
    client: "GlowUp Cosmetics",
    industry: "Beauty & Cosmetics",
    duration: "4 months",
    results: {
      impressions: "50M+",
      engagementRate: "8.5%",
      newCustomers: "25,000+",
      roiIncrease: "400%"
    },
    challenge: "GlowUp Cosmetics needed to break into the competitive beauty market and build brand awareness among younger demographics while maintaining profitability.",
    solution: "We created a multi-tiered influencer marketing strategy targeting micro and macro influencers in the beauty space, with performance-based campaigns and exclusive product launches.",
    implementation: [
      "Identified and recruited 200+ beauty influencers",
      "Created tiered campaign structure based on follower count",
      "Developed exclusive product launch campaigns",
      "Implemented influencer-specific tracking and analytics",
      "Created content guidelines and brand assets",
      "Established long-term brand ambassador programs"
    ],
    results_detail: "The campaign generated 50M+ impressions with an 8.5% engagement rate, acquired 25,000+ new customers, and achieved a 400% ROI increase through strategic influencer partnerships.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "The influencer strategy didn't just increase sales, it built our entire brand identity in the market.",
      author: "Sneha Patel",
      position: "Marketing Director, GlowUp Cosmetics"
    }
  },
  "home-decor-flipkart-success": {
    title: "Home Decor Flipkart Success",
    subtitle: "Became top-selling brand in category with strategic optimization",
    client: "DecorVilla",
    industry: "Home & Decor",
    duration: "5 months",
    results: {
      salesGrowth: "450%",
      categoryRanking: "#1",
      customerRating: "4.8/5",
      inventoryTurnover: "12x"
    },
    challenge: "DecorVilla was struggling to gain visibility on Flipkart and compete with established home decor brands. Their listings were poorly optimized and sales were stagnant.",
    solution: "We implemented a comprehensive Flipkart optimization strategy including listing enhancement, promotional campaigns, and inventory management to dominate the home decor category.",
    implementation: [
      "Optimized all product listings with high-quality images",
      "Implemented dynamic pricing strategies",
      "Launched targeted promotional campaigns",
      "Improved inventory management and fulfillment",
      "Enhanced customer service and review management",
      "Developed category-specific marketing strategies"
    ],
    results_detail: "DecorVilla became the #1 selling brand in their category with 450% sales growth, achieved 4.8/5 customer rating, and improved inventory turnover to 12x the previous rate.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "We went from struggling sellers to category leaders. The transformation was remarkable.",
      author: "Amit Jain",
      position: "Founder, DecorVilla"
    }
  },
  "food-brand-multi-platform-growth": {
    title: "Food Brand Multi-Platform Growth",
    subtitle: "Scaled from startup to ₹10Cr revenue across multiple platforms",
    client: "TasteBuds Foods",
    industry: "Food & Beverages",
    duration: "12 months",
    results: {
      revenueGrowth: "₹10Cr",
      platformExpansion: "5 platforms",
      brandRecognition: "85%",
      customerBase: "100K+"
    },
    challenge: "TasteBuds Foods was a startup with great products but no online presence. They needed to establish themselves across multiple e-commerce platforms and build brand recognition.",
    solution: "We developed a comprehensive multi-platform strategy covering Amazon, Flipkart, BigBasket, Grofers, and their own D2C website, with integrated marketing campaigns.",
    implementation: [
      "Established presence on 5 major e-commerce platforms",
      "Created platform-specific optimization strategies",
      "Developed integrated marketing campaigns",
      "Implemented inventory and supply chain management",
      "Built brand recognition through content marketing",
      "Established customer loyalty programs"
    ],
    results_detail: "TasteBuds Foods scaled from zero to ₹10Cr revenue in 12 months, established presence on 5 platforms, achieved 85% brand recognition in target markets, and built a customer base of 100K+.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "From a small startup to a recognized brand - this journey wouldn't have been possible without their expertise.",
      author: "Kavya Reddy",
      position: "Co-founder, TasteBuds Foods"
    }
  },
  "electronics-brand-social-commerce": {
    title: "Electronics Brand Social Commerce",
    subtitle: "Integrated influencer marketing with e-commerce for 400% ROI",
    client: "TechGadgets Pro",
    industry: "Electronics & Gadgets",
    duration: "6 months",
    results: {
      roiImprovement: "400%",
      socialSales: "60%",
      influencerPartners: "500+",
      contentPieces: "2000+"
    },
    challenge: "TechGadgets Pro had good products but struggled to connect with tech enthusiasts and convert social media engagement into sales.",
    solution: "We created an integrated social commerce strategy combining influencer partnerships, user-generated content, and seamless shopping experiences across social platforms.",
    implementation: [
      "Partnered with 500+ tech influencers and reviewers",
      "Created shoppable content across social platforms",
      "Developed user-generated content campaigns",
      "Implemented social commerce tracking and analytics",
      "Built community-driven product launches",
      "Integrated social proof and reviews system"
    ],
    results_detail: "The social commerce strategy resulted in 400% ROI improvement, with 60% of sales coming from social channels. We created 2000+ content pieces and built a community of 500+ brand advocates.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "They transformed how we think about social media - from engagement to actual revenue generation.",
      author: "Vikram Singh",
      position: "Marketing Head, TechGadgets Pro"
    }
  },
  "fashion-brand-amazon-growth": {
    title: "Fashion Brand Amazon Growth",
    subtitle: "How we achieved 300% sales increase in 6 months",
    client: "StyleCraft Fashion",
    industry: "Fashion & Apparel",
    duration: "6 months",
    results: {
      salesIncrease: "300%",
      revenueGrowth: "$2.5M",
      conversionRate: "12.5%",
      affiliatePartners: "150+"
    },
    challenge: "StyleCraft Fashion was struggling with low visibility on Amazon and poor conversion rates. Their affiliate program was underperforming with only 20 active partners and minimal sales attribution.",
    solution: "We implemented a comprehensive affiliate marketing strategy combined with Amazon optimization. This included recruiting high-quality affiliates, optimizing product listings, and creating compelling promotional materials.",
    implementation: [
      "Conducted thorough market analysis and competitor research",
      "Recruited 150+ high-quality fashion influencers and content creators",
      "Optimized Amazon product listings with SEO-focused keywords",
      "Created exclusive promotional campaigns for affiliates",
      "Implemented advanced tracking and attribution systems",
      "Developed performance-based commission structures"
    ],
    results_detail: "Within 6 months, StyleCraft Fashion saw unprecedented growth. Sales increased by 300%, revenue grew to $2.5M, and conversion rates improved to 12.5%. The affiliate program now has 150+ active partners driving consistent sales.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "AffiliatePro transformed our entire business. The results exceeded our wildest expectations.",
      author: "Sarah Johnson",
      position: "CEO, StyleCraft Fashion"
    }
  },
  "tech-startup-seo-campaign": {
    title: "Tech Startup SEO Campaign",
    subtitle: "Ranking #1 for 50+ keywords and 500% traffic growth",
    client: "TechFlow Solutions",
    industry: "SaaS Technology",
    duration: "8 months",
    results: {
      trafficIncrease: "500%",
      keywordRankings: "50+",
      organicRevenue: "$1.8M",
      affiliateSignups: "300+"
    },
    challenge: "TechFlow Solutions had virtually no organic presence and their affiliate program was unknown in the competitive SaaS market. They needed to establish authority and attract quality affiliate partners.",
    solution: "We developed a content-driven SEO strategy combined with affiliate recruitment through organic channels. This created a sustainable growth engine that attracted both customers and affiliates.",
    implementation: [
      "Comprehensive keyword research and content strategy",
      "Created 100+ high-quality blog posts and resources",
      "Built authoritative backlink profile",
      "Optimized technical SEO and site performance",
      "Developed affiliate recruitment landing pages",
      "Created SEO-optimized affiliate resources and tools"
    ],
    results_detail: "The campaign resulted in 500% organic traffic growth, #1 rankings for 50+ target keywords, and $1.8M in organic revenue. The affiliate program grew to 300+ active partners.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "The SEO results were incredible, but the affiliate growth was the real game-changer for our business.",
      author: "Michael Chen",
      position: "Founder, TechFlow Solutions"
    }
  },
  "beauty-brand-influencer-strategy": {
    title: "Beauty Brand Influencer Strategy",
    subtitle: "50M+ impressions through strategic influencer partnerships",
    client: "GlowUp Cosmetics",
    industry: "Beauty & Cosmetics",
    duration: "4 months",
    results: {
      impressions: "50M+",
      engagementRate: "8.5%",
      newCustomers: "25,000+",
      roiIncrease: "400%"
    },
    challenge: "GlowUp Cosmetics needed to break into the competitive beauty market and build brand awareness among younger demographics while maintaining profitability.",
    solution: "We created a multi-tiered influencer affiliate program targeting micro and macro influencers in the beauty space, with performance-based compensation and exclusive product access.",
    implementation: [
      "Identified and recruited 200+ beauty influencers",
      "Created tiered commission structure based on performance",
      "Developed exclusive product launch campaigns",
      "Implemented influencer-specific tracking codes",
      "Created content guidelines and brand assets",
      "Established long-term partnership agreements"
    ],
    results_detail: "The campaign generated 50M+ impressions with an 8.5% engagement rate, acquired 25,000+ new customers, and achieved a 400% ROI increase through strategic influencer partnerships.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    testimonial: {
      quote: "The influencer strategy didn't just increase sales, it built our entire brand identity in the market.",
      author: "Emma Rodriguez",
      position: "Marketing Director, GlowUp Cosmetics"
    }
  }
};

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:caseId");
  const caseId = params?.caseId;
  const caseStudy = caseId ? caseStudyData[caseId as keyof typeof caseStudyData] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
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
        title={`${caseStudy.title} - Case Study | AffiliatePro Solutions`}
        description={`${caseStudy.subtitle}. Learn how ${caseStudy.client} achieved remarkable results with our affiliate marketing solutions.`}
        keywords={`case study, ${caseStudy.industry.toLowerCase()}, affiliate marketing success, ${caseStudy.client}`}
        type="article"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <article className="pt-24">
          <header className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/"}
                className="mb-6 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
              
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {caseStudy.subtitle}
                </p>
                
                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(caseStudy.results).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border/50">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-12"
              />

              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.challenge}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-accent" />
                    Our Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {caseStudy.solution}
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-secondary" />
                    Implementation Process
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.implementation.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {caseStudy.results_detail}
                  </p>
                </section>

                {/* Testimonial */}
                <section className="mb-12">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
                    <blockquote className="text-2xl font-semibold text-foreground mb-4 italic">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{caseStudy.testimonial.author}</div>
                        <div className="text-muted-foreground">{caseStudy.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can replicate this success for your business.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Start Your Success Story
              </Button>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
}