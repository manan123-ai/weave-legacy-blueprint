import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const [fabricsOpen, setFabricsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const certificates = [
    { name: 'GOTS Certification', href: '#gots-certificate' },
    { name: 'OCS Certification', href: '#ocs-certificate' },
    { name: 'OEKO-TEX Standard 100', href: '#oeko-tex-certificate' },
    { name: 'MSME Registered', href: '#msme-certificate' },
    { name: 'BCI Member', href: '#bci-certificate' },
  ];

  const fabricLinks = [
    { name: 'Cotton Fabric', path: '/fabrics/cotton' },
    { name: 'Linen Fabric', path: '/fabrics/linen' },
    { name: 'Jacquard Fabric', path: '/fabrics/jacquard' },
    { name: 'Yarn Dyed Fabric', path: '/fabrics/yarn-dyed' },
    { name: 'Upholstery Fabric', path: '/fabrics/upholstery' },
    { name: 'Viscose Fabric', path: '/fabrics/viscose' },
    { name: 'Dobby Fabric', path: '/fabrics/dobby' },
    { name: 'View All Fabrics', path: '/fabrics' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Production', path: '/production' },
    { name: 'Export', path: '/export' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Showroom', path: '/showroom' },
    { name: 'Sampling', path: '/sampling' },
    { name: 'Sourcing Guide', path: '/fabric-sourcing-guide' },
    { name: 'Blog', path: '/blog' },
    { name: 'Clientele', path: '/clientele' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.08)] border-b border-border/40'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between items-center gap-4"
          animate={{ height: scrolled ? 56 : 80 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-[2px]">
                  Janki Nath & Co.
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 flex-wrap justify-end">
            {navItems.slice(0, 2).map((item) => (
              <NavLink key={item.path} item={item} scrolled={scrolled} active={location.pathname === item.path} />
            ))}

            {/* Fabrics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFabricsOpen((v) => !v)}
                onBlur={() => setTimeout(() => setFabricsOpen(false), 150)}
                className={`font-body text-sm font-medium transition-colors flex items-center gap-1 ${
                  scrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                Fabrics
                <ChevronDown className={`w-4 h-4 transition-transform ${fabricsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {fabricsOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {fabricLinks.map((f) => (
                      <Link
                        key={f.path}
                        to={f.path}
                        onMouseDown={() => setFabricsOpen(false)}
                        className="block px-4 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {f.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(2).map((item) => (
              <NavLink key={item.path} item={item} scrolled={scrolled} active={location.pathname === item.path} />
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
                <ChevronDown className={`w-4 h-4 transition-transform ${certificatesOpen ? 'rotate-180' : ''}`} />
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
                    {certificates.map((cert) => (
                      <a
                        key={cert.name}
                        href={cert.href}
                        className="block px-3 py-2 text-sm font-body text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                        onClick={() => setCertificatesOpen(false)}
                      >
                        {cert.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.div whileTap={{ scale: 0.95 }} className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={scrolled ? 'text-primary' : 'text-white'}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md max-h-[75vh] overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium font-body transition-colors rounded-md ${
                      location.pathname === item.path
                        ? 'text-primary bg-secondary'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Fabrics
                  </div>
                  {fabricLinks.map((f) => (
                    <Link
                      key={f.path}
                      to={f.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors rounded-md"
                    >
                      {f.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border mt-2 pt-2">
                  <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
                    <Award className="w-4 h-4" /> Sustainability Certificates
                  </div>
                  {certificates.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.href}
                      className="block px-6 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {cert.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({
  item,
  scrolled,
  active,
}: {
  item: { name: string; path: string };
  scrolled: boolean;
  active: boolean;
}) => (
  <Link
    to={item.path}
    className={`font-body text-sm font-medium tracking-wide transition-colors relative group ${
      active
        ? scrolled
          ? 'text-primary'
          : 'text-white'
        : scrolled
        ? 'text-muted-foreground hover:text-primary'
        : 'text-white/70 hover:text-white'
    }`}
  >
    {item.name}
    <span
      className={`absolute -bottom-1 left-0 h-px transition-all duration-500 ease-out ${
        scrolled ? 'bg-primary' : 'bg-white'
      } ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
    />
  </Link>
);

export default Navigation;
