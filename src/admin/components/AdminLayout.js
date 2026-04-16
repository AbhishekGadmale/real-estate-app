import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    const isActive = (path) => location.pathname.startsWith(path);
    const handleLogout = () => {
        localStorage.removeItem('estatepro_auth');
        toast.success('Logged out successfully');
        navigate('/admin/login');
    };
    const NavContent = () => (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center space-x-2 mb-8", children: [_jsx(Building2, { className: "h-8 w-8 text-blue-400" }), _jsxs("div", { children: [_jsx("span", { className: "text-xl font-bold text-white", children: "EstatePro" }), _jsx("p", { className: "text-xs text-gray-400", children: "Admin Panel" })] })] }), _jsx("nav", { className: "flex-1 space-y-1", children: navItems.map((item) => (_jsxs(Link, { to: item.href, onClick: () => setMobileMenuOpen(false), className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.href) ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`, children: [_jsx(item.icon, { className: "h-5 w-5" }), _jsx("span", { children: item.name })] }, item.name))) }), _jsxs("div", { className: "pt-4 border-t border-gray-700", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white transition-colors", children: [_jsx(Home, { className: "h-5 w-5" }), _jsx("span", { children: "Back to Website" })] }), _jsxs("button", { onClick: handleLogout, className: "w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 transition-colors", children: [_jsx(LogOut, { className: "h-5 w-5" }), _jsx("span", { children: "Logout" })] })] })] }));
    return (_jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsxs("div", { className: "lg:hidden bg-gray-900 text-white p-4 flex items-center justify-between", children: [_jsxs(Link, { to: "/admin/dashboard", className: "flex items-center space-x-2", children: [_jsx(Building2, { className: "h-6 w-6 text-blue-400" }), _jsx("span", { className: "font-bold", children: "EstatePro Admin" })] }), _jsxs(Sheet, { open: mobileMenuOpen, onOpenChange: setMobileMenuOpen, children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", className: "text-white", children: _jsx(Menu, { className: "h-6 w-6" }) }) }), _jsx(SheetContent, { side: "left", className: "w-[280px] bg-gray-900 border-gray-800 p-4", children: _jsx("div", { className: "flex flex-col h-full", children: _jsx(NavContent, {}) }) })] })] }), _jsxs("div", { className: "flex", children: [_jsx("aside", { className: "hidden lg:flex flex-col w-64 bg-gray-900 text-white h-screen sticky top-0 p-4", children: _jsx(NavContent, {}) }), _jsx("main", { className: "flex-1 p-4 lg:p-8", children: _jsx(Outlet, {}) })] })] }));
}
