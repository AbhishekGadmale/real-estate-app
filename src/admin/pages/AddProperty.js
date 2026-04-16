import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PropertyForm from "../components/PropertyForm";
import { useNavigate } from "react-router-dom";
import { addProperty } from "@/lib/storage/properties";
export default function AddProperty() {
    const navigate = useNavigate();
    const handleAdd = (data) => {
        addProperty({
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
        });
        navigate("/admin/properties");
    };
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Add Property" }), _jsx(PropertyForm, { onSubmit: handleAdd })] }));
}
