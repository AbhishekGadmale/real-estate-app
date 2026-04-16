import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { getProperties, deleteProperty } from "@/lib/storage/properties";
import { Button } from "@/components/ui/button";
export default function Properties() {
    const properties = getProperties();
    return (_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Properties" }), _jsx(Link, { to: "/admin/properties/add", children: _jsx(Button, { children: "+ Add Property" }) })] }), properties.length === 0 ? (_jsx("p", { className: "text-gray-500", children: "No properties found" })) : (_jsx("div", { className: "border rounded-lg overflow-hidden", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "p-3 text-left", children: "Title" }), _jsx("th", { className: "p-3 text-left", children: "Location" }), _jsx("th", { className: "p-3 text-left", children: "Price" }), _jsx("th", { className: "p-3 text-left", children: "Status" }), _jsx("th", { className: "p-3 text-right", children: "Actions" })] }) }), _jsx("tbody", { children: properties.map((p) => (_jsxs("tr", { className: "border-t", children: [_jsx("td", { className: "p-3 font-medium", children: p.title }), _jsx("td", { className: "p-3", children: p.location }), _jsxs("td", { className: "p-3", children: ["$", p.price] }), _jsx("td", { className: "p-3", children: p.status }), _jsxs("td", { className: "p-3 text-right space-x-2", children: [_jsx(Link, { to: `/admin/properties/edit/${p.id}`, className: "text-blue-600", children: "Edit" }), _jsx("button", { onClick: () => {
                                                    deleteProperty(p.id);
                                                    window.location.reload();
                                                }, className: "text-red-600", children: "Delete" })] })] }, p.id))) })] }) }))] }));
}
