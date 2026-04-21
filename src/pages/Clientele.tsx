import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import GlobalExportMap from '@/components/GlobalExportMap';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import { Clock, Package, Settings, Shield } from 'lucide-react';

const Clientele = () => {
  const capabilities = [
    {
      icon: Package,
      title: 'Monthly Capacity',
      value: '2M+ Meters',
      description: 'High-volume production capacity to meet large-scale demands',
    },
    {
      icon: Clock,
      title: 'Lead Times',
      value: '15-30 Days',
      description: 'Quick turnaround times for both standard and custom orders',
    },
    {
      icon: Settings,
      title: 'Custom Development',
      value: '100% Tailored',
      description: 'Complete customization to meet specific client requirements',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      value: 'MSME Registered',
      description: 'Rigorous quality control at every stage of production',
    },
  ];

  const exportCountries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Italy',
    'Spain', 'Netherlands', 'Japan', 'South Korea', 'Australia',
    'Canada', 'UAE', 'Saudi Arabia', 'Turkey', 'Brazil',
    'Mexico', 'South Africa', 'Egypt', 'Bangladesh', 'Sri Lanka',
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-32 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Trusted Worldwide
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="Our Clientele"
              className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-xl text-muted-foreground font-light">
                Trusted by global brands and manufacturers worldwide
              </p>
            </Reveal>
          </div>
        </section>

        <GlobalExportMap />
        <Testimonials />

        {/* Client Types */}
        <section className="py-24 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Our Client Portfolio
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                We serve diverse markets with specialized fabric solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Luxury Fashion Brands
                </h3>
                <p className="font-body text-muted-foreground">
                  High-end fashion houses requiring premium fabrics with exceptional quality and unique designs
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  High-Volume Manufacturers
                </h3>
                <p className="font-body text-muted-foreground">
                  Large-scale manufacturers needing consistent quality and reliable supply chains
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg text-center">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Home Furnishing Companies
                </h3>
                <p className="font-body text-muted-foreground">
                  Interior design companies and furniture manufacturers seeking durable, stylish fabrics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Production Capabilities */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Production Capabilities
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                State-of-the-art facilities designed for excellence at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <span className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-125 group-hover:border-primary/0 transition-all duration-700" />
                    <span className="absolute inset-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                      <capability.icon className="w-7 h-7" />
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {capability.title}
                  </h3>
                  
                  <div className="font-serif text-2xl font-bold text-primary mb-4 tabular-nums">
                    {capability.value}
                  </div>
                  
                  <p className="font-body text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clientele;