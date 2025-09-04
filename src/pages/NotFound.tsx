import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found - AffiliatePro Solutions"
        description="The page you're looking for doesn't exist. Return to our affiliate marketing platform homepage."
        keywords="404, page not found, affiliate marketing platform"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="text-8xl font-black text-gradient mb-8">404</div>
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.location.href = "/"} size="lg">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                  <Button variant="outline" onClick={() => window.history.back()} size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
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