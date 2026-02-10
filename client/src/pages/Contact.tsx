import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? Our global support team is here to help 24/7.
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground mb-8">
                    Whether you need a quote, have a question about a shipment, or want to partner with us, we're just a message away.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6 flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Headquarters</h4>
                        <p className="text-muted-foreground">123 Logistics Way<br />Harbor District, New York, NY 10001</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Phone className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Phone</h4>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm EST</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardContent className="p-6 flex items-start gap-4">
                      <Mail className="h-6 w-6 text-secondary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">info@cargocometexpress.com</p>
                        <p className="text-sm text-muted-foreground mt-1">support@cargocometexpress.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email</label>
                        <Input type="email" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Phone (Optional)</label>
                        <Input type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Subject</label>
                      <Input placeholder="Inquiry about..." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Message</label>
                      <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold h-12 px-8">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <div className="h-[400px] w-full bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
               <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
               <p className="text-slate-500 font-medium">Interactive Map Loading...</p>
             </div>
          </div>
          {/* In a real app, embed Google Maps iframe here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647987654321!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(100%)'}} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
