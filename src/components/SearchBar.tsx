import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const propertyTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
  { value: 'plot', label: 'Plot' },
];

const priceRanges = [
  { value: 'all', label: 'Any Price' },
  { value: '0-300000', label: 'Under $300k' },
  { value: '300000-500000', label: '$300k - $500k' },
  { value: '500000-750000', label: '$500k - $750k' },
  { value: '750000-1000000', label: '$750k - $1M' },
  { value: '1000000+', label: '$1M+' },
];

export default function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType && propertyType !== 'all') params.append('type', propertyType);
    if (priceRange && priceRange !== 'all') params.append('price', priceRange);
    
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white rounded-xl shadow-xl p-4 md:p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>

        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="h-12">
            <Home className="h-5 w-5 mr-2 text-gray-400" />
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="h-12">
            <DollarSign className="h-5 w-5 mr-2 text-gray-400" />
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={handleSearch} className="h-12 bg-blue-900 hover:bg-blue-800 text-white font-semibold">
          <Search className="mr-2 h-5 w-5" />
          Search
        </Button>
      </div>
    </motion.div>
  );
}
