import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SearchFilters } from '@/types';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

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

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (key: keyof SearchFilters, value: any) => {
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

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-semibold mb-2 block">Location</Label>
        <Input
          placeholder="Enter city or area..."
          value={localFilters.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
        />
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Property Type</Label>
        <Select
          value={localFilters.propertyType || 'all'}
          onValueChange={(value) => handleChange('propertyType', value === 'all' ? undefined : value)}
        >
          <SelectTrigger><SelectValue placeholder="All Types" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Price Range</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min $"
            value={localFilters.minPrice || ''}
            onChange={(e) => handleChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
          <Input
            type="number"
            placeholder="Max $"
            value={localFilters.maxPrice || ''}
            onChange={(e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Bedrooms</Label>
        <Select
          value={localFilters.bedrooms?.toString() || 'all'}
          onValueChange={(value) => handleChange('bedrooms', value === 'all' ? undefined : Number(value))}
        >
          <SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any</SelectItem>
            {bedroomOptions.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Status</Label>
        <Select
          value={localFilters.status || 'all'}
          onValueChange={(value) => handleChange('status', value === 'all' ? undefined : value)}
        >
          <SelectTrigger><SelectValue placeholder="All Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={handleReset} className="w-full">Clear Filters</Button>
      )}
    </div>
  );

  return (
    <>
      <div className="lg:hidden mb-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-blue-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {Object.values(localFilters).filter(v => v !== undefined && v !== '').length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </h3>
          <FilterContent />
        </div>
      </div>
    </>
  );
}
