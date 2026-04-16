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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/property/:id" element={<PropertyDetail />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      
      <Route path="/admin" element={<AdminLayout/>}>
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="properties" element={<Properties />} />
         <Route path="properties/add" element={<AddProperty />} />
         <Route path="properties/edit/:id" element={<EditProperty />} />
         <Route path="leads" element={<Leads />} />
      </Route>

    </Routes>
  );
}

export default App;