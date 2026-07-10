import FabricCategoryPage from '@/components/FabricCategoryPage';

const DobbyFabric = () => (
  <FabricCategoryPage
    slug="dobby"
    productName="Dobby Fabric"
    title="Dobby Fabric Manufacturer & Exporter from India"
    metaTitle="Dobby Fabric Manufacturer India — Self Dobby Colour Dobby | JNC Fabrics"
    metaDescription="Dobby fabric manufacturer from India. Self-dobby and colour dobby in cotton and cotton blends. Subtle geometric weave for premium shirting and casualwear."
    keywords="dobby fabric manufacturer India, self dobby fabric, dobby weave fabric India"
    intro="Janki Nath & Co. manufactures dobby fabrics — self-dobby and colour dobby constructions in cotton and blended compositions — for premium shirting, casualwear and formal wear applications."
    sections={[
      {
        heading: 'What is Dobby Fabric',
        paragraphs: [
          'Dobby fabric is woven using a dobby attachment that controls individual groups of warp yarns, creating small geometric patterns within the weave structure. The pattern is structural — not printed — making it permanent and wash-resistant.',
        ],
      },
      {
        heading: 'Our Dobby Range',
        bullets: [
          { label: 'Types', value: 'Self-dobby · Colour dobby · Geometric · Birdseye · Honeycomb · Waffle' },
          { label: 'Compositions', value: 'Cotton · Cotton/Lycra · Cotton/Polyester · Linen dobby' },
          { label: 'Applications', value: 'Premium formal shirting, casualwear, suiting, trousers, home furnishing' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['BCI certified cotton options. OEKO-TEX Standard 100.'],
      },
    ]}
  />
);
export default DobbyFabric;
