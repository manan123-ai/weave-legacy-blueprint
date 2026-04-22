import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Package, Truck, Award, Leaf, HeartHandshake, ShieldCheck, Recycle } from 'lucide-react';
import Footer from '@/components/Footer';
import IndiaWorldMap from '@/components/IndiaWorldMap';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import fabric and weaving images
import weavingLoomBanner from '@/assets/weaving-loom-banner.jpg';
import productionRawMaterials from '@/assets/production-raw-materials.jpg';
import productionMaterialPrep from '@/assets/production-material-prep.jpg';
import productionLoomSetup from '@/assets/production-loom-setup.jpg';
import productionWeaving from '@/assets/production-weaving.jpg';
import productionQualityCheck from '@/assets/production-quality-check.jpg';
import productionPackaging from '@/assets/production-packaging.jpg';

const ProductionProcess = () => {
  const productionSteps = [
    {
      id: 1,
      title: "Raw Material Selection & Quality Check",
      description: "Premium quality raw materials are carefully selected and undergo rigorous quality testing to ensure they meet our strict standards.",
      image: productionRawMaterials,
      icon: <CheckCircle className="h-8 w-8" />,
      duration: "1-2 Days"
    },
    {
      id: 2,
      title: "Material Preparation & Processing", 
      description: "Raw materials are prepared, sorted by specifications, and processed using advanced techniques to achieve perfect quality standards.",
      image: productionMaterialPrep,
      icon: <Users className="h-8 w-8" />,
      duration: "2-3 Days"
    },
    {
      id: 3,
      title: "Loom Setup & Warping",
      description: "Our skilled technicians set up the looms with precision, ensuring proper tension and alignment for optimal weaving.",
      image: productionLoomSetup,
      icon: <Package className="h-8 w-8" />,
      duration: "1 Day"
    },
    {
      id: 4,
      title: "Weaving Process",
      description: "Master weavers operate state-of-the-art looms, combining traditional techniques with modern technology to create exceptional fabrics.",
      image: productionWeaving,
      icon: <Clock className="h-8 w-8" />,
      duration: "3-7 Days"
    },
    {
      id: 5,
      title: "Quality Control & Finishing",
      description: "Each fabric undergoes thorough inspection, finishing treatments, and final quality checks before packaging.",
      image: productionQualityCheck,
      icon: <Award className="h-8 w-8" />,
      duration: "1-2 Days"
    },
    {
      id: 6,
      title: "Packaging & Dispatch",
      description: "Approved fabrics are carefully packaged using industry-standard methods and dispatched with proper documentation.",
      image: productionPackaging,
      icon: <Truck className="h-8 w-8" />,
      duration: "1 Day"
    }
  ];

  const orderingSteps = [
    {
      step: "01",
      title: "Initial Inquiry",
      description: "Contact us with your fabric requirements, specifications, and quantity needs."
    },
    {
      step: "02", 
      title: "Sample Development",
      description: "We create samples based on your specifications for your approval and testing."
    },
    {
      step: "03",
      title: "Quote & Agreement",
      description: "Receive detailed quotation with pricing, timeline, and terms for your approval."
    },
    {
      step: "04",
      title: "Production Planning",
      description: "Your order enters our production schedule with dedicated project management."
    },
    {
      step: "05",
      title: "Manufacturing",
      description: "Skilled craftsmen execute your order using our proven 6-step production process."
    },
    {
      step: "06",
      title: "Delivery",
      description: "Quality-assured fabrics are packaged and delivered to your specified location."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={weavingLoomBanner} 
            alt="Fabric Production Process" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.4em] text-white/70 mb-6">
              Behind the Craft
            </p>
          </Reveal>
          <KineticHeading
            as="h1"
            text="Production Process & Ordering"
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.05]"
          />
          <Reveal delay={0.4}>
            <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Discover our meticulous 6-step production process and how to place orders
            </p>
          </Reveal>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              How to Order
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined ordering process ensures smooth collaboration from inquiry to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="pt-4">
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Steps Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Production Process
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Every fabric is crafted through our meticulous 6-step process, ensuring uncompromising quality
            </p>
          </motion.div>

          <div className="space-y-16">
            {productionSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="flex-1 relative">
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-primary">
                      {step.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                      {step.id}
                    </div>
                    <div className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-medium">
                      {step.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Ethical Workforce */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
              Conscious Craft
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Sustainable Practices & <span className="italic text-muted-foreground">Ethical Workforce</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Beyond the loom, we believe true craftsmanship begins with caring for the people and planet behind every thread.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: 'Sustainable Materials',
                description: 'GOTS, OCS and OEKO-TEX aligned sourcing — organic cotton, natural fibres and responsibly produced blends.',
              },
              {
                icon: Recycle,
                title: 'Resource Conscious',
                description: 'Water-conscious dyeing, optimised energy use across our weaving units and continuous reduction of textile waste.',
              },
              {
                icon: HeartHandshake,
                title: 'We Care for Our Workforce',
                description: 'Fair wages, safe working environments, and long-term partnerships with the artisans and operators who power our looms.',
              },
              {
                icon: ShieldCheck,
                title: 'Ethical Working Conditions',
                description: 'Strict no child-labour policy, regulated working hours, and transparent practices across every facility we operate.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-card p-8 rounded-sm border border-border/40 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] transition-all duration-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* India World Map Section */}
      <IndiaWorldMap />

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Order?
            </h2>
            <p className="font-body text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Contact our team today to discuss your fabric requirements and experience our world-class production process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="secondary" 
                size="lg"
                className="font-body font-medium hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="font-body font-medium hover:scale-105 transition-all duration-300 border-white text-white hover:bg-white hover:text-primary"
              >
                <Link to="/fabrics">View Our Fabrics</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductionProcess;