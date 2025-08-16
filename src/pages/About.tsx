import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
              Our Story
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              40+ Years of Textile Excellence
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">About Janki Nath & Co.</h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Janki Nath & Co. is one of the leading names in the Indian export industry, catering to top garment and home furnishings exporters across Delhi NCR, Jaipur, and Bangalore for over 40 years. Renowned for our exceptional fabric designs and unwavering commitment to quality, we supply international garment brands with a wide range of fabrics that adhere to the highest global standards, including advanced dyeing and processing techniques.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                With our own manufacturing setups in prominent textile hubs such as Meerut, Bhiwandi, Erode, Salem, Surat, Varanasi, and Bhagalpur, we maintain stringent quality control and ensure timely delivery. Our comprehensive product portfolio includes export-grade fabrics such as Greige, RFD, Bleached, Dyed, Printed, Yarn-Dyed, Mill-made, Auto/Powerloom, Handloom, and Jacquard & Dobbys.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Our Vision</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    To be a global leader in the textile industry, renowned for our exceptional quality, innovative designs, and commitment to sustainability, while fostering long-term partnerships with our clients and contributing positively to the community.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-6">Our Mission</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    At Janki Nath, our mission is to deliver superior export-quality fabrics that exceed our clients' expectations through unparalleled craftsmanship, innovative designs, and competitive pricing. We are dedicated to continuous improvement, sustainability, and customer satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-16">Why Choose Janki Nath</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Experience and Expertise", description: "Over four decades in the textile industry with a proven track record" },
                { title: "Top Quality", description: "Exceptional export-quality fabrics that meet the highest standards" },
                { title: "Innovative Designs", description: "Unique and trendsetting fabric designs" },
                { title: "Competitive Prices", description: "High-quality products at competitive rates" },
                { title: "Global Reach", description: "Reliable partner for international clients" },
                { title: "Customer Focus", description: "Tailored solutions with a commitment to customer satisfaction" },
                { title: "Sustainability", description: "Environmentally friendly manufacturing practices" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-primary mb-16">Leadership</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">MR. HAMESH KUMAR BHASIN</h3>
                <p className="font-body text-muted-foreground">Director | 45+ Years Experience</p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">MR. SANDEEPAN BHASIN</h3>
                <p className="font-body text-muted-foreground">Director | 30+ Years Experience</p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">MR. DEEPAK BHASIN</h3>
                <p className="font-body text-muted-foreground">Director | 30+ Years Experience</p>
              </div>
            </div>
            <p className="font-body text-lg text-muted-foreground mt-8">
              The business came into existence in 1968 and has since then been a known name in its field.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;