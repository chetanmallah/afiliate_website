import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us - AffiliatePro Solutions"
        description="Get in touch with our affiliate marketing experts. Contact us for consultations, support, or to learn more about our affiliate solutions."
        keywords="contact affiliatepro, affiliate marketing consultation, performance marketing support, affiliate platform help"
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
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to transform your affiliate marketing? Let's discuss how we can help you achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "hello@affiliatepro.com",
                    description: "Send us an email anytime"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+1 (555) 123-4567",
                    description: "Mon-Fri 9AM-6PM EST"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "San Francisco, CA",
                    description: "Schedule an office visit"
                  }
                ].map((contact, index) => (
                  <div key={index} className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{contact.content}</p>
                    <p className="text-muted-foreground">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
}