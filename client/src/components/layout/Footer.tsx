import { Ship, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "wouter";
import logo from '@assets/IMG_3724_1765474944967.jpeg';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <img src={logo} alt="Cargo Comet Express Logo" className="h-12 w-auto object-contain bg-white rounded p-1" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white">CARGO COMET</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">EXPRESS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Global logistics solutions for businesses of all sizes. We ensure your cargo reaches its destination safely and on time, anywhere in the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-secondary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-secondary transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/"><a className="hover:text-secondary transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="hover:text-secondary transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Services</a></Link></li>
              <li><Link href="/tracking"><a className="hover:text-secondary transition-colors">Track Shipment</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services/air"><a className="hover:text-secondary transition-colors">Air Freight</a></Link></li>
              <li><Link href="/services/ocean"><a className="hover:text-secondary transition-colors">Ocean Freight</a></Link></li>
              <li><Link href="/services/road"><a className="hover:text-secondary transition-colors">Road Transport</a></Link></li>
              <li><Link href="/services/warehousing"><a className="hover:text-secondary transition-colors">Warehousing</a></Link></li>
              <li><Link href="/services/customs"><a className="hover:text-secondary transition-colors">Customs Brokerage</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>123 Logistics Way, Harbor District, New York, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@cargocometexpress.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cargo Comet Express. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
