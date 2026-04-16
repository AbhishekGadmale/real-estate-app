import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Phone, Home, Building2, Users, Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Listings', href: '/listings', icon: Building2 },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Contact },
];
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const isActive = (path) => location.pathname === path;
    return (_jsx(motion.header, { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`, children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between h-18 py-4", children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [_jsx(Building2, { className: `h-8 w-8 ${scrolled ? 'text-blue-900' : 'text-white'}` }), _jsx("span", { className: `text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`, children: "Mantra Properties" })] }), _jsx("nav", { className: "hidden md:flex items-center space-x-8", children: navLinks.map((link) => (_jsxs(Link, { to: link.href, className: `relative text-sm font-medium transition-colors ${scrolled
                                ? isActive(link.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                : isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white'}`, children: [link.name, isActive(link.href) && (_jsx(motion.span, { layoutId: "navbar-underline", className: `absolute -bottom-1 left-0 right-0 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}` }))] }, link.name))) }), _jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [_jsxs("a", { href: "tel:9820018217", className: `flex items-center space-x-2 text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`, children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: "+91 9820018217" })] }), _jsx(Button, { asChild: true, className: "bg-blue-900 hover:bg-blue-800 text-white", children: _jsx(Link, { to: "/contact", children: "Contact Us" }) })] }), _jsxs(Sheet, { open: mobileMenuOpen, onOpenChange: setMobileMenuOpen, children: [_jsx(SheetTrigger, { asChild: true, className: "md:hidden", children: _jsx(Button, { variant: "ghost", size: "icon", className: scrolled ? 'text-gray-700' : 'text-white', children: _jsx(Menu, { className: "h-6 w-6" }) }) }), _jsx(SheetContent, { side: "right", className: "w-[300px] bg-white", children: _jsxs("div", { className: "flex flex-col h-full", children: [_jsx("div", { className: "flex items-center justify-between py-4 border-b", children: _jsxs(Link, { to: "/", className: "flex items-center space-x-2", onClick: () => setMobileMenuOpen(false), children: [_jsx(Building2, { className: "h-6 w-6 text-blue-900" }), _jsx("span", { className: "text-lg font-bold text-blue-900", children: "EstatePro" })] }) }), _jsx("nav", { className: "flex-1 py-6", children: _jsx("ul", { className: "space-y-2", children: navLinks.map((link) => (_jsx("li", { children: _jsxs(Link, { to: link.href, onClick: () => setMobileMenuOpen(false), className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive(link.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`, children: [_jsx(link.icon, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: link.name })] }) }, link.name))) }) }), _jsx("div", { className: "py-4 border-t", children: _jsx(Button, { asChild: true, className: "w-full bg-blue-900 hover:bg-blue-800 text-white", children: _jsx(Link, { to: "/contact", onClick: () => setMobileMenuOpen(false), children: "Contact Us" }) }) })] }) })] })] }) }) }));
}
