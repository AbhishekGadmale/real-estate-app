import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Phone, MessageCircle, ArrowLeft, Check, Calendar, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';
import ScheduleVisitModal from '@/components/ScheduleVisitModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Property } from '@/types';
import { getStoredProperties } from '@/lib/data';

const tagColors = {
  new: 'bg-cyan-500',
  featured: 'bg-amber-500',
  hot: 'bg-red-500',
};

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const properties = getStoredProperties();
    const found = properties.find((p) => String(p.id) === id);
    if (found) setProperty(found);
    setLoading(false);
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: property?.title,
        text: `Check out this property: ${property?.title}`,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi, I am interested in "${property?.title}" listed at ${formatPrice(property?.price || 0)}. Can you provide more information?`;
    window.open(`https://wa.me/+15551234567?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+15551234567';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you are looking for does not exist or has been removed.</p>
          <Button asChild><Link to="/listings">Browse Properties</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-20 pb-4 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Button variant="ghost" onClick={() => navigate(-1)} className="text-gray-600">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ImageGallery images={property.images} title={property.title} />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {property.tag && <Badge className={`${tagColors[property.tag]} text-white capitalize`}>{property.tag}</Badge>}
                      {property.status === 'sold' && <Badge className="bg-gray-500 text-white">Sold</Badge>}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{property.title}</h1>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-900">{formatPrice(property.price)}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
                  <div className="text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <Square className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-semibold">{property.area.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">Sq Ft</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 text-gray-600">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Property Details</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Property Type</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Status</span>
                      <span className="font-medium capitalize">{property.status}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Listed On</span>
                      <span className="font-medium">{new Date(property.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500">Property ID</span>
                      <span className="font-medium">#{property.id}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">{property.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>

                <div className="flex items-center space-x-3 mb-6">
                  <img src="/images/agent.jpg" alt="Agent" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Senior Real Estate Agent</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button onClick={handleCall} className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    <Phone className="mr-2 h-4 w-4" /> Call Agent
                  </Button>
                  <Button onClick={handleWhatsApp} variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                  <ScheduleVisitModal propertyTitle={property.title} trigger={
                    <Button variant="outline" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule Visit
                    </Button>
                  } />
                </div>

                <Separator className="my-6" />

                <h3 className="text-lg font-semibold mb-4">Send Inquiry</h3>
                <ContactForm propertyId={property.id} propertyTitle={property.title} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton phoneNumber="+15551234567" message={`Hi, I am interested in "${property.title}". Can you provide more information?`} />
    </div>
  );
}
