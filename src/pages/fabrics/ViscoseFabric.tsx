import FabricCategoryPage from '@/components/FabricCategoryPage';

const ViscoseFabric = () => (
  <FabricCategoryPage
    slug="viscose"
    productName="Viscose Fabric"
    title="Viscose Fabric Manufacturer & Exporter from India"
    metaTitle="Viscose Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Viscose fabric manufacturer from India. Viscose twill, crepe, plain, georgette weight. Cotton/viscose blends. Fluid drape. Mill-direct export supply."
    intro="Janki Nath & Co. manufactures viscose and viscose blend fabrics — supplying fashion brands, dress manufacturers and resort wear labels worldwide."
    sections={[
      {
        heading: 'Our Viscose Fabric Range',
        paragraphs: [
          'Viscose is a semi-synthetic cellulose fibre with exceptional drape, fluid movement and colour depth. Well-constructed viscose fabric is one of the most versatile fabrics in fashion.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Viscose plain · Twill · Crepe · Georgette weight · Slub · Jacquard' },
          { label: 'Compositions', value: '100% Viscose · Cotton/Viscose · Linen/Viscose · Viscose/Lycra' },
          { label: 'Finishes', value: 'Piece-dyed · Printed · Yarn-dyed viscose' },
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Evening wear, resort wear, fluid trousers, draped dresses, blouses, linings, scarves, summer collections.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['OEKO-TEX Standard 100 certified.'],
      },
    ]}
  />
);
export default ViscoseFabric;
