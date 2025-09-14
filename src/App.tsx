import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import ExpertDetail from "@/pages/ExpertDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:serviceId" component={ServiceDetail} />
      <Route path="/case-studies/:caseId" component={CaseStudyDetail} />
      <Route path="/experts/:expertId" component={ExpertDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/services/influencer-marketing" component={ServiceDetail} />
      <Route path="/services/seo-optimization" component={ServiceDetail} />
      <Route path="/services/amazon-listing-optimization" component={ServiceDetail} />
      <Route path="/services/flipkart-and-e-commerce-management" component={ServiceDetail} />
      <Route path="/services/digital-marketing-growth" component={ServiceDetail} />
      <Route path="/services/brand-and-content-strategy" component={ServiceDetail} />
      <Route path="/services/real-time-tracking" component={ServiceDetail} />
      <Route path="/services/automated-payouts" component={ServiceDetail} />
      <Route path="/services/fraud-protection" component={ServiceDetail} />
      <Route path="/services/multi-channel-integration" component={ServiceDetail} />
      <Route path="/services/performance-optimization" component={ServiceDetail} />
      <Route path="/services/global-reach" component={ServiceDetail} />
      <Route path="/case-studies/fashion-brand-amazon-growth" component={CaseStudyDetail} />
      <Route path="/case-studies/tech-startup-seo-campaign" component={CaseStudyDetail} />
      <Route path="/case-studies/beauty-brand-influencer-strategy" component={CaseStudyDetail} />
      <Route path="/case-studies/home-decor-flipkart-success" component={CaseStudyDetail} />
      <Route path="/case-studies/food-brand-multi-platform-growth" component={CaseStudyDetail} />
      <Route path="/case-studies/electronics-brand-social-commerce" component={CaseStudyDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Router />
    </TooltipProvider>
  );
}

export default App;