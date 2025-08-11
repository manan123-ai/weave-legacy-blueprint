import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const location = useLocation();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            JANKI NATH & CO.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Certifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCertificatesOpen(!certificatesOpen)}
                onBlur={() => setTimeout(() => setCertificatesOpen(false), 150)}
                className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Award className="w-4 h-4" />
                Certifications
                <ChevronDown className={`w-4 h-4 transition-transform ${certificatesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {certificatesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg py-2 z-50">
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
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Certifications Section */}
              <div className="border-t border-border mt-2 pt-2">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Sustainability Certificates
                </div>
                {certificates.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.href}
                    className="block px-6 py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;