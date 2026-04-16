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
import { Property, SearchFilters } from '@/types';
import { getStoredProperties } from '@/lib/data';

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setProperties(getStoredProperties());
  }, []);

  useEffect(() => {
    const newFilters: SearchFilters = {};
    const location = searchParams.get('location');
    if (location) newFilters.location = location;
    const type = searchParams.get('type');
    if (type) newFilters.propertyType = type;
    const price = searchParams.get('price');
    if (price) {
      const [min, max] = price.split('-');
      if (min) newFilters.minPrice = Number(min);
      if (max) newFilters.maxPrice = Number(max);
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
        if (!matchesSearch) return false;
      }
      if (filters.location) {
        if (!property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
      }
      if (filters.propertyType) {
        if (property.propertyType !== filters.propertyType) return false;
      }
      if (filters.minPrice !== undefined) {
        if (property.price < filters.minPrice) return false;
      }
      if (filters.maxPrice !== undefined) {
        if (property.price > filters.maxPrice) return false;
      }
      if (filters.bedrooms !== undefined) {
        if (filters.bedrooms === 4) {
          if (property.bedrooms < 4) return false;
        } else {
          if (property.bedrooms !== filters.bedrooms) return false;
        }
      }
      if (filters.status) {
        if (property.status !== filters.status) return false;
      }
      return true;
    });
  }, [properties, filters, searchQuery]);

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (newFilters.location) params.set('location', newFilters.location);
    if (newFilters.propertyType) params.set('type', newFilters.propertyType);
    if (newFilters.minPrice) params.set('minPrice', newFilters.minPrice.toString());
    if (newFilters.maxPrice) params.set('maxPrice', newFilters.maxPrice.toString());
    if (newFilters.bedrooms) params.set('bedrooms', newFilters.bedrooms.toString());
    if (newFilters.status) params.set('status', newFilters.status);
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-blue-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Property Listings</h1>
            <p className="text-white/80 max-w-2xl mx-auto">Browse our extensive collection of premium properties</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Search properties..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
              </div>

              <div className="flex items-center justify-between md:justify-end space-x-4">
                <span className="text-sm text-gray-600">{filteredProperties.length} properties found</span>
                <div className="flex items-center space-x-2">
                  <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-blue-900' : ''}>
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-blue-900' : ''}>
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

            <div className="flex-1">
              {filteredProperties.length > 0 ? (
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                  {filteredProperties.map((property, index) => (
                    <PropertyCard key={property.id} property={property} index={index} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
                  <Button onClick={() => { setFilters({}); setSearchQuery(''); setSearchParams({}); }} variant="outline">Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
