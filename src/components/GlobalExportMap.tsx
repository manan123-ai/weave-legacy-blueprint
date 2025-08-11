import { motion } from 'framer-motion';

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

        <div className="relative max-w-5xl mx-auto">
          {/* World Map SVG - Simplified */}
          <div className="relative bg-primary-foreground/10 rounded-2xl p-8 h-96 overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-20"
              fill="currentColor"
            >
              {/* Simplified world map paths */}
              <path d="M 100 150 Q 200 120 300 150 Q 400 140 500 160 Q 600 150 700 170 Q 800 160 900 180 L 900 350 Q 800 330 700 340 Q 600 350 500 340 Q 400 360 300 350 Q 200 380 100 350 Z" />
              <path d="M 150 200 Q 250 180 350 200 Q 450 190 550 210 L 550 280 Q 450 260 350 270 Q 250 280 150 270 Z" />
              <path d="M 600 220 Q 700 200 800 220 Q 850 210 900 230 L 900 300 Q 850 280 800 290 Q 700 300 600 290 Z" />
            </svg>

            {/* Glowing dots for cities */}
            {exportLocations.map((location, index) => (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: location.x, top: location.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 w-3 h-3 bg-accent rounded-full opacity-75"
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.75, 0, 0.75]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  <motion.div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-body whitespace-nowrap opacity-75"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.75, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {location.name}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { number: '50+', label: 'Countries Served' },
            { number: '500+', label: 'Global Partners' },
            { number: '25+', label: 'Years of Excellence' }
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