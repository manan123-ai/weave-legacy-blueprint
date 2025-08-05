import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
              Our Story
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              Weaving Excellence for Generations
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-primary mb-8">
                The Beginning
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Founded in 1999, Janki Nath & Co. began as a small family business with a big dream: 
                to create the finest fabrics in the world. What started in a modest workshop has 
                evolved into one of India's premier textile manufacturers, trusted by global brands 
                and designers.
              </p>
              
              <h2 className="font-serif text-3xl font-bold text-primary mb-8 mt-16">
                Our Philosophy: "Weaving the Impossible"
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                At Janki Nath & Co., we believe that every thread has potential, every weave tells 
                a story, and every fabric can be perfected. Our philosophy of "Weaving the Impossible" 
                drives us to push boundaries, embrace challenges, and create textiles that others 
                consider unachievable.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                This philosophy is reflected in our approach to complex patterns, innovative materials, 
                and custom designs that meet the exacting standards of luxury brands worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-accent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-16">
              Our Journey
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="font-serif text-2xl font-bold text-primary">1999</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold mb-2">Foundation</h3>
                  <p className="font-body text-muted-foreground">
                    Started as a small family business with a focus on quality cotton fabrics.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="font-serif text-2xl font-bold text-primary">2005</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold mb-2">First Export</h3>
                  <p className="font-body text-muted-foreground">
                    Expanded internationally with our first export order to European markets.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="font-serif text-2xl font-bold text-primary">2012</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold mb-2">Modern Facility</h3>
                  <p className="font-body text-muted-foreground">
                    Established our state-of-the-art manufacturing facility with advanced looms.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="font-serif text-2xl font-bold text-primary">2018</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold mb-2">R&D Center</h3>
                  <p className="font-body text-muted-foreground">
                    Launched our in-house R&D center for fabric innovation and development.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="font-serif text-2xl font-bold text-primary">2024</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl font-semibold mb-2">Global Recognition</h3>
                  <p className="font-body text-muted-foreground">
                    Today, we serve 50+ countries and partner with 500+ global brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;