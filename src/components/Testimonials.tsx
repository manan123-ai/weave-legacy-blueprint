import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Milano Fashion House",
      review: "Janki Nath & Co. has been our trusted fabric partner for over 5 years. Their quality is unmatched and delivery is always on time. The jacquard fabrics they create are simply extraordinary.",
      rating: 5,
      location: "Milan, Italy"
    },
    {
      name: "David Chen",
      company: "Pacific Garments Ltd.",
      review: "Exceptional quality fabrics at competitive prices. Their cotton blends are perfect for our activewear line. The team is responsive and understands our exact requirements.",
      rating: 5,
      location: "Hong Kong"
    },
    {
      name: "Emma Williams",
      company: "London Luxury Textiles",
      review: "Working with Janki Nath has transformed our product line. Their sustainable practices and premium quality fabrics align perfectly with our brand values. Highly recommended!",
      rating: 5,
      location: "London, UK"
    },
    {
      name: "Ahmed Hassan",
      company: "Gulf Fashion Group",
      review: "Outstanding service and remarkable fabric quality. Their ability to handle large volumes while maintaining quality standards is impressive. Our go-to supplier for premium textiles.",
      rating: 5,
      location: "Dubai, UAE"
    },
    {
      name: "Maria Rodriguez",
      company: "Barcelona Home Furnishings",
      review: "The upholstery fabrics from Janki Nath are durable and beautifully designed. Their technical expertise and customer service excellence sets them apart in the industry.",
      rating: 5,
      location: "Barcelona, Spain"
    },
    {
      name: "John Smith",
      company: "American Textile Solutions",
      review: "Consistent quality, innovative designs, and reliable partnerships. Janki Nath delivers exactly what they promise. Their fabric innovation capabilities are truly remarkable.",
      rating: 5,
      location: "New York, USA"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by fashion brands and manufacturers worldwide for our exceptional quality and service
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-accent fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <motion.p 
                className="font-body text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                "{testimonial.review}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-serif text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {testimonial.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {testimonial.location}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-8 bg-primary/10 px-8 py-4 rounded-full">
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">4.9/5</div>
              <div className="font-body text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">500+</div>
              <div className="font-body text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">98%</div>
              <div className="font-body text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;