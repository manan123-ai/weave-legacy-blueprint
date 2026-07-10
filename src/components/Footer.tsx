import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.02c.03-3.576.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.31-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.63 2.695 6.54 2.717 2.625-.02 4.358-.631 5.795-2.045 1.64-1.613 1.609-3.593 1.092-4.798-.305-.71-.86-1.305-1.6-1.74-.184 1.286-.594 2.328-1.225 3.114-.846 1.053-2.046 1.63-3.566 1.715-1.149.064-2.256-.21-3.122-.769-1.023-.66-1.62-1.67-1.681-2.85-.119-2.292 1.732-3.94 4.604-4.106.96-.054 1.916-.014 2.756.13-.087-.616-.327-1.181-.737-1.703-.642-.815-1.601-1.245-2.785-1.245-1.151 0-2.13.397-2.853 1.149-.65.677-1.07 1.529-1.249 2.529l-1.954-.526c.282-1.55.881-2.91 1.794-3.866 1.122-1.176 2.625-1.808 4.34-1.808 1.778 0 3.346.764 4.418 2.15.602.776 1.014 1.733 1.231 2.847.83.275 1.583.665 2.224 1.158 1.71 1.32 2.65 3.428 2.65 5.927 0 4.526-3.696 7.823-9.297 7.871zm.067-12.117c-1.892.112-3.107.836-3.063 1.93.018.341.187.681.488.954.504.456 1.241.629 2.084.583 1.225-.068 2.108-.43 2.692-1.094.605-.69.844-1.66.711-2.876-.756-.121-1.535-.18-2.323-.156-.207.006-.404.024-.589.046z"/>
  </svg>
);

const fabricFooterLinks = [
  { name: 'Cotton', path: '/fabrics/cotton' },
  { name: 'Linen', path: '/fabrics/linen' },
  { name: 'Jacquard', path: '/fabrics/jacquard' },
  { name: 'Viscose', path: '/fabrics/viscose' },
  { name: 'Yarn-Dyed', path: '/fabrics/yarn-dyed' },
  { name: 'Dobby', path: '/fabrics/dobby' },
  { name: 'Upholstery', path: '/fabrics/upholstery' },
  { name: 'Crepe & High Twist', path: '/fabrics/crepe' },
  { name: 'Twill & Drills', path: '/fabrics/twill' },
  { name: 'Indigo', path: '/fabrics/indigo' },
  { name: 'Lurex & Sequins', path: '/fabrics/lurex' },
  { name: 'IKAT & Tie Dye', path: '/fabrics/ikat' },
  { name: 'Lycra Blends', path: '/fabrics/lycra-blends' },
  { name: 'All Fabrics →', path: '/fabrics' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold mb-4 block">
              JANKI NATH & CO.
            </Link>
            <p className="font-body text-primary-foreground/80 mb-6 max-w-md">
              Weaving excellence for generations. Our fabrics are used in garments manufactured for leading international fashion brands across USA, UK, Europe, Japan and Australia — supplied through our network of garment manufacturers and buying house clients.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/jankinathandco?igsh=MTMyamltNDFxNGdvOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/manan-bhasin-6a9214417?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@jankinathandco?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <ThreadsIcon className="w-5 h-5" />
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
              <Link to="/export" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Export
              </Link>
              <Link to="/certifications" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Certifications
              </Link>
              <Link to="/showroom" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Showroom
              </Link>
              <Link to="/sampling" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Sampling
              </Link>
              <Link to="/blog" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Blog
              </Link>
              <Link to="/clientele" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Clientele
              </Link>
              <Link to="/contact" className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                Contact
              </Link>
            </nav>
          </div>

          {/* Fabrics */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Fabrics</h3>
            <nav className="space-y-2">
              {fabricFooterLinks.map((f) => (
                <Link
                  key={f.path}
                  to={f.path}
                  className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors block text-sm"
                >
                  {f.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60 shrink-0" />
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-1">
                    Head Office / Showroom
                  </p>
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
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-3 mb-1">
                    Weaving Units
                  </p>
                  <p className="font-body text-sm text-primary-foreground/80">
                    Meerut · Bhiwandi / Ichalkaranji<br />
                    Erode · Salem · Surat
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366] shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <a
                  href="https://wa.me/919891542727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold text-primary-foreground hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 98915 42727
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <a href="mailto:jcofabrics@yahoo.co.in" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  jcofabrics@yahoo.co.in
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+919891542727" className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 98915 42727
                  </a>
                  <a href="tel:+919810111193" className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 98101 11193
                  </a>
                  <a href="tel:+919810069936" className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    +91 98100 69936
                  </a>
                  <a href="tel:+911147079009" className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    011-47079009
                  </a>
                  <a href="tel:+911145567009" className="block font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    011-45567009
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-center md:text-left">
            <p className="font-body text-sm text-primary-foreground/60">
              © 2024 Janki Nath & Co. All rights reserved.
            </p>
            <p className="font-body text-sm text-primary-foreground/60 mt-1">
              Made in India 🇮🇳
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 md:mt-0 justify-center md:justify-end">
            {[
              { label: 'BCI', dot: 'bg-green-400' },
              { label: 'GOTS Certified', dot: 'bg-green-400' },
              { label: 'OCS Certified', dot: 'bg-green-400' },
              { label: 'OEKO-TEX Standard 100', dot: 'bg-blue-400' },
              { label: 'MSME Registered', dot: 'bg-green-400' },
            ].map((badge, i) => (
              <span
                key={badge.label}
                className="badge-scale-in font-body text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded flex items-center gap-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className={`w-2 h-2 ${badge.dot} rounded-full`}></span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;