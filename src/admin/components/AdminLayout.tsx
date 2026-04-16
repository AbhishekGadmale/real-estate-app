import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, LogOut, Menu, Plus, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from 'sonner';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Properties', href: '/admin/properties', icon: Building2 },
  { name: 'Add Property', href: '/admin/properties/add', icon: Plus },
  { name: 'Leads', href: '/admin/leads', icon: Users },
];

export default function AdminLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) =>
  location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.removeItem('estatepro_auth');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const NavContent = () => (
    <>
      <div className="flex items-center space-x-2 mb-8">
        <Building2 className="h-8 w-8 text-blue-400" />
        <div>
          <span className="text-xl font-bold text-white">EstatePro</span>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-4 border-t border-gray-700">
        <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors">
          <Home className="h-5 w-5" />
          <span>Back to Website</span>
        </Link>
        <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="lg:hidden bg-gray-900 text-white p-4 flex items-center justify-between">
        <Link to="/admin/dashboard" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-blue-400" />
          <span className="font-bold">EstatePro Admin</span>
        </Link>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] bg-gray-900 border-gray-800 p-4">
            <div className="flex flex-col h-full">
              <NavContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex">
        <aside className="hidden lg:flex flex-col w-64 bg-gray-900 text-white h-screen sticky top-0 p-4">
          <NavContent />
        </aside>

        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
