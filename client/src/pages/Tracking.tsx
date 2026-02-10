import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar, Truck, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Tracking() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialId = searchParams.get("id") || "";
  
  const [trackingId, setTrackingId] = useState(initialId);
  const [hasSearched, setHasSearched] = useState(!!initialId);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setHasSearched(true);
    }
  };

  // Mock tracking result
  const trackingData = {
    id: trackingId || "CCE-123456",
    status: "In Transit",
    origin: "Shanghai, CN",
    destination: "Los Angeles, USA",
    estimatedDelivery: "Dec 15, 2024",
    history: [
      { date: "Dec 12, 14:00", status: "Departed from Facility", location: "Shanghai Port", icon: Ship },
      { date: "Dec 12, 09:30", status: "Arrived at Facility", location: "Shanghai Port", icon: Truck },
      { date: "Dec 11, 18:00", status: "Picked Up", location: "Shanghai Warehouse", icon: Package },
      { date: "Dec 11, 10:00", status: "Shipment Information Received", location: "Online", icon: FileText },
    ]
  };

  // Helper imports for mock data
  function Ship(props: any) { return <Clock {...props} /> } 
  function Package(props: any) { return <Clock {...props} /> } 
  function FileText(props: any) { return <Clock {...props} /> } 

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Track Your Shipment</h1>
            <p className="text-lg text-gray-300 mb-8">Real-time visibility for your cargo worldwide.</p>
            
            <form onSubmit={handleTrack} className="max-w-xl mx-auto flex gap-2">
              <Input 
                placeholder="Enter Tracking ID" 
                className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-secondary"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <Button type="submit" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg">
                TRACK
              </Button>
            </form>
          </div>
        </div>

        {/* Results Section */}
        {hasSearched && (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                <div className="bg-slate-50 p-6 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide">Tracking Number</span>
                    <h2 className="text-2xl font-bold text-primary font-mono">{trackingData.id}</h2>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-bold text-sm uppercase">
                    {trackingData.status}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Origin</p>
                        <p className="font-bold text-lg">{trackingData.origin}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Destination</p>
                        <p className="font-bold text-lg">{trackingData.destination}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                        <p className="font-bold text-lg">{trackingData.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
                    {trackingData.history.map((event, i) => (
                      <div key={i} className="relative pl-8">
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${i === 0 ? "bg-secondary" : "bg-slate-300"}`}></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                          <div>
                            <p className={`font-bold ${i === 0 ? "text-primary text-lg" : "text-slate-600"}`}>{event.status}</p>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                          </div>
                          <div className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded">
                            {event.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!hasSearched && (
          <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
            <Search className="h-16 w-16 mx-auto mb-4 text-slate-200" />
            <h3 className="text-xl font-medium text-slate-400">Enter a tracking ID to see shipment details</h3>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
