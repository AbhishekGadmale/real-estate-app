import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
export default function AdminLogin() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (formData.email === 'admin@estatepro.com' && formData.password === 'admin123') {
            localStorage.setItem('estatepro_auth', JSON.stringify({
                email: formData.email,
                name: 'Admin User',
                loginTime: new Date().toISOString(),
            }));
            toast.success('Login successful!');
            navigate('/admin/dashboard');
        }
        else {
            toast.error('Invalid credentials. Try admin@estatepro.com / admin123');
        }
        setIsLoading(false);
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-100 flex items-center justify-center p-4", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-xl mb-4", children: _jsx(Building2, { className: "h-8 w-8 text-white" }) }), _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "EstatePro Admin" }), _jsx("p", { className: "text-gray-600", children: "Sign in to manage your properties" })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email Address" }), _jsxs("div", { className: "relative mt-1", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx(Input, { id: "email", type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "admin@estatepro.com", className: "pl-10", required: true })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "password", children: "Password" }), _jsxs("div", { className: "relative mt-1", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx(Input, { id: "password", type: showPassword ? 'text' : 'password', value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "pl-10 pr-10", required: true }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600", children: showPassword ? _jsx(EyeOff, { className: "h-5 w-5" }) : _jsx(Eye, { className: "h-5 w-5" }) })] })] }), _jsx(Button, { type: "submit", disabled: isLoading, className: "w-full bg-blue-900 hover:bg-blue-800", children: isLoading ? 'Signing in...' : 'Sign In' })] }), _jsx("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg", children: _jsxs("p", { className: "text-sm text-blue-800", children: [_jsx("strong", { children: "Demo Credentials:" }), _jsx("br", {}), "Email: admin@estatepro.com", _jsx("br", {}), "Password: admin123"] }) })] }), _jsx("p", { className: "text-center mt-6", children: _jsx("a", { href: "/", className: "text-blue-600 hover:text-blue-800 text-sm", children: "\u2190 Back to website" }) })] }) }));
}
