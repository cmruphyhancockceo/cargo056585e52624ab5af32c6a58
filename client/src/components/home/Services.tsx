import airImage from '@assets/generated_images/air_freight_service.png';
import seaImage from '@assets/generated_images/ocean_freight_service.png';
import roadImage from '@assets/generated_images/road_transport_service.png';
import { Plane, Ship, Truck, ArrowRight, Package, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Services() {
  const services = [
    {
      title: "Air Freight",
      description: "Rapid global delivery for time-critical shipments. We ensure your cargo reaches its destination safely and on schedule.",
      image: airImage,
      icon: <Plane className="h-8 w-8 text-secondary" />,
      features: ["Next Flight Out", "Express Delivery", "Charter Services"]
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective solutions for large volume cargo. Full container load (FCL) and less than container load (LCL) options available.",
      image: seaImage,
      icon: <Ship className="h-8 w-8 text-secondary" />,
      features: ["FCL & LCL", "Project Cargo", "Port-to-Port"]
    },
    {
      title: "Road Transport",
      description: "Flexible overland transportation network connecting major hubs. Reliable door-to-door delivery services across the continent.",
      image: roadImage,
      icon: <Truck className="h-8 w-8 text-secondary" />,
      features: ["FTL & LTL", "Temperature Controlled", "Express Trucking"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl font-bold text-primary mb-6">World-Class Logistics Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive logistics solutions tailored to your specific needs, 
            ensuring efficiency and reliability at every step of the supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Learn More
                  </Button>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-4 rounded-tl-xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:text-secondary transition-colors">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Package, label: "Packages Delivered", value: "2M+" },
            { icon: Clock, label: "On-Time Delivery", value: "99.8%" },
            { icon: Ship, label: "Countries Served", value: "150+" },
            { icon: Shield, label: "Safety Rating", value: "A+" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <stat.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium uppercase text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
