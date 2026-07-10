import FabricCategoryPage from '@/components/FabricCategoryPage';

const TwillFabric = () => (
  <FabricCategoryPage
    slug="twill"
    productName="Twill & Drills Fabric"
    title="Twill & Drills Fabric Manufacturer & Exporter from India"
    metaTitle="Twill & Drills Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade twill and drill fabric from India — cotton twill, gabardine, structured weaves for workwear, uniforms and casualwear. Mill-direct supply."
    keywords="twill fabric manufacturer India, drill fabric exporter, gabardine fabric India, workwear fabric supplier"
    intro="Janki Nath & Co. manufactures export-grade twill and drill fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    sections={[
      {
        heading: 'Our Twill & Drills Range',
        paragraphs: [
          'We produce twill and drill fabrics across a range of weave angles and weights — cotton twill, drill and gabardine constructions — built for durability in workwear, uniforms and heavy-duty casualwear applications.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Cotton Twill · Drill · Gabardine · 45° / 63° Twill' },
          { label: 'Finishes', value: 'Greige · RFD · Sanforized · Piece-dyed · Yarn-dyed' },
          { label: 'Certifications', value: 'BCI · GOTS · OCS · OEKO-TEX' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, FOB New Delhi' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Our twill and drill fabrics are available certified under BCI (Better Cotton Initiative), GOTS (Global Organic Textile Standard) and OCS (Organic Content Standard). OEKO-TEX Standard 100 certified. Full documentation provided with every export order.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Twill and drill fabrics from our range are used across workwear, uniforms, pants and heavy-duty industrial applications.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom twill fabric development from your specification. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
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
export default TwillFabric;
