import FabricCategoryPage from '@/components/FabricCategoryPage';
import jqFloralMulti from '@/assets/jacquard-floral-multicolour.jpg';
import jqRoseBlack from '@/assets/jacquard-rose-black.jpg';
import jqFloralBlue from '@/assets/jacquard-floral-blue.jpg';
import jqFloralMono from '@/assets/jacquard-floral-mono.jpg';
import jqGeoMono from '@/assets/jacquard-geometric-mono.jpg';
import jacquardNewImg from '@/assets/jacquard-new.jpg';
import cutworkImg from '@/assets/cutwork-jacquard-fabric.jpg';
import jacquardEdenImg from '@/assets/jacquard-eden.jpg';

const JacquardFabric = () => (
  <FabricCategoryPage
    slug="jacquard"
    productName="Jacquard Fabric"
    title="Jacquard Woven Fabrics — Complex Weave Constructions for Garment & Home"
    metaTitle="Jacquard Fabric Supplier for Apparel Manufacturers India | JNC Fabrics"
    metaDescription="Custom jacquard fabric manufacturer in India for apparel and garment brands: damask, brocade, florals and your own artwork. BCI, GOTS, OEKO-TEX certified. Export-ready."
    keywords="jacquard fabric manufacturer India, jacquard fabric exporter, damask fabric India, custom jacquard India"
    intro="A jacquard loom controls each warp thread independently, allowing intricate patterns — florals, paisleys, damasks and geometric repeats — to be woven directly into the fabric."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: jacquardNewImg, alt: 'Jacquard fabric with a gold paisley pattern on navy, woven by Janki Nath & Co., India' },
      { src: cutworkImg, alt: 'Black and ivory cutwork jacquard fabric with a leaf pattern, from Janki Nath & Co., India' },
      { src: jacquardEdenImg, alt: 'Multicolour woven jacquard fabric with a landscape pattern, from Janki Nath & Co., India' },
      { src: jqFloralMulti, alt: 'Woven jacquard fabric with a multicolour floral design' },
      { src: jqRoseBlack, alt: 'Woven jacquard fabric with a rose design on black' },
      { src: jqFloralBlue, alt: 'Woven jacquard fabric with a blue floral design' },
      { src: jqFloralMono, alt: 'Woven jacquard fabric with a black and white floral design' },
      { src: jqGeoMono, alt: 'Woven jacquard fabric with a diamond design in black and white' },
    ]}
    sections={[
      {
        heading: 'Jacquard Fabric Manufacturers in India: Janki Nath & Co.',
        paragraphs: [
          'JNC weaves jacquard fabrics on power looms and rapier looms across our units in Bhiwandi and Surat. The pattern is structural: it does not fade, crack or peel like a print. We work in cotton, viscose, cotton-viscose blends and lurex blends for metallic effects.',
          'Damask jacquard is typically single-colour with a reversible satin-and-sateen pattern, used in formal wear and table linen. Brocade jacquard has a raised, textured surface from supplementary weft threads, used in occasion wear and festive garments. Matelassé jacquard has a quilted or embossed surface used in structured jackets and bags. Cutwork jacquard has physical voids in the weave for a lace-like, lightweight appearance.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Damask · Brocade · Matelassé · Cutwork · Floral · Paisley · Geometric · Dobby jacquard' },
          { label: 'Compositions', value: 'Cotton · Viscose · Cotton/Viscose · Lurex blends (metallic effects)' },
        ],
      },
      {
        heading: 'Garment Weight Jacquard',
        paragraphs: [
          'Brocade fabrics for occasion wear, ethnic wear, co-ord sets and blouses. Lightweight jacquard for dresses and shirts. Lurex jacquard for eveningwear and festive collections. Available in self-colour and multi-colour woven designs.',
        ],
      },
      {
        heading: 'Home Furnishing Jacquard',
        paragraphs: [
          'Damask and brocade constructions for cushion covers, upholstery panels, curtain fabrics and table linen, in heavier GSM and wider widths. Used in hotel and hospitality procurement.',
        ],
      },
      {
        heading: 'Custom Jacquard for Apparel Manufacturers',
        paragraphs: [
          'We supply custom jacquard fabric to apparel manufacturers and garment brands. Constructions are developed to your design brief for occasion wear, bridal, evening wear and formal garments, with development quantities and bulk production available.',
        ],
      },
      {
        heading: 'Where Jacquard Fabric Is Used',
        paragraphs: [
          'Occasion wear, ethnic wear, co-ord sets and blouses. Dresses and shirts. Eveningwear, bridal and formal garments. Cushion covers, upholstery panels, curtains and table linen. Hotel and hospitality.',
        ],
        links: [{ label: 'Lurex and sequin fabric for metallic jacquard effects', to: '/fabrics/lurex' }, { label: 'Upholstery fabric', to: '/fabrics/upholstery' }],
      },
      {
        heading: 'Starting a Jacquard Development',
        paragraphs: [
          'Send us the artwork or reference, the repeat size, the number of colours, the composition and the end use. We confirm what is possible and quote on enquiry.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'Custom jacquard design development from repeat artwork through to sample, with repeat size, colour count and construction complexity discussed at enquiry stage. From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and custom development from 150 m depending on the quality, and lead time is confirmed per quality and quantity at the time of enquiry. Lurex and metallic yarn weaving is available, and our existing design library can be browsed on WhatsApp.',
          'Because the design is woven rather than applied, a jacquard construction holds its pattern through repeated washing and wear, which matters as much on a hotel curtain as on an evening dress.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100 and GRS certified. GOTS certified options available in cotton jacquard. Available in certified and conventional constructions. Certifications on request.',
        ],
      },
      {
        heading: 'FAQ: What Is Jacquard Fabric?',
        paragraphs: [
          'What is jacquard fabric? Jacquard is a woven fabric in which the pattern is built into the cloth by a loom that controls the warp yarns individually, so detailed designs such as florals, paisleys and damask can be woven rather than printed.',
          'What are the types of jacquard? Common types are damask, brocade, matelasse and cutwork, plus floral, paisley and geometric designs. Which one suits you depends on whether the fabric is for garments, home furnishing or upholstery.',
          'Is jacquard fabric good? The woven pattern does not wash out or crack, so jacquard keeps its design well. It is usually heavier and takes more development than plain or dobby fabric. See how it compares in our dobby vs jacquard guide.',
        ],
        links: [{ label: 'Dobby vs jacquard fabric: differences, uses and cost', to: '/blog/dobby-vs-jacquard-fabric-difference' }, { label: 'What is dobby fabric? Meaning, uses and summer or winter', to: '/blog/dobby-fabric-uses-construction-sourcing-guide' }],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about jacquard constructions: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for jacquard fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Can you weave my own design?', a: 'Yes. We develop jacquard from your repeat artwork through to sample.' },
      { q: 'Is jacquard expensive to make?', a: 'Jacquard takes more development than plain or dobby fabric, because the design is set up for the loom. Cost depends on the repeat size, the colour count and the quantity. Send us your reference and we quote on enquiry.' },
      { q: 'Which fibres do you weave jacquard in?', a: 'Cotton, viscose, cotton-viscose blends and lurex blends.' },
      { q: 'What is the difference between jacquard and dobby?', a: 'A dobby loom weaves small repeating geometric patterns. A jacquard loom controls each warp thread to weave larger, detailed designs. The dobby vs jacquard guide linked on this page explains the difference.' },
    ]}
  />
);
export default JacquardFabric;
