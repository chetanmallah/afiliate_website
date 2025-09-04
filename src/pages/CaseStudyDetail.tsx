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