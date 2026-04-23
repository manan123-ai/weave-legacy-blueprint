import { Microscope, Award, Factory, Lightbulb } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '@/components/motion/AnimatedCounter';
import Reveal from '@/components/motion/Reveal';

const WhyJankiNath = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%']);

  const differentiators = [
    {
      icon: Microscope,
      title: 'Unmatched Weaving Complexity',
      description:
        'We specialize in intricate patterns and complex weaves that others find impossible to execute.',
    },
    {
      icon: Award,
      title: 'Export-Grade Quality',
      description:
        'Every fabric meets international standards with rigorous quality control at every stage.',
    },
    {
      icon: Factory,
      title: 'High-Capacity Production',
      description:
        'State-of-the-art facilities capable of handling large-scale orders without compromising quality.',
    },
    {
      icon: Lightbulb,
      title: 'In-House R&D and Customization',
      description:
        'Dedicated research team continuously innovating and developing custom solutions for clients.',
    },
  ];

  const stats = [
    { value: 40, suffix: '+', label: 'Years of Heritage' },
    { value: 2, suffix: 'M+', label: 'Meters Per Month' },
    { value: 20, suffix: '+', label: 'Countries Served' },
    { value: 500, suffix: '+', label: 'Global Partners' },
  ];

  return (
    <section ref={ref} className="py-32 bg-accent relative overflow-hidden">
      {/* Animated vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-primary/10 hidden lg:block">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary origin-top"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
            The Difference
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 leading-[1.05]">
            Why Janki Nath <span className="italic text-muted-foreground">& Co.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Four pillars that set us apart in the global textile industry
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="text-center group p-8 rounded-sm glass hover-glow border border-border/40 hover:border-primary/30 transition-all duration-700"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                <span className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-125 group-hover:border-primary/0 transition-all duration-700" />
                <span className="absolute inset-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                  <item.icon className="w-7 h-7" />
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-primary mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-primary/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2 tabular-nums text-gradient-luxe">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyJankiNath;
