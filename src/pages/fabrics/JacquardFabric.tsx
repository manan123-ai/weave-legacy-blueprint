import FabricCategoryPage from '@/components/FabricCategoryPage';

const JacquardFabric = () => (
  <FabricCategoryPage
    slug="jacquard"
    productName="Jacquard Fabric"
    title="Jacquard Fabric Manufacturer & Exporter from India"
    metaTitle="Jacquard Fabric Manufacturer India — Custom Patterns | JNC Fabrics"
    metaDescription="Jacquard fabric manufacturer from India. Damask, brocade, matelassé, dobby jacquard. Cotton, viscose, linen compositions. Custom pattern development."
    intro="Janki Nath & Co. weaves jacquard fabrics across our specialist units in Erode and Salem — supplying fashion brands, occasion wear manufacturers and home furnishing companies worldwide."
    sections={[
      {
        heading: 'Our Jacquard Fabric Range',
        paragraphs: [
          'Jacquard fabric is woven on Jacquard looms where individual warp yarns are controlled independently, creating complex patterns directly in the weave structure. The pattern is structural — it cannot fade, crack or wash out.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Damask · Brocade · Matelassé · Cutwork · Floral · Geometric · Dobby jacquard' },
          { label: 'Compositions', value: 'Cotton · Viscose · Cotton/Viscose · Linen · Lurex · Cotton/Silk jacquard' },
        ],
      },
      {
        heading: 'Custom Pattern Development',
        paragraphs: [
          'We develop custom jacquard patterns from your design brief. New pattern development available — repeat size, colour count and construction complexity discussed at inquiry stage.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Occasion wear, evening wear, bridal, formal garments, upholstery, cushion covers, home furnishing, table linen and decorative textiles.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100 certified. GOTS certified options available in cotton jacquard.',
        ],
      },
    ]}
  />
);
export default JacquardFabric;
