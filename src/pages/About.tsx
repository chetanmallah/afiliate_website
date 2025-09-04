import { ArrowLeft, Target, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - AffiliatePro Solutions"
        description="Learn about AffiliatePro Solutions, our mission to transform affiliate marketing, and the expert team behind our innovative platform."
        keywords="about affiliatepro, affiliate marketing company, performance marketing experts, affiliate platform team"
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
                  About <span className="text-gradient">AffiliatePro Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're on a mission to transform how businesses approach affiliate marketing through innovative technology and expert guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Target className="w-8 h-8 text-primary" />
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    To democratize affiliate marketing by providing businesses of all sizes with enterprise-grade tools, expert guidance, and innovative solutions that drive measurable growth.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that every business deserves access to sophisticated affiliate marketing capabilities, regardless of their size or technical expertise.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Our mission - transforming affiliate marketing"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Customer Success",
                    description: "Your success is our success. We're committed to delivering results that exceed expectations."
                  },
                  {
                    icon: Award,
                    title: "Innovation",
                    description: "We continuously innovate to stay ahead of industry trends and provide cutting-edge solutions."
                  },
                  {
                    icon: Target,
                    title: "Transparency",
                    description: "We believe in complete transparency in our processes, pricing, and performance metrics."
                  }
                ].map((value, index) => (
                  <div key={index} className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your affiliate marketing strategy.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}