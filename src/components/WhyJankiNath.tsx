import { Microscope, Award, Factory, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyJankiNath = () => {
  const differentiators = [
    {
      icon: Microscope,
      title: 'Unmatched Weaving Complexity',
      description: 'We specialize in intricate patterns and complex weaves that others find impossible to execute.',
    },
    {
      icon: Award,
      title: 'Export-Grade Quality',
      description: 'Every fabric meets international standards with rigorous quality control at every stage.',
    },
    {
      icon: Factory,
      title: 'High-Capacity Production',
      description: 'State-of-the-art facilities capable of handling large-scale orders without compromising quality.',
    },
    {
      icon: Lightbulb,
      title: 'In-House R&D and Customization',
      description: 'Dedicated research team continuously innovating and developing custom solutions for clients.',
    },
  ];

  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-primary rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Why Janki Nath & Co.?
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Four pillars that set us apart in the global textile industry
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 relative"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <item.icon className="w-8 h-8" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
              
              <motion.h3 
                className="font-serif text-xl font-semibold text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="font-body text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJankiNath;