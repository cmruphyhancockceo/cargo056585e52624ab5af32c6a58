import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, Truck, Package, ArrowRight, Anchor, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "When time is critical, our air freight services offer the fastest route for your cargo.",
      features: ["Next Flight Out", "Consolidation Services", "Door-to-Door Delivery", "Charter Services"]
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective solutions for large shipments, connecting major ports worldwide.",
      features: ["Full Container Load (FCL)", "Less than Container Load (LCL)", "Break Bulk", "Port-to-Port"]
    },
    {
      icon: Truck,
      title: "Road Transport",
      description: "Reliable ground transportation network ensuring seamless domestic and cross-border delivery.",
      features: ["Full Truck Load (FTL)", "Less than Truck Load (LTL)", "Express Trucking", "Temperature Controlled"]
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Strategic storage solutions with advanced inventory management systems.",
      features: ["Short & Long Term Storage", "Pick & Pack", "Distribution", "Inventory Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your unique supply chain needs.
            </p>
          </div>
        </div>

        {/* Main Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-secondary/20 transition-all">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">How We Work</h2>
              <p className="text-muted-foreground text-lg">Simplified shipping process for your peace of mind.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Book", desc: "Request a quote and book your shipment online." },
                { number: "02", title: "Pack", desc: "We pick up and securely pack your cargo." },
                { number: "03", title: "Ship", desc: "Your goods travel via our optimized global network." },
                { number: "04", title: "Deliver", desc: "Safe on-time delivery to the final destination." }
              ].map((step, i) => (
                <div key={i} className="relative p-6 text-center group">
                  <div className="text-6xl font-bold text-slate-200 mb-4 group-hover:text-secondary/20 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Need a Specialized Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We handle project cargo, dangerous goods, and time-critical shipments with expertise.
            </p>
            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 font-bold h-14 px-10">
              Contact Our Experts
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
