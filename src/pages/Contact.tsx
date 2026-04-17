import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const contactInfo = [
  { icon: Phone, title: 'Phone', content: '+91 9820018217', href: 'tel:+91 9820018217' },
  { icon: Mail, title: 'Email', content: 'info@estatepro.com', href: 'mailto:info@estatepro.com' },
  { icon: MapPin, title: 'Address', content: '30 Golden valley Kalina Santacruz, East Mumbai 400098', href: '#' },
  { icon: Clock, title: 'Business Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM', href: '#' },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-blue-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-white/80">Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a key={item.title} href={item.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we will get back to you shortly.</p>
              <ContactForm />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
  <div className="aspect-video rounded-lg overflow-hidden">
    <iframe
      title="Office Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps?q=30 Golden Valley Kalina Santacruz East Mumbai 400098&output=embed"
    ></iframe>
  </div>
</div>
              </div>

              <div className="bg-blue-900 rounded-xl shadow-md p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Send className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>Get personalized property recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Send className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>Schedule property viewings at your convenience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Send className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>Receive expert market analysis and advice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Send className="h-5 w-5 text-blue-300 mt-0.5" />
                    <span>Learn about exclusive listings before they go public</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
