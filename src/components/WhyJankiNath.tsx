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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Janki Nath & Co.?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Four pillars that set us apart in the global textile industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="text-center group p-6 rounded-xl hover:bg-primary/5 transition-all duration-500"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 transition-transform duration-500 group-hover:scale-110"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJankiNath;
