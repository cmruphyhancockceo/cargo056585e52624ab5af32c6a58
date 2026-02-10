import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ship with Confidence?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a competitive quote for your next shipment and experience the Cargo Comet Express difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-10 text-lg">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold h-14 px-10 text-lg">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
