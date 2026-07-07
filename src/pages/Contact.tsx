import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

import KineticHeading from '@/components/motion/KineticHeading';
import KineticStrip from '@/components/motion/KineticStrip';
import Reveal from '@/components/motion/Reveal';
import SEO from '@/components/SEO';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    fabricInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms (form-name must match the static form in index.html)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'bot-field': '',
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: 'Message sent!',
        description: "Thank you — we've received your inquiry and will get back to you shortly.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        fabricInterest: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly at jcofabrics@yahoo.co.in',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact JNC Fabrics — Woven Fabric Export Enquiries"
        description="Contact JNC Fabrics for woven fabric export enquiries, samples and pricing. Email: jcofabrics@yahoo.co.in | WhatsApp: +91 9891542727 | New Delhi, India."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact JNC Fabrics',
          url: 'https://jcofabrics.com/contact',
        }}
      />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Let's Connect
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="Contact JNC Fabrics — Woven Fabric Export Enquiries"
              className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                For fabric samples, export pricing, certifications and custom development enquiries. We supply export-grade woven fabrics to buyers across USA, UK, Europe, Japan, Australia and UAE — send us your fabric brief and we will respond within 24 hours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        Head Office / Showroom
                      </h3>
                      <a
                        href="https://maps.app.goo.gl/JnbyovcrkzdVrCeY6?g_st=ic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        A-14, MAYAPURI INDUSTRIAL AREA<br />
                        PHASE -1, NEW DELHI -110064<br />
                        India
                      </a>
                      <h4 className="font-body text-xs uppercase tracking-[0.3em] text-primary mt-5 mb-2">
                        Weaving Units
                      </h4>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        Meerut · Bhiwandi / Ichalkaranji<br />
                        Erode · Salem · Surat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:jcofabrics@yahoo.co.in"
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        jcofabrics@yahoo.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        Phone
                      </h3>
                      <div className="space-y-1">
                        <a href="tel:+919891542727" className="block font-body text-muted-foreground hover:text-primary transition-colors">
                          +91 98915 42727
                        </a>
                        <a href="tel:+919810111193" className="block font-body text-muted-foreground hover:text-primary transition-colors">
                          +91 98101 11193
                        </a>
                        <a href="tel:+919810069936" className="block font-body text-muted-foreground hover:text-primary transition-colors">
                          +91 98100 69936
                        </a>
                      </div>
                      <h4 className="font-body text-xs uppercase tracking-[0.3em] text-primary mt-4 mb-2">
                        Landline
                      </h4>
                      <div className="space-y-1">
                        <a href="tel:+911147079009" className="block font-body text-muted-foreground hover:text-primary transition-colors">
                          011-47079009
                        </a>
                        <a href="tel:+911145567009" className="block font-body text-muted-foreground hover:text-primary transition-colors">
                          011-45567009
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Google Map */}
                <div className="mt-12">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=A-14,%20MAYAPURI%20INDUSTRIAL%20AREA%20PHASE%20-1,%20NEW%20DELHI%20-110064+(Janki%20Nath%20&amp;%20Co)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                  Request a Fabric Sample
                </h2>
                
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Required hidden inputs for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-medium text-primary mb-2 block">
                        First Name *
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-primary mb-2 block">
                        Last Name *
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Company
                    </label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name" 
                    />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Fabric Interest
                    </label>
                    <Input 
                      name="fabricInterest"
                      value={formData.fabricInterest}
                      onChange={handleInputChange}
                      placeholder="e.g., Cotton, Linen, Jacquards" 
                    />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, quantities, and any specific needs..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full font-body font-medium" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <KineticStrip text="Let's Weave Something Together" />

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-body text-xl opacity-90 mb-8">
              Our team is ready to help you find the perfect fabric solution for your needs.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body font-medium"
            >
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;