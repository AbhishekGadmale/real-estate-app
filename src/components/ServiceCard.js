import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { y: -4 }, className: "bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group", children: [_jsx("div", { className: "w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors duration-300", children: _jsx(Icon, { className: "h-7 w-7 text-blue-900 group-hover:text-white transition-colors duration-300" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: description })] }));
}
