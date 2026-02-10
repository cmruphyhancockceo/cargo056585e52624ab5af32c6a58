import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/admin/DashboardLayout";
import { ShipmentTable } from "@/components/admin/ShipmentTable";
import { ShipmentForm } from "@/components/admin/ShipmentForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock Data
const initialShipments = [
  {
    id: "1",
    trackingId: "CCE-849201",
    senderName: "Acme Corp",
    receiverName: "John Doe",
    origin: "Shanghai, CN",
    destination: "Los Angeles, USA",
    status: "In Transit",
    currentLocation: "Pacific Ocean",
    estimatedDelivery: "2024-12-25"
  },
  {
    id: "2",
    trackingId: "CCE-293847",
    senderName: "Tech Solutions Ltd",
    receiverName: "Sarah Smith",
    origin: "Berlin, DE",
    destination: "London, UK",
    status: "Delivered",
    currentLocation: "London, UK",
    estimatedDelivery: "2024-12-10"
  },
  {
    id: "3",
    trackingId: "CCE-738291",
    senderName: "Global Trade Inc",
    receiverName: "Mike Johnson",
    origin: "New York, USA",
    destination: "Tokyo, JP",
    status: "Pending",
    currentLocation: "New York Warehouse",
    estimatedDelivery: "2024-12-30"
  }
];

export default function Admin() {
  const [shipments, setShipments] = useState(initialShipments);
  const { toast } = useToast();

  const handleCreate = (data: any) => {
    const newShipment = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setShipments([newShipment, ...shipments]);
    toast({
      title: "Shipment Created",
      description: `Tracking ID ${newShipment.trackingId} has been generated.`,
    });
  };

  const handleUpdate = (data: any) => {
    setShipments(shipments.map(s => s.id === data.id ? data : s));
    toast({
      title: "Shipment Updated",
      description: `Details for ${data.trackingId} have been saved.`,
    });
  };

  const handleDelete = (id: string) => {
    setShipments(shipments.filter(s => s.id !== id));
    toast({
      title: "Shipment Deleted",
      description: "The shipment has been removed from the database.",
      variant: "destructive"
    });
  };

  // Stats
  const stats = [
    { label: "Total Shipments", value: shipments.length, icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "In Transit", value: shipments.filter(s => s.status === "In Transit").length, icon: Truck, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Delivered", value: shipments.filter(s => s.status === "Delivered").length, icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
    { label: "Pending", value: shipments.filter(s => s.status === "Pending").length, icon: AlertCircle, color: "text-yellow-600", bg: "bg-yellow-100" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-muted-foreground">Manage your shipments and tracking updates.</p>
          </div>
          <ShipmentForm onSubmit={handleCreate} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Shipments */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recent Shipments</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <ShipmentTable 
            shipments={shipments} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete} 
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
