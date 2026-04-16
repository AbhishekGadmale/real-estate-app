import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
const tagColors = {
    new: 'bg-cyan-500 hover:bg-cyan-600',
    featured: 'bg-amber-500 hover:bg-amber-600',
    hot: 'bg-red-500 hover:bg-red-600',
};
export default function PropertyCard({ property, index = 0 }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(price);
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }, whileHover: { y: -4 }, className: "group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300", children: [_jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [_jsx("img", { src: property.images[0], alt: property.title, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }), property.status === 'sold' && (_jsx("div", { className: "absolute inset-0 bg-black/50 flex items-center justify-center", children: _jsx(Badge, { className: "bg-gray-600 text-white text-sm px-4 py-1", children: "SOLD" }) })), property.tag && property.status !== 'sold' && (_jsx("div", { className: "absolute top-4 left-4", children: _jsx(Badge, { className: `${tagColors[property.tag]} text-white text-xs px-3 py-1 capitalize`, children: property.tag }) })), property.featured && !property.tag && property.status !== 'sold' && (_jsx("div", { className: "absolute top-4 left-4", children: _jsx(Badge, { className: "bg-blue-600 text-white text-xs px-3 py-1", children: "Featured" }) })), _jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: _jsx(Button, { asChild: true, variant: "secondary", className: "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: _jsxs(Link, { to: `/property/${property.id}`, children: ["View Details ", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }) }) })] }), _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "text-xl font-bold text-blue-900", children: formatPrice(property.price) }), property.status === 'sold' && _jsx(Badge, { variant: "secondary", className: "text-gray-500", children: "Sold" })] }), _jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-1", children: property.title }), _jsxs("div", { className: "flex items-center text-gray-500 text-sm mb-4", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1 flex-shrink-0" }), _jsx("span", { className: "line-clamp-1", children: property.location })] }), _jsx("div", { className: "flex items-center justify-between pt-4 border-t border-gray-100", children: _jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Bed, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: property.bedrooms })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Bath, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: property.bathrooms })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Square, { className: "h-4 w-4 mr-1" }), _jsxs("span", { children: [property.area.toLocaleString(), " sqft"] })] })] }) })] })] }));
}
