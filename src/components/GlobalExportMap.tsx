import { motion } from 'framer-motion';
import worldMapImage from '@/assets/world-map.jpg';

const exportDestinations = [
  { name: 'USA', x: '20%', y: '42%' },
  { name: 'UK', x: '45%', y: '30%' },
  { name: 'Germany', x: '49%', y: '32%' },
  { name: 'Italy', x: '49%', y: '40%' },
  { name: 'Japan', x: '85%', y: '38%' },
  { name: 'Australia', x: '83%', y: '78%' },
  { name: 'UAE', x: '60%', y: '50%' },
  { name: 'Canada', x: '18%', y: '28%' },
  { name: 'Bangladesh', x: '70%', y: '48%' },
  { name: 'Sri Lanka', x: '68%', y: '58%' },
];

const indiaPosition = { x: '65%', y: '48%' };

const GlobalExportMap = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Global Reach
          </motion.h2>
          <motion.p
            className="font-body text-xl opacity-80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by international labels and high-volume manufacturers across the world
          </motion.p>
        </div>

        {/* World Map with markers */}
        <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10">
          <img
            src={worldMapImage}
            alt="World Map showing our global reach"
            className="w-full h-64 md:h-96 object-cover opacity-40"
          />

          {/* India marker */}
          <div
            className="absolute"
            style={{ top: indiaPosition.y, left: indiaPosition.x, transform: 'translate(-50%, -50%)' }}
          >
            <div className="relative">
              <div className="w-5 h-5 bg-primary-foreground rounded-full border-2 border-primary" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                India
              </div>
              <div className="absolute inset-0 w-5 h-5 rounded-full border border-primary-foreground animate-ping opacity-40" />
            </div>
          </div>

          {/* Export destination markers */}
          {exportDestinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              className="absolute"
              style={{ top: dest.y, left: dest.x, transform: 'translate(-50%, -50%)' }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group cursor-pointer">
                <div className="w-3 h-3 bg-accent rounded-full border border-primary-foreground transition-transform duration-300 group-hover:scale-150" />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-foreground/90 text-primary px-2 py-0.5 rounded text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { number: '20+', label: 'Countries Served' },
            { number: '500+', label: 'Global Partners' },
            { number: '40+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="font-serif text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="font-body text-lg opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalExportMap;
