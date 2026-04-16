import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Phone, MessageCircle, ArrowLeft, Check, Calendar, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';
import ScheduleVisitModal from '@/components/ScheduleVisitModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getStoredProperties } from '@/lib/data';
const tagColors = {
    new: 'bg-cyan-500',
    featured: 'bg-amber-500',
    hot: 'bg-red-500',
};
export default function PropertyDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const properties = getStoredProperties();
        const found = properties.find((p) => String(p.id) === id);
        if (found)
            setProperty(found);
        setLoading(false);
    }, [id]);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
    };
    const handleShare = async () => {
        try {
            await navigator.share({
                title: property?.title,
                text: `Check out this property: ${property?.title}`,
                url: window.location.href,
            });
        }
        catch {
            navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard!');
        }
    };
    const handleWhatsApp = () => {
        const message = `Hi, I am interested in "${property?.title}" listed at ${formatPrice(property?.price || 0)}. Can you provide more information?`;
        window.open(`https://wa.me/+15551234567?text=${encodeURIComponent(message)}`, '_blank');
    };
    const handleCall = () => {
        window.location.href = 'tel:+15551234567';
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" }) }));
    }
    if (!property) {
        return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Navbar, {}), _jsxs("div", { className: "pt-24 pb-12 text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Property Not Found" }), _jsx("p", { className: "text-gray-600 mb-6", children: "The property you are looking for does not exist or has been removed." }), _jsx(Button, { asChild: true, children: _jsx(Link, { to: "/listings", children: "Browse Properties" }) })] }), _jsx(Footer, {})] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 pb-4 bg-white border-b", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex items-center justify-between py-4", children: [_jsxs(Button, { variant: "ghost", onClick: () => navigate(-1), className: "text-gray-600", children: [_jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back"] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: "outline", size: "icon", onClick: () => setIsFavorite(!isFavorite), children: _jsx(Heart, { className: `h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}` }) }), _jsx(Button, { variant: "outline", size: "icon", onClick: handleShare, children: _jsx(Share2, { className: "h-5 w-5" }) })] })] }) }) }), _jsx("section", { className: "py-8", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsxs("div", { className: "lg:col-span-2 space-y-8", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: _jsx(ImageGallery, { images: property.images, title: property.title }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, className: "bg-white rounded-xl shadow-sm p-6", children: [_jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4 mb-4", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [property.tag && _jsx(Badge, { className: `${tagColors[property.tag]} text-white capitalize`, children: property.tag }), property.status === 'sold' && _jsx(Badge, { className: "bg-gray-500 text-white", children: "Sold" })] }), _jsx("h1", { className: "text-2xl md:text-3xl font-bold text-gray-900", children: property.title })] }), _jsx("div", { className: "text-right", children: _jsx("p", { className: "text-3xl font-bold text-blue-900", children: formatPrice(property.price) }) })] }), _jsxs("div", { className: "flex items-center text-gray-600 mb-6", children: [_jsx(MapPin, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: property.location })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 py-6 border-y border-gray-100", children: [_jsxs("div", { className: "text-center", children: [_jsx(Bed, { className: "h-6 w-6 mx-auto mb-2 text-blue-600" }), _jsx("p", { className: "text-2xl font-semibold", children: property.bedrooms }), _jsx("p", { className: "text-sm text-gray-500", children: "Bedrooms" })] }), _jsxs("div", { className: "text-center", children: [_jsx(Bath, { className: "h-6 w-6 mx-auto mb-2 text-blue-600" }), _jsx("p", { className: "text-2xl font-semibold", children: property.bathrooms }), _jsx("p", { className: "text-sm text-gray-500", children: "Bathrooms" })] }), _jsxs("div", { className: "text-center", children: [_jsx(Square, { className: "h-6 w-6 mx-auto mb-2 text-blue-600" }), _jsx("p", { className: "text-2xl font-semibold", children: property.area.toLocaleString() }), _jsx("p", { className: "text-sm text-gray-500", children: "Sq Ft" })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-3", children: "Description" }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: property.description })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-3", children: "Amenities" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: property.amenities.map((amenity) => (_jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [_jsx(Check, { className: "h-4 w-4 text-green-500" }), _jsx("span", { children: amenity })] }, amenity))) })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-3", children: "Property Details" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "flex justify-between py-2 border-b border-gray-100", children: [_jsx("span", { className: "text-gray-500", children: "Property Type" }), _jsx("span", { className: "font-medium capitalize", children: property.propertyType })] }), _jsxs("div", { className: "flex justify-between py-2 border-b border-gray-100", children: [_jsx("span", { className: "text-gray-500", children: "Status" }), _jsx("span", { className: "font-medium capitalize", children: property.status })] }), _jsxs("div", { className: "flex justify-between py-2 border-b border-gray-100", children: [_jsx("span", { className: "text-gray-500", children: "Listed On" }), _jsx("span", { className: "font-medium", children: new Date(property.createdAt).toLocaleDateString() })] }), _jsxs("div", { className: "flex justify-between py-2 border-b border-gray-100", children: [_jsx("span", { className: "text-gray-500", children: "Property ID" }), _jsxs("span", { className: "font-medium", children: ["#", property.id] })] })] })] })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, className: "bg-white rounded-xl shadow-sm p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Location" }), _jsx("div", { className: "aspect-video bg-gray-100 rounded-lg flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx(MapPin, { className: "h-12 w-12 mx-auto mb-2 text-gray-400" }), _jsx("p", { className: "text-gray-600", children: property.location })] }) })] })] }), _jsx("div", { className: "lg:col-span-1", children: _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.3 }, className: "bg-white rounded-xl shadow-sm p-6 sticky top-24", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Contact Agent" }), _jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [_jsx("img", { src: "/images/agent.jpg", alt: "Agent", className: "w-14 h-14 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: "Sarah Johnson" }), _jsx("p", { className: "text-sm text-gray-500", children: "Senior Real Estate Agent" })] })] }), _jsxs("div", { className: "space-y-3 mb-6", children: [_jsxs(Button, { onClick: handleCall, className: "w-full bg-blue-900 hover:bg-blue-800 text-white", children: [_jsx(Phone, { className: "mr-2 h-4 w-4" }), " Call Agent"] }), _jsxs(Button, { onClick: handleWhatsApp, variant: "outline", className: "w-full border-green-500 text-green-600 hover:bg-green-50", children: [_jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), " WhatsApp"] }), _jsx(ScheduleVisitModal, { propertyTitle: property.title, trigger: _jsxs(Button, { variant: "outline", className: "w-full", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), " Schedule Visit"] }) })] }), _jsx(Separator, { className: "my-6" }), _jsx("h3", { className: "text-lg font-semibold mb-4", children: "Send Inquiry" }), _jsx(ContactForm, { propertyId: property.id, propertyTitle: property.title })] }) })] }) }) }), _jsx(Footer, {}), _jsx(WhatsAppButton, { phoneNumber: "+15551234567", message: `Hi, I am interested in "${property.title}". Can you provide more information?` })] }));
}
