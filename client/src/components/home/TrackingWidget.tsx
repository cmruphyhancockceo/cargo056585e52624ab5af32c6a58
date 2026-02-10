import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation } from "wouter";

export function TrackingWidget() {
  const [trackingId, setTrackingId] = useState("");
  const [, setLocation] = useLocation();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setLocation(`/tracking?id=${trackingId}`);
    }
  };

  return (
    <Card className="w-full max-w-xl shadow-2xl border-0 overflow-hidden rounded-xl">
      <div className="bg-primary p-4 text-white">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Search className="h-5 w-5 text-secondary" />
          Track Your Shipment
        </h3>
      </div>
      <CardContent className="p-0">
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList className="w-full grid grid-cols-2 rounded-none bg-muted/50 p-0 h-12">
            <TabsTrigger 
              value="tracking" 
              className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-secondary h-full"
            >
              Tracking
            </TabsTrigger>
            <TabsTrigger 
              value="quote" 
              className="rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-secondary h-full"
            >
              Get Quote
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tracking" className="p-6">
            <form onSubmit={handleTrack} className="flex flex-col gap-4">
              <div className="space-y-2">
                <Input 
                  placeholder="Enter Tracking ID (e.g., CCE-123456)" 
                  className="h-12 text-lg border-gray-300 focus-visible:ring-secondary"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <Button type="submit" className="h-12 w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg uppercase">
                Track Cargo
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="quote" className="p-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">Need to ship something? Get a quick competitive quote.</p>
              <Button onClick={() => setLocation("/contact")} className="w-full h-12 bg-primary hover:bg-primary/90 text-white">
                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
