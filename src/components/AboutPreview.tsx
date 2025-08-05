import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
          Legacy in Every Thread
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            For generations, Janki Nath & Co. has been weaving excellence into every fabric we create. 
            Our commitment to quality and innovation has made us a trusted partner for international 
            brands and manufacturers worldwide.
          </p>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            From traditional techniques passed down through generations to cutting-edge technology, 
            we blend heritage with innovation to create fabrics that define luxury and durability.
          </p>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Every thread tells a story of precision, every weave speaks of craftsmanship, 
            and every fabric carries our promise of uncompromising quality.
          </p>
        </div>
        
        <Button asChild variant="outline" size="lg" className="font-body font-medium">
          <Link to="/about">Know More About Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutPreview;