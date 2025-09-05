import { useLocation } from "wouter";

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-black text-gradient">AffiliatePro</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your affiliate marketing with our comprehensive platform. Track performance, manage partnerships, and scale your business.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-secondary/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('/services/real-time-tracking')} className="text-muted-foreground hover:text-primary transition-colors text-left">Real-Time Tracking</button></li>
              <li><button onClick={() => handleNavigation('/services/performance-analytics')} className="text-muted-foreground hover:text-primary transition-colors text-left">Performance Analytics</button></li>
              <li><button onClick={() => handleNavigation('/services/affiliate-management')} className="text-muted-foreground hover:text-primary transition-colors text-left">Affiliate Management</button></li>
              <li><button onClick={() => handleNavigation('/services/fraud-protection')} className="text-muted-foreground hover:text-primary transition-colors text-left">Fraud Protection</button></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('/about')} className="text-muted-foreground hover:text-primary transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Careers</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Blog</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Documentation</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">API Reference</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Support Center</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Community</button></li>
            </ul>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              &copy; 2025 AffiliatePro Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button onClick={() => handleNavigation('/privacy-policy')} className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</button>
              <button onClick={() => handleNavigation('/terms-of-service')} className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</button>
              <button onClick={() => handleNavigation('/privacy-policy')} className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}