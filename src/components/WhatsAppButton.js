import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export default function WhatsAppButton({ phoneNumber = '8624814650', message = 'Hi, I am interested in a property listing.', }) {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };
    return (_jsxs(motion.button, { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: 1, duration: 0.3 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, onClick: handleClick, className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors", "aria-label": "Contact on WhatsApp", style: { boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)' }, children: [_jsx("span", { className: "absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" }), _jsx(MessageCircle, { className: "h-7 w-7 text-white fill-white" })] }));
}
