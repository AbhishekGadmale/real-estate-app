import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from '@/components/ui/sheet';
const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'house', label: 'House' },
    { value: 'condo', label: 'Condo' },
    { value: 'plot', label: 'Plot' },
];
const bedroomOptions = [
    { value: 1, label: '1 BHK' },
    { value: 2, label: '2 BHK' },
    { value: 3, label: '3 BHK' },
    { value: 4, label: '4+ BHK' },
];
export default function FilterSidebar({ filters, onFilterChange }) {
    const [localFilters, setLocalFilters] = useState(filters);
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (key, value) => {
        const newFilters = { ...localFilters, [key]: value };
        setLocalFilters(newFilters);
        onFilterChange(newFilters);
    };
    const handleReset = () => {
        const resetFilters = {};
        setLocalFilters(resetFilters);
        onFilterChange(resetFilters);
    };
    const hasActiveFilters = Object.values(localFilters).some(v => v !== undefined && v !== '');
    const FilterContent = () => (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { className: "text-sm font-semibold mb-2 block", children: "Location" }), _jsx(Input, { placeholder: "Enter city or area...", value: localFilters.location || '', onChange: (e) => handleChange('location', e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-semibold mb-2 block", children: "Property Type" }), _jsxs(Select, { value: localFilters.propertyType || 'all', onValueChange: (value) => handleChange('propertyType', value === 'all' ? undefined : value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "All Types" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Types" }), propertyTypes.map((type) => (_jsx(SelectItem, { value: type.value, children: type.label }, type.value)))] })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-semibold mb-2 block", children: "Price Range" }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsx(Input, { type: "number", placeholder: "Min $", value: localFilters.minPrice || '', onChange: (e) => handleChange('minPrice', e.target.value ? Number(e.target.value) : undefined) }), _jsx(Input, { type: "number", placeholder: "Max $", value: localFilters.maxPrice || '', onChange: (e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : undefined) })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-semibold mb-2 block", children: "Bedrooms" }), _jsxs(Select, { value: localFilters.bedrooms?.toString() || 'all', onValueChange: (value) => handleChange('bedrooms', value === 'all' ? undefined : Number(value)), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Any" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "Any" }), bedroomOptions.map((option) => (_jsx(SelectItem, { value: option.value.toString(), children: option.label }, option.value)))] })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "text-sm font-semibold mb-2 block", children: "Status" }), _jsxs(Select, { value: localFilters.status || 'all', onValueChange: (value) => handleChange('status', value === 'all' ? undefined : value), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "All Status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Status" }), _jsx(SelectItem, { value: "available", children: "Available" }), _jsx(SelectItem, { value: "sold", children: "Sold" })] })] })] }), hasActiveFilters && (_jsx(Button, { variant: "outline", onClick: handleReset, className: "w-full", children: "Clear Filters" }))] }));
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "lg:hidden mb-4", children: _jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(SheetTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-full", children: [_jsx(SlidersHorizontal, { className: "mr-2 h-4 w-4" }), "Filters", hasActiveFilters && (_jsx("span", { className: "ml-2 bg-blue-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center", children: Object.values(localFilters).filter(v => v !== undefined && v !== '').length }))] }) }), _jsxs(SheetContent, { side: "left", className: "w-[300px]", children: [_jsx(SheetHeader, { children: _jsxs(SheetTitle, { className: "flex items-center", children: [_jsx(Filter, { className: "mr-2 h-5 w-5" }), "Filters"] }) }), _jsx("div", { className: "mt-6", children: _jsx(FilterContent, {}) })] })] }) }), _jsx("div", { className: "hidden lg:block w-72 flex-shrink-0", children: _jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6 sticky top-24", children: [_jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center", children: [_jsx(Filter, { className: "mr-2 h-5 w-5" }), "Filters"] }), _jsx(FilterContent, {})] }) })] }));
}
