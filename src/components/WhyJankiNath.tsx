import { Microscope, Award, Factory, Lightbulb } from 'lucide-react';

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
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Janki Nath & Co.?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Four pillars that set us apart in the global textile industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJankiNath;