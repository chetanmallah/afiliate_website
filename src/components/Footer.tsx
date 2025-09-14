import { useLocation, Link } from "wouter";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // If we're not on home page, go to home first
      if (location !== '/') {
        setLocation('/');
        setTimeout(() => {
          const element = document.getElementById(path.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setLocation(path);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-black text-gradient">GrowthHexa</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your e-commerce business with our comprehensive digital marketing solutions. From influencer partnerships to marketplace optimization.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-600', url: 'https://linkedin.com/company/growthhexa' },
                { name: 'Twitter', icon: '𝕏', color: 'hover:bg-gray-800', url: 'https://twitter.com/growthhexa' },
                { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-600', url: 'https://instagram.com/growthhexa' },
                { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-700', url: 'https://facebook.com/growthhexa' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-secondary/50 ${social.color} text-muted-foreground hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('/services/influencer-marketing')} className="text-muted-foreground hover:text-primary transition-colors text-left">Influencer Marketing</button></li>
              <li><button onClick={() => handleNavigation('/services/seo-optimization')} className="text-muted-foreground hover:text-primary transition-colors text-left">SEO Optimization</button></li>
              <li><button onClick={() => handleNavigation('/services/amazon-listing-optimization')} className="text-muted-foreground hover:text-primary transition-colors text-left">Amazon Optimization</button></li>
              <li><button onClick={() => handleNavigation('/services/digital-marketing-growth')} className="text-muted-foreground hover:text-primary transition-colors text-left">Digital Marketing</button></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('#about')} className="text-muted-foreground hover:text-primary transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNavigation('#contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Careers</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Blog</button></li>
              <li><button onClick={() => handleNavigation('#contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Documentation</button></li>
              <li><button onClick={() => handleNavigation('#contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => handleNavigation('#contact')} className="text-muted-foreground hover:text-primary transition-colors text-left">Support Center</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-muted-foreground hover:text-primary transition-colors text-left">Community</button></li>
            </ul>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              &copy; 2025 GrowthHexa. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button onClick={() => handleNavigation('/privacy-policy')} className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</button>
              <button onClick={() => handleNavigation('/terms-of-service')} className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</button>
              <button onClick={() => handleNavigation('#contact')} className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}