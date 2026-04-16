export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  status: 'available' | 'sold';
  featured: boolean;
  tag?: 'new' | 'featured' | 'hot';
  propertyType: 'apartment' | 'villa' | 'plot' | 'condo' | 'house';
  createdAt: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  propertyId?: string;
  propertyTitle?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}

export interface SearchFilters {
  location?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  status?: string;
}
