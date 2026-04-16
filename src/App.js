import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import PropertyDetail from "./pages/PropertyDetail";
import Dashboard from "./admin/pages/Dashboard";
import AdminLogin from "./admin/pages/Login";
import AdminLayout from "./admin/components/AdminLayout";
import Properties from "./admin/pages/Properties";
import AddProperty from "./admin/pages/AddProperty";
import Leads from "./admin/pages/Leads";
import EditProperty from "./admin/pages/EditProperty";
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/listings", element: _jsx(Listings, {}) }), _jsx(Route, { path: "/property/:id", element: _jsx(PropertyDetail, {}) }), _jsx(Route, { path: "/admin/login", element: _jsx(AdminLogin, {}) }), _jsxs(Route, { path: "/admin", element: _jsx(AdminLayout, {}), children: [_jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "properties", element: _jsx(Properties, {}) }), _jsx(Route, { path: "properties/add", element: _jsx(AddProperty, {}) }), _jsx(Route, { path: "properties/edit/:id", element: _jsx(EditProperty, {}) }), _jsx(Route, { path: "leads", element: _jsx(Leads, {}) })] })] }));
}
export default App;
