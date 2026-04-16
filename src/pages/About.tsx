import { motion } from 'framer-motion';
import {  CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StatCard from '@/components/StatCard';

const achievements = [
  'Over 500+ properties sold successfully',
  '10+ years of industry experience',
  'Award-winning customer service',
  'Expert team of 50+ agents',
  'Comprehensive market coverage',
  'Transparent and ethical practices',
];

const partners = ['Coldwell Banker', 'RE/MAX', 'Keller Williams', 'Sotheby\'s', 'Century 21', 'Compass'];

const stats = [
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Expert Agents' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-blue-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About EstatePro</h1>
            <p className="text-lg text-white/80">Your trusted partner in real estate. We have been helping families find their dream homes and investors build their portfolios for over a decade.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/agent.jpg" alt="Sarah Johnson - Lead Agent" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm text-blue-200">Years Experience</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sarah Johnson</h2>
              <p className="text-blue-600 font-medium mb-6">Founder & Lead Real Estate Agent</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over a decade of experience in the real estate industry, I have helped hundreds of families find their perfect homes and assisted investors in building profitable property portfolios.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                At EstatePro, we believe that finding a home is more than just a transaction – it is about finding a place where memories are made.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+91 9820018217</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>mantra@estatepro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>123 Real Estate Ave, Mumbai, NY 10001</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Licensed Realtor</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Certified Negotiator</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Top Agent 2023</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
              <p className="text-gray-600 mb-8">Over the years, we have built a reputation for excellence in the real estate industry.</p>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li key={achievement} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
              <p className="text-gray-600 mb-8">We are proud to collaborate with some of the most respected names in the real estate industry.</p>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <motion.div key={partner} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                    <span className="font-medium text-gray-700">{partner}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-lg text-white/80 mb-8">
            Let us help you find your dream property or sell your current one.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold">
              <a href="/contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
