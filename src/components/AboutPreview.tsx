import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import weavingVideo from '@/assets/weaving-process.jpg';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import MagneticButton from '@/components/motion/MagneticButton';
import FigmaSurface from '@/components/motion/FigmaSurface';
import FrameMarker from '@/components/motion/FrameMarker';

const AboutPreview = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const paragraphs = [
    'For generations, Janki Nath & Co. has been weaving excellence into every fabric we create. Our commitment to quality and innovation has made us a trusted partner for international brands and manufacturers worldwide.',
    "From our Head Office and Showroom in Mayapuri, New Delhi to dedicated weaving units in Meerut, Bhiwandi/Ichalkaranji, Erode, Salem and Surat — every thread is supervised end-to-end across India's most renowned textile hubs.",
    'Every thread tells a story of precision, every weave speaks of craftsmanship, and every fabric carries our promise of uncompromising quality.',
  ];

  return (
    <section ref={ref} className="py-32 bg-secondary relative overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={weavingVideo}
          alt=""
          aria-hidden="true"
          className="w-full h-[120%] object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary" />
      </motion.div>

      <FigmaSurface
        variant="grid"
        frameLabel="Frame · Heritage"
        className="relative z-10"
        innerClassName="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <FrameMarker label="Our Heritage" index="01" />

        <KineticHeading
          as="h2"
          text="Legacy in Every Thread"
          highlight="Thread"
          className="font-serif text-4xl md:text-6xl font-bold text-primary mb-12 leading-[1.1]"
        />

        <div className="max-w-3xl mx-auto mb-14 space-y-7">
          {paragraphs.map((text, index) => (
            <Reveal key={index} delay={index * 0.12} y={20}>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <MagneticButton>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-full px-10 py-6"
            >
              <Link to="/about">Know More About Us</Link>
            </Button>
          </MagneticButton>
        </Reveal>
      </FigmaSurface>
    </section>
  );
};

export default AboutPreview;
