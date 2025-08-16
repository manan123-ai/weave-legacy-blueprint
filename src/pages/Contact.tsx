import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
              Contact Us
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Get in touch to discuss your fabric requirements
            </p>
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
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        Address
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
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
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
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        Phone
                      </h3>
                      <a 
                        href="tel:+919891542727" 
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 98915 42727
                      </a>
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
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-medium text-primary mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-primary mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Company
                    </label>
                    <Input placeholder="Your company name" />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Fabric Interest
                    </label>
                    <Input placeholder="e.g., Cotton, Linen, Jacquards" />
                  </div>
                  
                  <div>
                    <label className="font-body text-sm font-medium text-primary mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements, quantities, and any specific needs..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full font-body font-medium" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

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