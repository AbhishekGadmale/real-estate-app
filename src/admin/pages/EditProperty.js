import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import PropertyForm from "../components/PropertyForm";
import { getProperties, updateProperty } from "@/lib/storage/properties";
export default function EditProperty() {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = getProperties().find((p) => p.id === id);
    const handleUpdate = (data) => {
        updateProperty({
            ...data,
            id: id,
        });
        navigate("/admin/properties");
    };
    if (!property)
        return _jsx("p", { children: "Property not found" });
    return (_jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Edit Property" }), _jsx(PropertyForm, { property: property, isEdit: true, onSubmit: handleUpdate })] }));
}
