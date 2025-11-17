import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Hero from "@/components/hero-section";
import Carousel from "@/components/carousel";
import Features from "@/components/Features";
import ServicesSection from "@/components/services-section";
import Portfolio from "@/components/portfolio-section";
import Team from "@/components/Team";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SEOHead
        title="gggg AffiliatePro Solutions - Advanced Affiliate Marketing Platform"
        description="Transform your affiliate marketing with our comprehensive platform. Track performance, manage partnerships, and scale your affiliate business with enterprise-grade tools."
        keywords="affiliate marketing platform, affiliate tracking, performance marketing, affiliate management, digital marketing tools"
      />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Carousel />
          <Features />
          <ServicesSection />
          <Portfolio />
          <Team />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}