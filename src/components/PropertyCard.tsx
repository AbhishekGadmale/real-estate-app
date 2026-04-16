import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const tagColors = {
  new: 'bg-cyan-500 hover:bg-cyan-600',
  featured: 'bg-amber-500 hover:bg-amber-600',
  hot: 'bg-red-500 hover:bg-red-600',
};

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {property.status === 'sold' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge className="bg-gray-600 text-white text-sm px-4 py-1">SOLD</Badge>
          </div>
        )}
        
        {property.tag && property.status !== 'sold' && (
          <div className="absolute top-4 left-4">
            <Badge className={`${tagColors[property.tag]} text-white text-xs px-3 py-1 capitalize`}>
              {property.tag}
            </Badge>
          </div>
        )}

        {property.featured && !property.tag && property.status !== 'sold' && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white text-xs px-3 py-1">Featured</Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button asChild variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Link to={`/property/${property.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-blue-900">{formatPrice(property.price)}</h3>
          {property.status === 'sold' && <Badge variant="secondary" className="text-gray-500">Sold</Badge>}
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h4>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
