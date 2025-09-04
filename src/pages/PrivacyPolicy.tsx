import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - AffiliatePro Solutions"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information on our affiliate marketing platform."
        keywords="privacy policy, data protection, affiliate marketing privacy, user data security"
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
                Privacy Policy
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
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground">
                      We use your information to provide, maintain, and improve our affiliate marketing platform and services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p className="text-muted-foreground">
                      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy, please contact us at privacy@affiliatepro.com
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