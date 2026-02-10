import { Link, useLocation } from "wouter";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from '@assets/IMG_3724_1765474944967.jpeg';

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tracking", href: "/tracking" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" /> info@cargocometexpress.com
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="hover:text-secondary transition-colors font-medium">Admin Panel</Link>
            <Link href="/support" className="hover:text-secondary transition-colors">Support</Link>
            <Link href="/careers" className="hover:text-secondary transition-colors">Careers</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img src={logo} alt="Cargo Comet Express Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-primary">CARGO COMET</span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">EXPRESS</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a 
                className={`text-sm font-medium transition-colors hover:text-secondary uppercase tracking-wide
                  ${location === item.href ? "text-secondary font-bold" : "text-foreground"}`}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a 
                    className="text-lg font-medium py-2 border-b"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90 text-white mt-4 w-full">
                Get a Quote
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
