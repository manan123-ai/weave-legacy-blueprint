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
    "Janki Nath & Co. is a woven fabric manufacturer and exporter based in Mayapuri, New Delhi. Our range covers cotton, linen, jacquard, viscose, dobby, twill, yarn-dyed, upholstery and crepe fabrics, along with indigo, lurex, IKAT and Lycra blend constructions. Every fabric is woven — structure, texture and pattern built into the cloth itself — and each category draws on dedicated development experience across our weaving units in Meerut, Bhiwandi/Ichalkaranji, Erode, Salem and Surat.",
    "Cotton and linen serve shirting, dresses and everyday apparel; jacquard and dobby bring woven pattern to occasion wear and furnishing; viscose and crepe give dresses and blouses their drape; yarn-dyed checks and stripes, indigo and IKAT add colour and heritage character to a collection; upholstery fabrics carry sofas, cushions and curtains; and lurex and Lycra blends add shine and stretch comfort where a design calls for it.",
    "Our fabrics are chosen by garment brands building seasonal collections, interior designers and home furnishing companies specifying cloth for curtains, cushions and upholstery, fabric retailers stocking dependable lines, and sourcing houses managing production for their own clients. Whether the need is a shirting for a capsule collection or a furnishing weave for a hospitality project, we work from your brief: end use, handle, weight, colour and certification.",
    "Janki Nath & Co. was founded in 1968 and is still run by the family, now in its fourth generation. Being family-run means you speak with the people who run the business and are accountable for your order. Our fabrics are available under BCI, GOTS, OCS, OEKO-TEX Standard 100 and GRS certification, with documentation provided for certified orders.",
    "We work with small development quantities as readily as with bulk production, so a new buyer can validate a fabric before committing to volume, and a regular buyer can scale the same construction without changing supplier. Custom development is part of everyday work: we develop weaves, yarn combinations, colours and finishes to your brief, from the first strike-off sample through to production quantity. Standard lead times are 15–30 days for running qualities and 30–45 days for custom development. Certified fabric development is available, and we also work with conventional constructions depending on your requirements. From the first conversation to dispatch, you receive clear communication on construction, timelines and documentation.",
    "Five weaving units, one standard of quality, and a team that is easy to reach. Message us on WhatsApp with your end use, quantity and timeline, and we will come back with the right construction and a clear plan.",
  ];

  return (
    <section ref={ref} className="py-32 bg-secondary relative overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={weavingVideo}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
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
          text="Premium Woven Fabric Manufacturer & Exporter from India"
          highlight="Exporter"
          className="font-serif text-4xl md:text-6xl font-bold text-primary mb-12 leading-[1.1]"
        />

        <div className="max-w-3xl mx-auto mb-14 space-y-7">
          {paragraphs.map((text, index) => (
            <Reveal key={index} delay={index * 0.12} y={20}>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed font-light">
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
          <p className="mt-6 font-body text-base text-muted-foreground">
            <a
              href="https://wa.me/919891542727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Start your enquiry on WhatsApp →
            </a>
          </p>
        </Reveal>
      </FigmaSurface>
    </section>
  );
};

export default AboutPreview;
