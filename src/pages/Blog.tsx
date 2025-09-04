import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const blogPosts = [
    {
      title: "10 Affiliate Marketing Trends for 2025",
      excerpt: "Discover the latest trends shaping the affiliate marketing landscape and how to leverage them for growth.",
      author: "Chandan Kumar Mallah",
      date: "January 15, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Trends"
    },
    {
      title: "Building High-Converting Affiliate Landing Pages",
      excerpt: "Learn the essential elements of landing pages that convert visitors into customers through affiliate partnerships.",
      author: "Priya Patel",
      date: "January 12, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Optimization"
    },
    {
      title: "The Complete Guide to Affiliate Fraud Prevention",
      excerpt: "Protect your affiliate program from fraud with our comprehensive guide to detection and prevention strategies.",
      author: "Arjun Gupta",
      date: "January 10, 2025",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Security"
    }
  ];

  return (
    <>
      <SEOHead
        title="Blog - Affiliate Marketing Insights | AffiliatePro Solutions"
        description="Stay updated with the latest affiliate marketing trends, strategies, and insights from our expert team. Learn how to optimize your affiliate programs for maximum growth."
        keywords="affiliate marketing blog, performance marketing insights, affiliate strategy, marketing trends, affiliate optimization"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="container mx-auto px-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/"}
                className="mb-6 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Affiliate Marketing <span className="text-gradient">Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Stay ahead of the curve with expert insights, strategies, and trends in affiliate marketing.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-accent">
                        Read More →
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}