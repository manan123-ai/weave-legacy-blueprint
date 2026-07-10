import FabricCategoryPage from '@/components/FabricCategoryPage';

const IndigoFabric = () => (
  <FabricCategoryPage
    slug="indigo"
    productName="Indigo Dyed Fabric"
    title="Indigo Dyed Fabric Manufacturer & Exporter from India"
    metaTitle="Indigo Dyed Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade indigo dyed fabric from India — light to deep indigo shades for denim and traditional wear. Traditional and modern indigo dyeing. Mill-direct supply."
    keywords="indigo fabric manufacturer India, indigo dyed fabric exporter, denim fabric India, indigo woven fabric"
    intro="Janki Nath & Co. manufactures export-grade indigo dyed fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    sections={[
      {
        heading: 'Our Indigo Dyed Range',
        paragraphs: [
          'We produce indigo dyed fabrics across a range of shades — from light washed indigo to deep, saturated tones — using both traditional and modern dyeing processes for denim, workwear and traditional wear applications.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain Weave · Twill · Denim-weight · Yarn-dyed' },
          { label: 'Finishes', value: 'Light to Deep Indigo · Washed · Enzyme-washed · RFD' },
          { label: 'Certifications', value: 'BCI · GOTS · OCS · OEKO-TEX' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, FOB New Delhi' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Our indigo dyed fabrics are available certified under BCI (Better Cotton Initiative), GOTS (Global Organic Textile Standard) and OCS (Organic Content Standard). OEKO-TEX Standard 100 certified. Full documentation provided with every export order.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Indigo dyed fabrics from our range are used across denim, traditional wear, fashion garments and accessories.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom indigo fabric development from your specification, including custom shade matching. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
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
export default IndigoFabric;
