import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificates = [
    { name: 'GOTS Certification', href: '#gots-certificate' },
    { name: 'OCS Certification', href: '#ocs-certificate' },
    { name: 'OEKO-TEX Standard 100', href: '#oeko-tex-certificate' },
    { name: 'ISO 9001:2015', href: '#iso-certificate' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fabrics', path: '/fabrics' },
    { name: 'Clientele', path: '/clientele' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              className={`font-serif text-2xl font-bold transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Janki Nath & Co.
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`font-body text-sm font-medium transition-colors relative group ${
                    location.pathname === item.path
                      ? scrolled ? 'text-primary' : 'text-white'
                      : scrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            
            {/* Certifications Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setCertificatesOpen(!certificatesOpen)}
                onBlur={() => setTimeout(() => setCertificatesOpen(false), 150)}
                className={`font-body text-sm font-medium transition-colors flex items-center gap-1 ${
                  scrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award className="w-4 h-4" />
                Certifications
                <motion.div
                  animate={{ rotate: certificatesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {certificatesOpen && (
                  <motion.div 
                    className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-3 py-2 text-xs font-medium text-muted-foreground border-b border-border">
                      Sustainability Certificates
                    </div>
                    {certificates.map((cert, index) => (
                      <motion.a
                        key={cert.name}
                        href={cert.href}
                        className="block px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                        onClick={() => setCertificatesOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        {cert.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-base font-medium font-body transition-colors rounded-md ${
                        location.pathname === item.path
                          ? 'text-primary bg-secondary'
                          : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Certifications Section */}
                <motion.div 
                  className="border-t border-border mt-2 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Sustainability Certificates
                  </div>
                  {certificates.map((cert, index) => (
                    <motion.a
                      key={cert.name}
                      href={cert.href}
                      className="block px-6 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors rounded-md"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {cert.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;