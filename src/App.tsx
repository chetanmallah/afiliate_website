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