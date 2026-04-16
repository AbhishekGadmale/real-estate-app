import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/ui/dialog';
import { toast } from 'sonner';
const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];
export default function ScheduleVisitModal({ propertyTitle, trigger }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsSuccess(true);
            toast.success('Visit scheduled successfully!');
            setTimeout(() => {
                setIsOpen(false);
                setIsSuccess(false);
                setSelectedDate('');
                setSelectedTime('');
                setName('');
                setPhone('');
            }, 2000);
        }, 500);
    };
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    return (_jsxs(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(DialogTrigger, { asChild: true, children: trigger || (_jsxs(Button, { variant: "outline", className: "w-full", children: [_jsx(Calendar, { className: "mr-2 h-4 w-4" }), "Schedule Visit"] })) }), _jsxs(DialogContent, { className: "sm:max-w-md", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: "Schedule a Visit" }) }), isSuccess ? (_jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4", children: _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Visit Scheduled!" }), _jsxs("p", { className: "text-gray-600 text-sm", children: ["We will contact you to confirm your visit to", _jsx("br", {}), _jsx("span", { className: "font-medium", children: propertyTitle })] })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("div", { className: "bg-blue-50 p-3 rounded-lg", children: _jsxs("p", { className: "text-sm text-blue-800", children: [_jsx("span", { className: "font-medium", children: "Property:" }), " ", propertyTitle] }) }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "visit-name", children: "Full Name *" }), _jsx(Input, { id: "visit-name", value: name, onChange: (e) => setName(e.target.value), placeholder: "John Doe", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "visit-phone", children: "Phone Number *" }), _jsx(Input, { id: "visit-phone", type: "tel", value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+1 (555) 123-4567", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "visit-date", children: "Select Date *" }), _jsx(Input, { id: "visit-date", type: "date", min: minDate, value: selectedDate, onChange: (e) => setSelectedDate(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx(Label, { children: "Select Time *" }), _jsx("div", { className: "grid grid-cols-4 gap-2 mt-2", children: timeSlots.map((time) => (_jsx("button", { type: "button", onClick: () => setSelectedTime(time), className: `px-2 py-2 text-sm rounded-md border transition-colors ${selectedTime === time ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'}`, children: time }, time))) })] }), _jsxs(Button, { type: "submit", className: "w-full bg-blue-900 hover:bg-blue-800 text-white", disabled: !selectedDate || !selectedTime, children: [_jsx(Clock, { className: "mr-2 h-4 w-4" }), "Confirm Visit"] })] }))] })] }));
}
