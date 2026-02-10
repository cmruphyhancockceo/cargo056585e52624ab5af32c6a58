import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Ship, Globe, Users, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Countries Served", value: "150+" },
    { label: "Team Members", value: "1200+" },
    { label: "Global Offices", value: "45" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">About Cargo Comet Express</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connecting the world through reliable, efficient, and innovative logistics solutions since 1998.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Delivering Excellence, Every Mile of the Way</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At Cargo Comet Express, we believe that logistics is more than just moving goods—it's about powering businesses, connecting communities, and enabling growth. Our mission is to provide seamless, transparent, and reliable supply chain solutions that give our clients a competitive edge in the global marketplace.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With a commitment to innovation and sustainability, we are redefining the standards of the logistics industry, ensuring that your cargo is not just delivered, but cared for with the highest level of professionalism.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Warehouse Operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h2>
              <p className="text-muted-foreground text-lg">
                Built on a foundation of trust and integrity, our core values drive everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, title: "Global Network", desc: "Extensive reach across 6 continents." },
                { icon: Ship, title: "Reliability", desc: "99.8% on-time delivery track record." },
                { icon: Users, title: "Customer First", desc: "Dedicated support team available 24/7." },
                { icon: Award, title: "Excellence", desc: "Award-winning logistics services." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.value}</div>
                  <div className="text-gray-300 uppercase tracking-wide text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
