import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight,Home, Key, Building2, TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import StatCard from '@/components/StatCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useProperties } from '@/hooks/useProperties';

const services = [
  { icon: Home, title: 'Property Sales', description: 'We help you sell your property at the best price with our extensive network and marketing expertise.' },
  { icon: Key, title: 'Property Purchase', description: 'Find your dream property with our expert guidance throughout the entire buying process.' },
  { icon: Building2, title: 'Property Rental', description: 'Premium rental properties for short-term and long-term stays, tailored to your needs.' },
  { icon: Shield, title: 'Property Management', description: 'Professional management services for property owners, handling all aspects of tenancy.' },
  { icon: TrendingUp, title: 'Investment Advice', description: 'Expert advice on real estate investments and portfolio management for maximum returns.' },
  { icon: Users, title: 'Legal Assistance', description: 'Complete legal support for all property transactions, ensuring a smooth process.' },
];

const testimonials = [
  { name: 'Michael Chen', role: 'Home Buyer', content: 'MantraProperties made finding our dream home so easy. Their team was professional, responsive, and really understood what we were looking for. Highly recommend!', rating: 5 },
  { name: 'Sarah Williams', role: 'Property Investor', content: 'Working with MantraProperties has been a game-changer for my investment portfolio. Their market insights and guidance have helped me make smart decisions.', rating: 5 },
  { name: 'David Thompson', role: 'Home Seller', content: 'Sold my property above asking price within two weeks! The team at MantraProperties knows how to market properties effectively. Exceptional service!', rating: 5 },
];

const stats = [
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Expert Agents' },
];

export default function HomePage() {
  const { data: properties = [], isLoading } = useProperties();
  const featuredProperties = properties.filter(p => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="Luxury Property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mumbai Luxury Properties
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl text-white/90 mb-8">
              Discover premium properties in the best locations. Let us help you find the perfect home.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold">
                <Link to="/listings">Browse Listings <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Properties
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-600">
                Handpicked premium properties for you
              </motion.p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-blue-900 text-blue-900 hover:bg-blue-50">
              <Link to="/listings">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="h-[400px] rounded-xl bg-gray-100 animate-pulse" />
              ))
            ) : featuredProperties.length > 0 ? (
              featuredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500">
                No featured properties available at the moment.
              </div>
            )}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              <Link to="/listings">View All Properties <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} content={testimonial.content} rating={testimonial.rating} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-white/80 mb-8">
            Contact us today and let our experts guide you through the process.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/listings">Browse Listings</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
