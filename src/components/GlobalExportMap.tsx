import { motion } from 'framer-motion';
import Globe3D from '@/components/Globe3D';

const GlobalExportMap = () => {
  const exportLocations = [
    { name: 'New York', x: '25%', y: '35%' },
    { name: 'London', x: '45%', y: '30%' },
    { name: 'Paris', x: '48%', y: '32%' },
    { name: 'Milan', x: '50%', y: '38%' },
    { name: 'Tokyo', x: '85%', y: '40%' },
    { name: 'Hong Kong', x: '82%', y: '48%' },
    { name: 'Dubai', x: '60%', y: '45%' },
    { name: 'Mumbai', x: '70%', y: '48%' },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Global Reach
          </motion.h2>
          <motion.p 
            className="font-body text-xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by international labels and high-volume manufacturers across the world
          </motion.p>
        </motion.div>

        <Globe3D />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { number: '10+', label: 'Countries Served' },
            { number: '50+', label: 'Global Partners' },
            { number: '40+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="font-serif text-3xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="font-body text-lg opacity-90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalExportMap;