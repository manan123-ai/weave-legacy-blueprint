import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      review: "We have been sourcing woven cotton fabrics from Janki Nath & Co. for our production runs for several years. The consistency is what keeps us coming back — the fabric we receive in bulk matches the approved sample every time. Their GOTS documentation is also complete and properly issued, which our European buyers require.",
      rating: 5,
      location: "Sourcing Manager, Garment Export House, Bangladesh"
    },
    {
      review: "We source linen and linen blend fabrics from JNC for our SS and AW collections. The cotton/linen blends they develop are consistently good — the composition and hand feel hold across reorders, which is critical when we're matching across categories. Sampling turnaround is reasonable and the team is straightforward to deal with.",
      rating: 5,
      location: "Head of Fabric Procurement, Fashion Brand, United Kingdom"
    },
    {
      review: "JNC Fabrics supplies several of our garment manufacturer clients with cotton shirting, dobby and yarn-dyed fabrics. The quality is export grade and the certifications are in order — OEKO-TEX is standard for our German market clients and JNC provides this without issue. Mill-direct supply means pricing is competitive versus trading houses.",
      rating: 5,
      location: "Buying Agent, Textile Buying Office, Germany"
    },
    {
      review: "We source upholstery and furnishing fabric from JNC for our home textile line. The jacquard and dobby constructions we use have been consistently well-made over multiple seasons. The team in New Delhi is knowledgeable and can discuss technical specifications, which matters for furnishing fabric where construction details affect performance.",
      rating: 5,
      location: "Director, Home Furnishing Brand, USA"
    },
    {
      review: "Found JNC through a trade reference and have been sourcing viscose and viscose blend fabrics for our resort wear collection for two seasons. They developed a custom viscose/linen blend for us that we couldn't source elsewhere at this quality and price point. The FOB process from New Delhi is straightforward and shipments have been reliable.",
      rating: 5,
      location: "Textile Sourcing Manager, Apparel Brand, Australia"
    },
    {
      review: "We source yarn-dyed checks and IKAT fabrics from JNC for our premium ethnic wear line. The yarn-dyed checks are consistent in colour and the check alignment is accurate, which is critical for matching at seams. Lead times are as stated and they accommodate urgent development requests when possible.",
      rating: 5,
      location: "Production Manager, Ethnic Wear Manufacturer, India"
    },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

              {/* Reviewer role/location — no personal names */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-body text-sm text-muted-foreground italic">
                  — {testimonial.location}
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
              <div className="font-serif text-2xl font-bold text-primary">5.0/5</div>
              <div className="font-body text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">50+</div>
              <div className="font-body text-sm text-muted-foreground">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold text-primary">55+</div>
              <div className="font-body text-sm text-muted-foreground">Years Since 1968</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
