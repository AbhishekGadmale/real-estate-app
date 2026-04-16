import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Property } from '@/types';
import { getStoredProperties, saveProperties } from '@/lib/data';
import { toast } from 'sonner';

interface PropertyFormProps {
  property?: Property;
  isEdit?: boolean;
}

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

export default function PropertyForm({ property, isEdit = false }: PropertyFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<string[]>(property?.images || []);
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

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setImages([...images, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const properties = getStoredProperties();
      
      const propertyData: Property = {
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
        status: formData.status as 'available' | 'sold',
        featured: formData.featured,
        tag: formData.tag as 'new' | 'featured' | 'hot' | undefined,
        propertyType: formData.propertyType as Property['propertyType'],
        createdAt: property?.createdAt || new Date().toISOString(),
      };

      if (isEdit) {
        const index = properties.findIndex((p) => p.id === property?.id);
        if (index !== -1) properties[index] = propertyData;
      } else {
        properties.push(propertyData);
      }

      saveProperties(properties);
      toast.success(isEdit ? 'Property updated successfully' : 'Property added successfully');
      navigate('/admin/properties');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Label htmlFor="title">Property Title *</Label>
          <Input id="title" value={formData.title} onChange={(e) => handleChange('title', e.target.value)} placeholder="e.g., Modern Downtown Apartment" required />
        </div>

        <div>
          <Label htmlFor="price">Price *</Label>
          <Input id="price" type="number" value={formData.price} onChange={(e) => handleChange('price', e.target.value)} placeholder="e.g., 450000" required />
        </div>

        <div>
          <Label htmlFor="location">Location *</Label>
          <Input id="location" value={formData.location} onChange={(e) => handleChange('location', e.target.value)} placeholder="e.g., Downtown, New York" required />
        </div>

        <div>
          <Label htmlFor="propertyType">Property Type *</Label>
          <Select value={formData.propertyType} onValueChange={(value) => handleChange('propertyType', value)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="status">Status *</Label>
          <Select value={formData.status} onValueChange={(value) => handleChange('status', value)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="bedrooms">Bedrooms *</Label>
          <Input id="bedrooms" type="number" value={formData.bedrooms} onChange={(e) => handleChange('bedrooms', e.target.value)} placeholder="e.g., 3" required />
        </div>

        <div>
          <Label htmlFor="bathrooms">Bathrooms *</Label>
          <Input id="bathrooms" type="number" value={formData.bathrooms} onChange={(e) => handleChange('bathrooms', e.target.value)} placeholder="e.g., 2" required />
        </div>

        <div>
          <Label htmlFor="area">Area (sq ft) *</Label>
          <Input id="area" type="number" value={formData.area} onChange={(e) => handleChange('area', e.target.value)} placeholder="e.g., 1200" required />
        </div>

        <div>
          <Label htmlFor="tag">Tag (Optional)</Label>
          <Select value={formData.tag} onValueChange={(value) => handleChange('tag', value)}>
            <SelectTrigger><SelectValue placeholder="Select tag" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              {tagOptions.map((tag) => (
                <SelectItem key={tag.value} value={tag.value}>{tag.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="featured" checked={formData.featured} onCheckedChange={(checked) => handleChange('featured', checked)} />
          <Label htmlFor="featured" className="cursor-pointer">Mark as Featured</Label>
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea id="description" value={formData.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Enter property description..." rows={4} required />
      </div>

      <div>
        <Label className="mb-2 block">Amenities</Label>
        <div className="flex flex-wrap gap-2">
          {amenitiesList.map((amenity) => (
            <button
              key={amenity}
              type="button"
              onClick={() => handleAmenityToggle(amenity)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                formData.amenities.includes(amenity) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-2 block">Images</Label>
        <div className="flex space-x-2 mb-4">
          <Input value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} placeholder="Enter image URL..." />
          <Button type="button" onClick={handleAddImage} variant="outline"><Plus className="h-4 w-4" /></Button>
        </div>
        
        {images.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Property ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
                <button type="button" onClick={() => handleRemoveImage(index)} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
          {isSubmitting ? 'Saving...' : (isEdit ? 'Update Property' : 'Add Property')}
        </Button>
        <Button type="button" variant="outline" onClick={() => navigate('/admin/properties')}>Cancel</Button>
      </div>
    </form>
  );
}
