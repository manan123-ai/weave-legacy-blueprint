import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
      value: 'ISO Certified',
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
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
              Our Clientele
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Trusted by global brands and manufacturers worldwide
            </p>
          </div>
        </section>

        {/* Export Coverage */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Global Export Coverage
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                We export to over 50 countries across 6 continents, building lasting partnerships with brands worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
              {exportCountries.map((country, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg text-center hover:bg-accent transition-colors"
                >
                  <span className="font-body text-sm text-muted-foreground">
                    {country}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <div className="font-serif text-4xl font-bold mb-2">50+</div>
                <div className="font-body text-lg">Countries Served</div>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <div className="font-serif text-4xl font-bold mb-2">500+</div>
                <div className="font-body text-lg">Global Partners</div>
              </div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg">
                <div className="font-serif text-4xl font-bold mb-2">25+</div>
                <div className="font-body text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

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
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    {capability.title}
                  </h3>
                  
                  <div className="font-serif text-2xl font-bold text-primary mb-4">
                    {capability.value}
                  </div>
                  
                  <p className="font-body text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
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