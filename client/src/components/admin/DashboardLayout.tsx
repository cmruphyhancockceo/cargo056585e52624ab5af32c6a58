import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut, 
  Users,
  Menu,
  Ship,
  Search,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import logo from '@assets/IMG_3724_1765474944967.jpeg';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Package, label: "Shipments", href: "/admin/shipments" },
    { icon: Users, label: "Customers", href: "/admin/customers" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-slate-900 text-white">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <img src={logo} alt="Logo" className="h-8 w-auto rounded bg-white p-0.5" />
        <span className="font-heading font-bold text-lg tracking-wide">ADMIN PANEL</span>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
              ${location === item.href 
                ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}>
              <item.icon className="h-5 w-5" />
              {item.label}
            </a>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800">
        <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 gap-3">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 shrink-0 shadow-xl z-20">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 border-r-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            
            <div className="relative hidden sm:block w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search shipments, tracking IDs..." className="pl-9 bg-slate-100 border-none focus-visible:ring-1 focus-visible:ring-secondary" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
            </Button>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-700">Admin User</p>
                <p className="text-xs text-muted-foreground">Logistics Manager</p>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
