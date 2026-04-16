import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];
const services = [
    { name: 'Property Sales', href: '/listings' },
    { name: 'Property Purchase', href: '/listings' },
    { name: 'Property Rental', href: '/listings' },
    { name: 'Property Management', href: '/about' },
];
const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
];
export default function Footer() {
    return (_jsxs("footer", { className: "bg-gray-900 text-white", children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [_jsxs("div", { children: [_jsxs(Link, { to: "/", className: "flex items-center space-x-2 mb-6", children: [_jsx(Building2, { className: "h-8 w-8 text-blue-400" }), _jsx("span", { className: "text-xl font-bold", children: "Mantra properties" })] }), _jsx("p", { className: "text-gray-400 text-sm leading-relaxed mb-6", children: "Your trusted partner in finding the perfect property. We specialize in premium real estate across the country." }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social) => (_jsx("a", { href: social.href, className: "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors", "aria-label": social.name, children: _jsx(social.icon, { className: "h-5 w-5" }) }, social.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-6", children: "Quick Links" }), _jsx("ul", { className: "space-y-3", children: quickLinks.map((link) => (_jsx("li", { children: _jsx(Link, { to: link.href, className: "text-gray-400 hover:text-white transition-colors text-sm", children: link.name }) }, link.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-6", children: "Our Services" }), _jsx("ul", { className: "space-y-3", children: services.map((service) => (_jsx("li", { children: _jsx(Link, { to: service.href, className: "text-gray-400 hover:text-white transition-colors text-sm", children: service.name }) }, service.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-6", children: "Contact Us" }), _jsxs("ul", { className: "space-y-4", children: [_jsxs("li", { className: "flex items-start space-x-3", children: [_jsx(MapPin, { className: "h-5 w-5 text-blue-400 mt-0.5" }), _jsxs("span", { className: "text-gray-400 text-sm", children: ["123 Real Estate Ave,", _jsx("br", {}), "Mumbai, NY 10001"] })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx(Phone, { className: "h-5 w-5 text-blue-400" }), _jsx("a", { href: "tel:9820018217", className: "text-gray-400 hover:text-white transition-colors text-sm", children: "9820018217" })] }), _jsxs("li", { className: "flex items-center space-x-3", children: [_jsx(Mail, { className: "h-5 w-5 text-blue-400" }), _jsx("a", { href: "mailto:info@estatepro.com", className: "text-gray-400 hover:text-white transition-colors text-sm", children: "info@estatepro.com" })] })] })] })] }) }), _jsx("div", { className: "border-t border-gray-800", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0", children: [_jsxs("p", { className: "text-gray-400 text-sm", children: ["\u00A9 ", new Date().getFullYear(), " Mantra properties. All rights reserved."] }), _jsxs("div", { className: "flex space-x-6", children: [_jsx(Link, { to: "#", className: "text-gray-400 hover:text-white text-sm transition-colors", children: "Privacy Policy" }), _jsx(Link, { to: "#", className: "text-gray-400 hover:text-white text-sm transition-colors", children: "Terms of Service" })] })] }) }) })] }));
}
