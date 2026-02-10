import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

interface ShipmentData {
  id?: string;
  trackingId: string;
  senderName: string;
  receiverName: string;
  origin: string;
  destination: string;
  status: string;
  currentLocation: string;
  estimatedDelivery: string;
}

interface ShipmentFormProps {
  onSubmit: (data: ShipmentData) => void;
  defaultValues?: ShipmentData;
  trigger?: React.ReactNode;
}

export function ShipmentForm({ onSubmit, defaultValues, trigger }: ShipmentFormProps) {
  const [open, setOpen] = useState(false);
  
  // Use a simple random ID generator for new tracking numbers if not provided
  const generateTrackingId = () => `CCE-${Math.floor(Math.random() * 900000) + 100000}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      id: defaultValues?.id,
      trackingId: (formData.get("trackingId") as string) || generateTrackingId(),
      senderName: formData.get("senderName") as string,
      receiverName: formData.get("receiverName") as string,
      origin: formData.get("origin") as string,
      destination: formData.get("destination") as string,
      status: formData.get("status") as string,
      currentLocation: formData.get("currentLocation") as string,
      estimatedDelivery: formData.get("estimatedDelivery") as string,
    };
    
    onSubmit(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2">
            <Plus className="h-4 w-4" /> Create Shipment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{defaultValues ? "Edit Shipment" : "Create New Shipment"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="trackingId">Tracking ID</Label>
              <Input 
                id="trackingId" 
                name="trackingId" 
                defaultValue={defaultValues?.trackingId || generateTrackingId()} 
                readOnly
                className="bg-muted font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select name="status" defaultValue={defaultValues?.status || "Pending"}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Transit">In Transit</SelectItem>
                  <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4 border rounded-lg p-4 bg-slate-50">
            <h4 className="font-medium text-sm text-slate-500 uppercase tracking-wider">Customer Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="senderName">Sender Name</Label>
                <Input id="senderName" name="senderName" defaultValue={defaultValues?.senderName} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="receiverName">Receiver Name</Label>
                <Input id="receiverName" name="receiverName" defaultValue={defaultValues?.receiverName} required />
              </div>
            </div>
          </div>

          <div className="space-y-4 border rounded-lg p-4 bg-slate-50">
            <h4 className="font-medium text-sm text-slate-500 uppercase tracking-wider">Route Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input id="origin" name="origin" defaultValue={defaultValues?.origin} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" name="destination" defaultValue={defaultValues?.destination} required />
              </div>
            </div>
          </div>

          <div className="space-y-4 border rounded-lg p-4 bg-slate-50">
            <h4 className="font-medium text-sm text-slate-500 uppercase tracking-wider">Tracking Info</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentLocation">Current Location</Label>
                <Input id="currentLocation" name="currentLocation" defaultValue={defaultValues?.currentLocation} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estimatedDelivery">Est. Delivery Date</Label>
                <Input id="estimatedDelivery" name="estimatedDelivery" type="date" defaultValue={defaultValues?.estimatedDelivery} required />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className="bg-secondary text-white hover:bg-secondary/90">
              {defaultValues ? "Update Shipment" : "Create Shipment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
