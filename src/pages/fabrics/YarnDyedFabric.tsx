import FabricCategoryPage from '@/components/FabricCategoryPage';

const YarnDyedFabric = () => (
  <FabricCategoryPage
    slug="yarn-dyed"
    productName="Yarn Dyed Fabric"
    title="Yarn Dyed Fabric Manufacturer & Exporter from India"
    metaTitle="Yarn Dyed Fabric Manufacturer India — Checks Stripes Plaids | JNC Fabrics"
    metaDescription="Yarn dyed fabric manufacturer from India. Checks, stripes, plaids, madras in cotton, linen and viscose. Consistent colour across reorders. Mill-direct supply."
    intro="Janki Nath & Co. manufactures yarn dyed fabrics — checks, stripes, plaids and multi-colour woven designs — from our yarn-dyed specialist units across India."
    sections={[
      {
        heading: 'What is Yarn Dyed Fabric',
        paragraphs: [
          'In yarn dyed fabric, individual yarns are dyed before weaving. This creates colours and patterns that are woven directly into the fabric structure — not printed or applied after weaving. Result: deeper colour penetration, better colourfastness and consistent colour reproduction across reorders.',
        ],
      },
      {
        heading: 'Our Yarn Dyed Range',
        bullets: [
          { label: 'Constructions', value: 'Checks · Stripes · Plaids · Madras · Chambray · Oxford · Dobby YD · Jacquard YD' },
          { label: 'Compositions', value: 'Cotton · Linen · Cotton/Linen · Viscose · Cotton/Viscose yarn dyed' },
          { label: 'Colour', value: 'Custom colour combinations developed to your specification. Pantone matching available.' },
        ],
      },
      {
        heading: 'Why Yarn Dyed for Your Brand',
        paragraphs: [
          'If your collection includes a signature stripe, recurring check or colour-blocked design — yarn dyed fabric ensures colour consistency across every reorder, every season.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Shirting, casual trousers, summer dresses, resort wear, beach wear, home furnishing, cushion covers, table linen.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['BCI certified cotton options available. OEKO-TEX Standard 100.'],
      },
    ]}
  />
);
export default YarnDyedFabric;
