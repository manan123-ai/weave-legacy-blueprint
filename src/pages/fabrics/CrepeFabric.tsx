import FabricCategoryPage from '@/components/FabricCategoryPage';

const CrepeFabric = () => (
  <FabricCategoryPage
    slug="crepe"
    productName="Crepe & High Twist Fabric"
    title="Crepe & High Twist Fabric Manufacturer & Exporter from India"
    metaTitle="Crepe & High Twist Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade crepe and high twist fabric from India — moss crepe, georgette, high twist voile. Fine texture, excellent drape. Mill-direct supply for fashion brands worldwide."
    keywords="crepe fabric manufacturer India, high twist fabric exporter, georgette fabric India, moss crepe fabric"
    intro="Janki Nath & Co. manufactures export-grade crepe and high twist fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    sections={[
      {
        heading: 'Our Crepe & High Twist Range',
        paragraphs: [
          'We produce crepe and high twist fabrics across a range of textures and weights — georgette, moss crepe and high twist voile — known for their fine surface texture, excellent drape and durability under repeated wear.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Georgette · Moss Crepe · High Twist Voile · Crepe de Chine' },
          { label: 'Finishes', value: 'Greige · RFD · Piece-dyed · Yarn-dyed' },
          { label: 'Certifications', value: 'BCI · GOTS · OCS · OEKO-TEX' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, FOB New Delhi' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Our crepe and high twist fabrics are available certified under BCI (Better Cotton Initiative), GOTS (Global Organic Textile Standard) and OCS (Organic Content Standard). OEKO-TEX Standard 100 certified. Full documentation provided with every export order.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Crepe and high twist fabrics from our range are used across formal wear, dresses, blouses and lightweight evening wear collections.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom crepe fabric development from your specification. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
        ],
      },
      {
        heading: 'Export & Ordering',
        paragraphs: [
          'Mill-direct supply. No agents between buyer and production. FOB pricing from New Delhi. Documentation: commercial invoice, packing list, certificate of origin, GST invoice, certification documentation.',
        ],
      },
    ]}
  />
);
export default CrepeFabric;
