import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, Phone, Home, Building2, Users, Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Listings', href: '/listings', icon: Building2 },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: Contact },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className={`h-8 w-8 ${scrolled ? 'text-blue-900' : 'text-white'}`} />
            <span className={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              Mantra Properties
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  scrolled
                    ? isActive(link.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    : isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="navbar-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${scrolled ? 'bg-blue-600' : 'bg-white'}`}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9820018217" className={`flex items-center space-x-2 text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <Phone className="h-4 w-4" />
              <span>+91 9820018217</span>
            </a>
            <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={scrolled ? 'text-gray-700' : 'text-white'}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                    <Building2 className="h-6 w-6 text-blue-900" />
                    <span className="text-lg font-bold text-blue-900">EstatePro</span>
                  </Link>
                </div>
                <nav className="flex-1 py-6">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                            isActive(link.href) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <link.icon className="h-5 w-5" />
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="py-4 border-t">
                  <Button asChild className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
