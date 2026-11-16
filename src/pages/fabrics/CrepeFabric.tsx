import FabricCategoryPage from '@/components/FabricCategoryPage';
import crepeBlush from '@/assets/crepe-blush.jpg';
import crepeBlue from '@/assets/crepe-blue.jpg';
import crepeGreen from '@/assets/crepe-green.jpg';
import crepeCoral from '@/assets/crepe-coral.jpg';

const CrepeFabric = () => (
  <FabricCategoryPage
    slug="crepe"
    productName="Crepe & High Twist Fabric"
    title="Crepe & High Twist Fabric Manufacturer & Exporter from India"
    metaTitle="Crepe & High Twist Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade crepe and high twist fabric from India — moss crepe, georgette, high twist voile. Fine texture, excellent drape. Mill-direct supply for fashion brands worldwide."
    keywords="crepe fabric manufacturer India, high twist fabric exporter, georgette fabric India, moss crepe fabric"
    intro="Janki Nath & Co. manufactures export-grade crepe and high twist fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    images={[
      { src: crepeBlush, alt: 'Soft woven crepe-type fabric in blush pink' },
      { src: crepeBlue, alt: 'Soft woven crepe-type fabric in blue' },
      { src: crepeGreen, alt: 'Soft woven crepe-type fabric in green' },
      { src: crepeCoral, alt: 'Soft woven crepe-type fabric in coral' },
    ]}
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    sections={[
      {
        heading: 'Our Crepe & High Twist Range',
        paragraphs: [
          'We produce crepe and high twist fabrics across a range of textures and weights — georgette, moss crepe and high twist voile — known for their fine surface texture, excellent drape and durability under repeated wear.',
          'Crepe fabric is made from high-twist yarn — spun with significantly more twist than standard fabric yarn. When finished, the tightly twisted yarns relax under tension, creating the characteristic crinkled, pebbly surface texture. Moss crepe has a matte, pebbled surface popular for formal and occasion wear; georgette is lighter and slightly transparent with a floaty drape, used for blouses and overlay garments.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Georgette · Moss Crepe · High Twist Voile · Crepe de Chine' },
          { label: 'Finishes', value: 'Greige · RFD · Piece-dyed · Yarn-dyed' },
          { label: 'Certifications', value: 'Available on request, depending on the quality' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, with export documentation' },
        ],
        links: [{ label: 'For woven viscose in plain and twill, see viscose fabric', to: '/fabrics/viscose' }],
      },
      {
        heading: 'Crepe and High Twist Fabric Manufacturer and Exporter from India',
        paragraphs: [
          'We are a mill-direct manufacturer and exporter of woven crepe and high twist fabric, supplying brands, importers and garment manufacturers abroad. Fabric is exported with full documentation. We make as per your requirement: tell us the quality, construction, width and quantity and we confirm.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100, BCI cotton, and GOTS and OCS certified cotton are available on request, depending on the quality. GOTS and OCS apply to the cotton content. We confirm what applies to each quality. Full documentation is provided with every export order.',
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
          'Mill-direct supply. No agents between buyer and production. Documentation: commercial invoice, packing list, certificate of origin, GST invoice, certification documentation.',
        ],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for crepe fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which crepe and high twist fabrics do you make?', a: 'Georgette, moss crepe, high twist voile and crepe de chine, in greige, RFD, piece-dyed and yarn-dyed finishes.' },
      { q: 'Can you develop crepe to our specification?', a: 'Yes. We develop crepe to your specification, and strike-off samples are available.' },
    ]}
  />
);
export default CrepeFabric;
