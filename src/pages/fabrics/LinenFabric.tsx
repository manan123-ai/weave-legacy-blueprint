import FabricCategoryPage from '@/components/FabricCategoryPage';

const LinenFabric = () => (
  <FabricCategoryPage
    slug="linen"
    productName="Linen Fabric"
    title="Linen Fabric Manufacturer & Exporter from India"
    metaTitle="Linen Fabric Manufacturer India — GOTS Certified | JNC Fabrics"
    metaDescription="100% linen and linen blend fabric from India. Cotton/linen, viscose/linen blends. GOTS and OCS certified. Mill-direct export to fashion brands worldwide."
    intro="Janki Nath & Co. manufactures 100% linen and linen blend fabrics — exported to fashion brands and garment manufacturers across Europe, USA, Japan and Australia."
    sections={[
      {
        heading: 'Our Linen Fabric Range',
        paragraphs: [
          'We produce pure linen and linen blend fabrics across plain weave, twill and slub constructions — available in natural, bleached, dyed and yarn-dyed finishes.',
        ],
        bullets: [
          { label: 'Compositions', value: '100% Linen · Cotton/Linen · Viscose/Linen · Linen/Silk' },
          { label: 'Finishes', value: 'Natural/Undyed · Bleached · Piece-dyed · Yarn-dyed · Washed/Enzyme · Printed' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Our linen fabrics are available GOTS certified and OCS certified. OEKO-TEX Standard 100. Full export documentation provided.',
        ],
      },
      {
        heading: 'Why Source Linen from India',
        paragraphs: [
          'Indian linen manufacturers offer competitive mill-direct pricing without European price premiums, strong certification infrastructure for sustainability-focused brands, and flexible development capability from small quantities to bulk.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Fashion apparel, summer collections, resort wear, trousers, shirts, dresses, home furnishing, curtains and drapery.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'Custom linen construction development available. Cotton/linen and viscose/linen blend ratios developed to your specification.',
        ],
      },
    ]}
  />
);
export default LinenFabric;
