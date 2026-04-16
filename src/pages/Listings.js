import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import FilterSidebar from '@/components/FilterSidebar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getStoredProperties } from '@/lib/data';
export default function Listings() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [properties, setProperties] = useState([]);
    const [filters, setFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    useEffect(() => {
        setProperties(getStoredProperties());
    }, []);
    useEffect(() => {
        const newFilters = {};
        const location = searchParams.get('location');
        if (location)
            newFilters.location = location;
        const type = searchParams.get('type');
        if (type)
            newFilters.propertyType = type;
        const price = searchParams.get('price');
        if (price) {
            const [min, max] = price.split('-');
            if (min)
                newFilters.minPrice = Number(min);
            if (max)
                newFilters.maxPrice = Number(max);
        }
        setFilters(newFilters);
    }, [searchParams]);
    const filteredProperties = useMemo(() => {
        return properties.filter((property) => {
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchesSearch = property.title.toLowerCase().includes(query) ||
                    property.location.toLowerCase().includes(query) ||
                    property.propertyType.toLowerCase().includes(query);
                if (!matchesSearch)
                    return false;
            }
            if (filters.location) {
                if (!property.location.toLowerCase().includes(filters.location.toLowerCase()))
                    return false;
            }
            if (filters.propertyType) {
                if (property.propertyType !== filters.propertyType)
                    return false;
            }
            if (filters.minPrice !== undefined) {
                if (property.price < filters.minPrice)
                    return false;
            }
            if (filters.maxPrice !== undefined) {
                if (property.price > filters.maxPrice)
                    return false;
            }
            if (filters.bedrooms !== undefined) {
                if (filters.bedrooms === 4) {
                    if (property.bedrooms < 4)
                        return false;
                }
                else {
                    if (property.bedrooms !== filters.bedrooms)
                        return false;
                }
            }
            if (filters.status) {
                if (property.status !== filters.status)
                    return false;
            }
            return true;
        });
    }, [properties, filters, searchQuery]);
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        const params = new URLSearchParams();
        if (newFilters.location)
            params.set('location', newFilters.location);
        if (newFilters.propertyType)
            params.set('type', newFilters.propertyType);
        if (newFilters.minPrice)
            params.set('minPrice', newFilters.minPrice.toString());
        if (newFilters.maxPrice)
            params.set('maxPrice', newFilters.maxPrice.toString());
        if (newFilters.bedrooms)
            params.set('bedrooms', newFilters.bedrooms.toString());
        if (newFilters.status)
            params.set('status', newFilters.status);
        setSearchParams(params);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Navbar, {}), _jsx("section", { className: "bg-blue-900 pt-24 pb-12", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Property Listings" }), _jsx("p", { className: "text-white/80 max-w-2xl mx-auto", children: "Browse our extensive collection of premium properties" })] }) }) }), _jsx("section", { className: "py-8", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "bg-white rounded-xl shadow-sm p-4 mb-6", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx(Input, { placeholder: "Search properties...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10" })] }), _jsxs("div", { className: "flex items-center justify-between md:justify-end space-x-4", children: [_jsxs("span", { className: "text-sm text-gray-600", children: [filteredProperties.length, " properties found"] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: viewMode === 'grid' ? 'default' : 'outline', size: "icon", onClick: () => setViewMode('grid'), className: viewMode === 'grid' ? 'bg-blue-900' : '', children: _jsx(Grid3X3, { className: "h-4 w-4" }) }), _jsx(Button, { variant: viewMode === 'list' ? 'default' : 'outline', size: "icon", onClick: () => setViewMode('list'), className: viewMode === 'list' ? 'bg-blue-900' : '', children: _jsx(List, { className: "h-4 w-4" }) })] })] })] }) }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [_jsx(FilterSidebar, { filters: filters, onFilterChange: handleFilterChange }), _jsx("div", { className: "flex-1", children: filteredProperties.length > 0 ? (_jsx("div", { className: `grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`, children: filteredProperties.map((property, index) => (_jsx(PropertyCard, { property: property, index: index }, property.id))) })) : (_jsxs("div", { className: "bg-white rounded-xl shadow-sm p-12 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Search, { className: "h-8 w-8 text-gray-400" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No properties found" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your filters or search query" }), _jsx(Button, { onClick: () => { setFilters({}); setSearchQuery(''); setSearchParams({}); }, variant: "outline", children: "Clear All Filters" })] })) })] })] }) }), _jsx(Footer, {}), _jsx(WhatsAppButton, {})] }));
}
