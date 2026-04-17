import { Property, Lead } from '@/types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: 450000,
    location: 'Downtown, New York',
    images: ['/images/property-1.jpg', '/images/property-3.jpg', '/images/property-5.jpg'],
    description: 'Experience urban living at its finest in this stunning modern apartment. Featuring floor-to-ceiling windows, an open-concept layout, and premium finishes throughout. The building offers world-class amenities including a rooftop pool, fitness center, and 24/7 concierge service.',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    amenities: ['Parking', 'Gym', 'Pool', 'Concierge', 'Elevator', 'Security'],
    status: 'available',
    featured: true,
    tag: 'featured',
    propertyType: 'apartment',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Luxury Mediterranean Villa',
    price: 1200000,
    location: 'Beverly Hills, California',
    images: ['/images/property-2.jpg', '/images/property-6.jpg', '/images/property-8.jpg'],
    description: 'This exquisite Mediterranean-style villa offers the ultimate in luxury living. Set on a beautifully landscaped lot, the property features a stunning pool, outdoor entertaining areas, and breathtaking views.',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    amenities: ['Pool', 'Garden', 'Parking', 'Gym', 'Wine Cellar', 'Smart Home'],
    status: 'available',
    featured: true,
    tag: 'hot',
    propertyType: 'villa',
    createdAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'Skyline Penthouse Suite',
    price: 2500000,
    location: 'Manhattan, New York',
    images: ['/images/property-3.jpg', '/images/property-8.jpg', '/images/property-9.jpg'],
    description: 'Live above it all in this magnificent penthouse with panoramic city views. This one-of-a-kind residence features a private terrace, chef\'s kitchen with top-of-the-line appliances, and luxurious master suite.',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    amenities: ['Terrace', 'Concierge', 'Pool', 'Gym', 'Valet', 'Private Elevator'],
    status: 'available',
    featured: true,
    tag: 'new',
    propertyType: 'condo',
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'Contemporary Family Home',
    price: 650000,
    location: 'Austin, Texas',
    images: ['/images/property-4.jpg', '/images/property-7.jpg', '/images/property-5.jpg'],
    description: 'Perfect for families, this modern home offers spacious living areas, a gourmet kitchen, and a beautiful backyard. Located in a top-rated school district with easy access to parks, shopping, and major highways.',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    amenities: ['Garden', 'Garage', 'Fireplace', 'Smart Home', 'Solar Panels'],
    status: 'available',
    featured: false,
    propertyType: 'house',
    createdAt: '2024-01-20'
  },
  {
    id: '5',
    title: 'Urban Loft with City Views',
    price: 380000,
    location: 'Chicago, Illinois',
    images: ['/images/property-5.jpg', '/images/property-3.jpg', '/images/property-1.jpg'],
    description: 'Stylish urban loft featuring exposed brick walls, high ceilings, and large windows with city views. The open layout includes a modern kitchen, spacious living area, and a cozy bedroom nook.',
    bedrooms: 1,
    bathrooms: 1,
    area: 900,
    amenities: ['Gym', 'Rooftop', 'Parking', 'Pet Friendly'],
    status: 'available',
    featured: false,
    tag: 'new',
    propertyType: 'apartment',
    createdAt: '2024-03-15'
  },
  {
    id: '6',
    title: 'Beachfront Paradise Villa',
    price: 1800000,
    location: 'Miami Beach, Florida',
    images: ['/images/property-6.jpg', '/images/property-2.jpg', '/images/property-9.jpg'],
    description: 'Wake up to ocean views in this stunning beachfront villa. Featuring direct beach access, infinity pool, and luxurious outdoor living spaces. The interior is designed with coastal elegance.',
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    amenities: ['Beach Access', 'Pool', 'Outdoor Kitchen', 'Guest House', 'Security'],
    status: 'sold',
    featured: false,
    tag: 'hot',
    propertyType: 'villa',
    createdAt: '2024-02-20'
  },
  {
    id: '7',
    title: 'Modern Townhouse',
    price: 520000,
    location: 'Seattle, Washington',
    images: ['/images/property-7.jpg', '/images/property-4.jpg', '/images/property-1.jpg'],
    description: 'This contemporary townhouse offers modern living in a prime location. Features include an open floor plan, gourmet kitchen, and private rooftop terrace. Walking distance to shops and restaurants.',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    amenities: ['Rooftop', 'Parking', 'Smart Home', 'Energy Efficient'],
    status: 'available',
    featured: false,
    propertyType: 'house',
    createdAt: '2024-03-01'
  },
  {
    id: '8',
    title: 'Luxury Master Suite Condo',
    price: 750000,
    location: 'San Francisco, California',
    images: ['/images/property-8.jpg', '/images/property-3.jpg', '/images/property-5.jpg'],
    description: 'Elegant condo featuring a stunning master suite with city views. The home includes a modern kitchen, spacious living area, and luxury finishes throughout. Building amenities include a fitness center and concierge.',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    amenities: ['Gym', 'Concierge', 'Rooftop', 'Parking', 'Storage'],
    status: 'available',
    featured: true,
    tag: 'featured',
    propertyType: 'condo',
    createdAt: '2024-02-15'
  },
  {
    id: '9',
    title: 'Spa-Inspired Residence',
    price: 890000,
    location: 'Scottsdale, Arizona',
    images: ['/images/property-9.jpg', '/images/property-6.jpg', '/images/property-2.jpg'],
    description: 'This unique residence features spa-inspired bathrooms and a wellness-focused design. The home includes a meditation garden, steam room, and luxurious master suite.',
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    amenities: ['Spa', 'Garden', 'Pool', 'Meditation Room', 'Smart Home'],
    status: 'available',
    featured: false,
    tag: 'new',
    propertyType: 'house',
    createdAt: '2024-03-20'
  }
];

export const sampleLeads: Lead[] = [
  {
    id: '1',
    name: 'Sandeep Gadmale',
    phone: '+91 9820018217',
    email: 'Mantra@example.com',
    message: 'I am interested in the Modern Downtown Apartment. Can we schedule a viewing?',
    propertyId: '1',
    propertyTitle: 'Modern Downtown Apartment',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    name: 'Sandeep Gadmale',
    phone: '+91 9820018217',
    email: 'Mantra@example.com',
    message: 'Please send me more information about the Luxury Mediterranean Villa.',
    propertyId: '2',
    propertyTitle: 'Luxury Mediterranean Villa',
    createdAt: '2024-03-18'
  }
];

export const STORAGE_KEYS = {
  PROPERTIES: 'estatepro_properties',
  LEADS: 'estatepro_leads',
  AUTH: 'estatepro_auth'
};

export const getStoredProperties = (): Property[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.PROPERTIES);

  // If data already exists → use it
  if (stored) {
    return JSON.parse(stored);
  }

  // FIRST TIME ONLY → seed default data
  localStorage.setItem(
    STORAGE_KEYS.PROPERTIES,
    JSON.stringify(properties)
  );

  return properties;
};

export const saveProperties = (props: Property[]) => {
  localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(props));
};


export const getStoredLeads = (): Lead[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.LEADS);
  return stored ? JSON.parse(stored) : sampleLeads;
};

export const saveLeads = (leads: Lead[]) => {
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
};

export const addLead = (lead: Omit<Lead, 'id' | 'createdAt'>) => {
  const leads = getStoredLeads();
  const newLead: Lead = {
    ...lead,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  leads.push(newLead);
  saveLeads(leads);
  return newLead;
};
