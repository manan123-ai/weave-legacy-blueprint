import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold mb-4 block">
              JANKI NATH & CO.
            </Link>
            <p className="font-body text-primary-foreground/80 mb-6 max-w-md">
              Weaving excellence for generations. Premium quality fabrics for the world's most iconic brands.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/jankinathandco?igsh=MTMyamltNDFxNGdvOQ%3D%3D&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                About Us
              </Link>
              <Link to="/fabrics" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Fabrics
              </Link>
              <Link to="/clientele" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Clientele
              </Link>
              <Link to="/contact" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                <a 
                  href="https://maps.app.goo.gl/JnbyovcrkzdVrCeY6?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  A-14, MAYAPURI INDUSTRIAL AREA<br />
                  PHASE -1, NEW DELHI -110064<br />
                  India
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  jcofabrics@yahoo.co.in
                </a>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60" />
                  <a href="tel:+919891542727" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 9891542727
                  </a>
                </div>
                <div className="flex items-center space-x-3 ml-8">
                  <a href="tel:+919810111193" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 9810111193
                  </a>
                </div>
                <div className="flex items-center space-x-3 ml-8">
                  <a href="tel:+919810069936" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 9810069936
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © 2024 Janki Nath & Co. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 md:mt-0 justify-center md:justify-end">
            <span className="font-body text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              GOTS Certified
            </span>
            <span className="font-body text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              OCS Certified
            </span>
            <span className="font-body text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              OEKO-TEX Standard 100
            </span>
            <span className="font-body text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;