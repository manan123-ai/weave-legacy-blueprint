import FabricCategoryPage from '@/components/FabricCategoryPage';
import dobbyPeach from '@/assets/dobby-texture-peach.jpg';
import dobbyNatural from '@/assets/dobby-fine-natural.jpg';
import dobbyRolls from '@/assets/dobby-rolls-motif.jpg';
import dobbyLight from '@/assets/dobby-light-stripe.jpg';
import dobbyImg from '@/assets/dobby-fabric.jpg';

const DobbyFabric = () => (
  <FabricCategoryPage
    slug="dobby"
    productName="Dobby Fabric"
    title="Dobby Weave Fabrics — Textured Constructions for Garment & Home"
    metaTitle="Dobby Fabric Manufacturer India | Self & Colour Dobby | JNC Fabrics"
    metaDescription="Dobby fabric manufacturer from India. Self-dobby and colour dobby in cotton and cotton blends. Subtle geometric weave for premium shirting and casualwear."
    keywords="dobby fabric manufacturer India, self dobby fabric, dobby weave fabric India"
    intro="A dobby loom weaves small geometric patterns directly into the fabric structure — dots, diamonds, birds-eye, waffle and micro-textures that add visual interest without printing. JNC produces dobby fabrics in cotton, linen, cotton-linen blends and viscose."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: dobbyImg, alt: 'Dobby fabric with a small woven textured pattern, from Janki Nath & Co., India' },
      { src: dobbyPeach, alt: 'Woven textured fabric with a small geometric weave in peach, white and yellow' },
      { src: dobbyNatural, alt: 'Close-up of fine woven textured fabric in natural colour' },
      { src: dobbyRolls, alt: 'Rolls of woven fabric with small woven motifs in assorted colours' },
      { src: dobbyLight, alt: 'Light woven fabric with a fine stripe texture' },
    ]}
    sections={[
      {
        heading: 'What is Dobby Fabric',
        links: [{ label: 'Read our complete guide: What Is Dobby Fabric?', to: '/blog/dobby-fabric-uses-construction-sourcing-guide' }, { label: 'Dobby vs jacquard fabric: differences, uses and cost', to: '/blog/dobby-vs-jacquard-fabric-difference' }],
        paragraphs: [
          'The texture is structural, so it does not wash out. Dobby fabrics are widely used in premium shirting, dress fabrics and home textiles where surface interest is required without a bold print.',
          'Self-dobby uses the same yarn colour as the background, so the pattern is visible only through the weave structure — it reads as a solid colour from a distance and reveals its texture up close, which is why it is used in premium formal shirting. Colour dobby uses a contrasting yarn colour, making the pattern immediately visible as a two-colour or multi-colour design.',
        ],
      },
      {
        heading: 'Garment Weight Dobby',
        paragraphs: [
          'Shirt fabrics, blouse fabrics and dress fabrics in lightweight to medium-weight constructions. Constructions include dotted dobby, diamond dobby, waffle dobby and end-on-end with dobby border. Popular for men\'s formal shirts and women\'s resort and occasion wear.',
        ],
      },
      {
        heading: 'Home Furnishing Dobby',
        paragraphs: [
          'Heavier-weight dobby for table linen, napkins, cushion covers and bed linen accessories, in waffle and honeycomb constructions. Available in natural cotton, bleached white and yarn-dyed versions.',
        ],
      },
      {
        heading: 'Our Dobby Range',
        bullets: [
          { label: 'Types', value: 'Self-dobby · Colour dobby · Geometric · Birdseye · Honeycomb · Waffle' },
          { label: 'Compositions', value: 'Cotton · Linen · Cotton/Linen · Viscose · Cotton/Lycra' },
          { label: 'Applications', value: 'Premium formal shirting, dresses, casualwear, table linen, cushion covers, bed linen accessories' },
        ],
      },
      {
        heading: 'Where Dobby Fabric Is Used',
        paragraphs: [
          'Premium formal shirting. Blouses and dresses. Resort and occasion wear. Table linen and napkins. Cushion covers. Bed linen accessories.',
        ],
        links: [{ label: 'Yarn-dyed fabric: checks, stripes and plaids', to: '/fabrics/yarn-dyed' }],
      },
      {
        heading: 'Dobby Blends',
        paragraphs: [
          'Dobby is a weave, so it can be made in different fibres and blends. We weave dobby in cotton, linen, cotton-linen blends, viscose and cotton-Lycra.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'Sampling from existing constructions or custom dobby development. From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and development from 150 m through our sampling unit, depending on the quality. BCI cotton is standard across the range, and GOTS organic is available. Lead time is confirmed per quality and quantity at the time of enquiry.',
          'Because dobby is built on the loom rather than printed afterwards, a construction can be repeated across seasons with consistent results, and new colourways can be added to an established pattern without re-developing the weave. Tell us the end use, handle and weight you need, and we will propose the right construction from our range or develop one to your brief.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['BCI cotton is available. GOTS and OCS certified cotton is available, and OEKO-TEX Standard 100 and GRS are available on request, depending on the quality. We confirm what applies to each quality.'],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about dobby constructions: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for dobby fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Self dobby or colour dobby?', a: 'Self dobby uses the same yarn colour as the background, so the pattern shows only through the weave. Colour dobby uses a contrasting yarn, so the pattern is immediately visible.' },
      { q: 'What is dobby blend fabric?', a: 'Dobby is a weave, so a dobby blend is a dobby construction woven in a blended yarn, such as cotton-linen or cotton-Lycra.' },
      { q: 'Is dobby the same as jacquard?', a: 'No. A dobby loom weaves small repeating geometric patterns. A jacquard loom controls each warp thread to weave larger, detailed designs. The dobby vs jacquard guide linked at the top of this page explains the difference.' },
      { q: 'Is dobby for summer or winter?', a: 'It depends on the yarn and the weight. Our complete dobby guide, linked at the top of this page, explains it.' },
      { q: 'What is dobby fabric made of?', a: 'Dobby is a weave, not a fibre. We weave dobby in cotton, linen, cotton-linen blends, viscose and cotton-Lycra.' },
      { q: 'What is dobby fabric used for?', a: 'Premium formal shirting, blouses and dresses, resort and occasion wear, and home textiles such as table linen, napkins, cushion covers and bed linen accessories.' },
    ]}
  />
);
export default DobbyFabric;
