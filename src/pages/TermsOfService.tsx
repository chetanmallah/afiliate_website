import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service - AffiliatePro Solutions"
        description="Read our terms of service to understand the rules and regulations for using our affiliate marketing platform and services."
        keywords="terms of service, affiliate marketing terms, platform usage terms, service agreement"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
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
              
              <h1 className="text-4xl md:text-5xl font-black mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: January 2025
              </p>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 space-y-8">
                  
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By accessing and using AffiliatePro Solutions, you accept and agree to be bound by the terms and provisions of this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
                    <p className="text-muted-foreground">
                      You may use our services only for lawful purposes and in accordance with these Terms of Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                    <p className="text-muted-foreground">
                      You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about these Terms of Service, please contact us at legal@affiliatepro.com
                    </p>
                  </section>

                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}