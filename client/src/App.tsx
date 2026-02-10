import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Tracking from "@/pages/Tracking";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      
      {/* Main Pages */}
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/tracking" component={Tracking} />
      <Route path="/contact" component={Contact} />
      
      {/* Service Sub-pages (Redirect to Services for now) */}
      <Route path="/services/:subservice" component={Services} />

      {/* Admin sub-routes redirected to Admin component for mockup */}
      <Route path="/admin/shipments" component={Admin} />
      <Route path="/admin/customers" component={Admin} />
      <Route path="/admin/settings" component={Admin} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
