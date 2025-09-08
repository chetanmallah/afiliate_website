import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/hero-section";
import Carousel from "@/components/carousel";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Portfolio from "@/components/portfolio-section";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEOHead
        title="AffiliatePro Solutions - Advanced Affiliate Marketing Platform"
        description="Transform your affiliate marketing with our comprehensive platform. Track performance, manage partnerships, and scale your affiliate business with enterprise-grade tools."
        keywords="affiliate marketing platform, affiliate tracking, performance marketing, affiliate management, digital marketing tools"
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Carousel />
          <Features />
          <Solutions />
          <Portfolio />
          <Team />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}