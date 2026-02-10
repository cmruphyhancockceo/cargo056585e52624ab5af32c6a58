import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MapPin, Truck } from "lucide-react";
import { ShipmentForm } from "./ShipmentForm";

interface Shipment {
  id: string;
  trackingId: string;
  senderName: string;
  receiverName: string;
  origin: string;
  destination: string;
  status: string;
  currentLocation: string;
  estimatedDelivery: string;
}

interface ShipmentTableProps {
  shipments: Shipment[];
  onUpdate: (data: any) => void;
  onDelete: (id: string) => void;
}

export function ShipmentTable({ shipments, onUpdate, onDelete }: ShipmentTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800 hover:bg-green-100";
      case "In Transit": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Pending": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Out for Delivery": return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "On Hold": return "bg-red-100 text-red-800 hover:bg-red-100";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-md border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="font-bold">Tracking ID</TableHead>
            <TableHead className="font-bold">Status</TableHead>
            <TableHead className="font-bold hidden md:table-cell">Customer</TableHead>
            <TableHead className="font-bold hidden md:table-cell">Route</TableHead>
            <TableHead className="font-bold hidden lg:table-cell">Location</TableHead>
            <TableHead className="font-bold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-32 text-center text-muted-foreground">
                No shipments found. Create one to get started.
              </TableCell>
            </TableRow>
          ) : (
            shipments.map((shipment) => (
              <TableRow key={shipment.id} className="hover:bg-slate-50/50">
                <TableCell className="font-mono font-medium text-primary">
                  {shipment.trackingId}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`border-0 ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{shipment.senderName}</span>
                    <span className="text-xs text-muted-foreground">To: {shipment.receiverName}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      {shipment.origin}
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      {shipment.destination}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-3.5 w-3.5" />
                    {shipment.currentLocation || "N/A"}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <ShipmentForm 
                      onSubmit={onUpdate} 
                      defaultValues={shipment}
                      trigger={
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                          <Edit className="h-4 w-4" />
                        </Button>
                      }
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => onDelete(shipment.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
