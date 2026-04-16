import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'house', label: 'House' },
    { value: 'condo', label: 'Condo' },
    { value: 'plot', label: 'Plot' },
];
const amenitiesList = [
    'Parking', 'Gym', 'Pool', 'Garden', 'Security', 'Elevator', 'Concierge', 'Terrace', 'Fireplace', 'Smart Home', 'Solar Panels', 'Wine Cellar', 'Guest House', 'Beach Access', 'Valet', 'Storage',
];
const tagOptions = [
    { value: 'new', label: 'New' },
    { value: 'featured', label: 'Featured' },
    { value: 'hot', label: 'Hot Deal' },
];
export default function PropertyForm({ property, isEdit = false, onSubmit, }) {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [images, setImages] = useState(property?.images || []);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [formData, setFormData] = useState({
        title: property?.title || '',
        price: property?.price?.toString() || '',
        location: property?.location || '',
        description: property?.description || '',
        bedrooms: property?.bedrooms?.toString() || '',
        bathrooms: property?.bathrooms?.toString() || '',
        area: property?.area?.toString() || '',
        propertyType: property?.propertyType || 'apartment',
        status: property?.status || 'available',
        featured: property?.featured || false,
        tag: property?.tag || '',
        amenities: property?.amenities || [],
    });
    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };
    const handleAddImage = () => {
        if (newImageUrl.trim()) {
            setImages([...images, newImageUrl.trim()]);
            setNewImageUrl('');
        }
    };
    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };
    const handleAmenityToggle = (amenity) => {
        setFormData((prev) => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter((a) => a !== amenity)
                : [...prev.amenities, amenity],
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const propertyData = {
                id: property?.id || Date.now().toString(),
                title: formData.title,
                price: Number(formData.price),
                location: formData.location,
                images: images.length > 0 ? images : ['/images/property-1.jpg'],
                description: formData.description,
                bedrooms: Number(formData.bedrooms),
                bathrooms: Number(formData.bathrooms),
                area: Number(formData.area),
                amenities: formData.amenities,
                status: formData.status,
                featured: formData.featured,
                tag: formData.tag,
                propertyType: formData.propertyType,
                createdAt: property?.createdAt || new Date().toISOString(),
            };
            // 👉 THIS is the ONLY change:
            onSubmit(propertyData);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "md:col-span-2", children: [_jsx(Label, { htmlFor: "title", children: "Property Title *" }), _jsx(Input, { id: "title", value: formData.title, onChange: (e) => handleChange('title', e.target.value), placeholder: "e.g., Modern Downtown Apartment", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "price", children: "Price *" }), _jsx(Input, { id: "price", type: "number", value: formData.price, onChange: (e) => handleChange('price', e.target.value), placeholder: "e.g., 450000", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "location", children: "Location *" }), _jsx(Input, { id: "location", value: formData.location, onChange: (e) => handleChange('location', e.target.value), placeholder: "e.g., Downtown, New York", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "propertyType", children: "Property Type *" }), _jsxs(Select, { value: formData.propertyType, onValueChange: (value) => handleChange('propertyType', value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: propertyTypes.map((type) => (_jsx(SelectItem, { value: type.value, children: type.label }, type.value))) })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "status", children: "Status *" }), _jsxs(Select, { value: formData.status, onValueChange: (value) => handleChange('status', value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "available", children: "Available" }), _jsx(SelectItem, { value: "sold", children: "Sold" })] })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "bedrooms", children: "Bedrooms *" }), _jsx(Input, { id: "bedrooms", type: "number", value: formData.bedrooms, onChange: (e) => handleChange('bedrooms', e.target.value), placeholder: "e.g., 3", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "bathrooms", children: "Bathrooms *" }), _jsx(Input, { id: "bathrooms", type: "number", value: formData.bathrooms, onChange: (e) => handleChange('bathrooms', e.target.value), placeholder: "e.g., 2", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "area", children: "Area (sq ft) *" }), _jsx(Input, { id: "area", type: "number", value: formData.area, onChange: (e) => handleChange('area', e.target.value), placeholder: "e.g., 1200", required: true })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "tag", children: "Tag (Optional)" }), _jsxs(Select, { value: formData.tag, onValueChange: (value) => handleChange('tag', value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select tag" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "none", children: "None" }), tagOptions.map((tag) => (_jsx(SelectItem, { value: tag.value, children: tag.label }, tag.value)))] })] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "featured", checked: formData.featured, onCheckedChange: (checked) => handleChange('featured', checked) }), _jsx(Label, { htmlFor: "featured", className: "cursor-pointer", children: "Mark as Featured" })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "description", children: "Description *" }), _jsx(Textarea, { id: "description", value: formData.description, onChange: (e) => handleChange('description', e.target.value), placeholder: "Enter property description...", rows: 4, required: true })] }), _jsxs("div", { children: [_jsx(Label, { className: "mb-2 block", children: "Amenities" }), _jsx("div", { className: "flex flex-wrap gap-2", children: amenitiesList.map((amenity) => (_jsx("button", { type: "button", onClick: () => handleAmenityToggle(amenity), className: `px-3 py-1 rounded-full text-sm transition-colors ${formData.amenities.includes(amenity) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: amenity }, amenity))) })] }), _jsxs("div", { children: [_jsx(Label, { className: "mb-2 block", children: "Images" }), _jsxs("div", { className: "flex space-x-2 mb-4", children: [_jsx(Input, { value: newImageUrl, onChange: (e) => setNewImageUrl(e.target.value), placeholder: "Enter image URL..." }), _jsx(Button, { type: "button", onClick: handleAddImage, variant: "outline", children: _jsx(Plus, { className: "h-4 w-4" }) })] }), images.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: images.map((image, index) => (_jsxs("div", { className: "relative", children: [_jsx("img", { src: image, alt: `Property ${index + 1}`, className: "w-24 h-24 object-cover rounded-lg" }), _jsx("button", { type: "button", onClick: () => handleRemoveImage(index), className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center", children: _jsx(X, { className: "h-3 w-3" }) })] }, index))) }))] }), _jsxs("div", { className: "flex space-x-4", children: [_jsx(Button, { type: "submit", disabled: isSubmitting, className: "bg-blue-600 hover:bg-blue-700", children: isSubmitting ? 'Saving...' : (isEdit ? 'Update Property' : 'Add Property') }), _jsx(Button, { type: "button", variant: "outline", onClick: () => navigate('/admin/properties'), children: "Cancel" })] })] }));
}
