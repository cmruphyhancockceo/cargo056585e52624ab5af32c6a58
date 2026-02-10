import heroImage from '@assets/generated_images/logistics_hero_image.png';
import { TrackingWidget } from './TrackingWidget';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center items-start pt-20">
        <div className="max-w-2xl mb-8 animate-in slide-in-from-left duration-700">
          <div className="inline-block bg-secondary text-white px-3 py-1 text-sm font-bold uppercase tracking-wider mb-4 rounded-sm">
            Global Logistics Partner
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            WE DELIVER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">EXCELLENCE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Seamless supply chain solutions connecting your business to the world. 
            Fast, reliable, and secure freight services across air, sea, and land.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-8">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-14 px-8">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Floating Tracking Widget (Desktop: Absolute right, Mobile: Stacked) */}
        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[400px] animate-in fade-in slide-in-from-right duration-1000">
          <TrackingWidget />
        </div>
      </div>
      
      {/* Mobile Widget Container - below hero content */}
      <div className="lg:hidden px-4 pb-12 w-full flex justify-center">
        <TrackingWidget />
      </div>
    </div>
  );
}
