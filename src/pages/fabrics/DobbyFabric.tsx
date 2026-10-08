import FabricCategoryPage from '@/components/FabricCategoryPage';

const DobbyFabric = () => (
  <FabricCategoryPage
    slug="dobby"
    productName="Dobby Fabric"
    title="Dobby Weave Fabrics — Textured Constructions for Garment & Home"
    metaTitle="Dobby Fabric Manufacturer India — Self Dobby Colour Dobby | JNC Fabrics"
    metaDescription="Dobby fabric manufacturer from India. Self-dobby and colour dobby in cotton and cotton blends. Subtle geometric weave for premium shirting and casualwear."
    keywords="dobby fabric manufacturer India, self dobby fabric, dobby weave fabric India"
    intro="A dobby loom weaves small geometric patterns directly into the fabric structure — dots, diamonds, birds-eye, waffle and micro-textures that add visual interest without printing. JNC produces dobby fabrics in cotton, linen, cotton-linen blends and viscose."
    sections={[
      {
        heading: 'What is Dobby Fabric',
        links: [{ label: 'Read our complete guide: What Is Dobby Fabric?', to: '/blog/dobby-fabric-uses-construction-sourcing-guide' }],
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
        heading: 'What We Offer',
        paragraphs: [
          'Sampling from existing constructions or custom dobby development, from small quantities to bulk, with no minimum order lock-in. BCI cotton is standard across the range, and GOTS organic is available. Standard lead times are 15–30 days for running qualities and 30–45 days for custom dobby development.',
          'Because dobby is built on the loom rather than printed afterwards, a construction can be repeated across seasons with consistent results, and new colourways can be added to an established pattern without re-developing the weave. Tell us the end use, handle and weight you need, and we will propose the right construction from our range or develop one to your brief.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['BCI certified cotton options. OEKO-TEX Standard 100 and GRS certified. Available in certified and conventional constructions. Certifications on request.'],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about dobby constructions: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
  />
);
export default DobbyFabric;
