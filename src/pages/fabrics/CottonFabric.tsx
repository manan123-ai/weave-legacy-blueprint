import FabricCategoryPage from '@/components/FabricCategoryPage';

const CottonFabric = () => (
  <FabricCategoryPage
    slug="cotton"
    productName="Cotton Fabric"
    title="Cotton Fabric Manufacturer & Exporter from India"
    metaTitle="Cotton Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade cotton fabric from India. Plain weave, twill, dobby, poplin, canvas. Greige, RFD, dyed and printed. BCI and GOTS certified. Mill-direct supply."
    intro="Janki Nath & Co. manufactures export-grade cotton fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    sections={[
      {
        heading: 'Our Cotton Fabric Range',
        paragraphs: [
          'We produce cotton fabrics across a full range of constructions — plain weave, twill, drill, poplin, canvas, muslin, voile and oxford — available in greige, RFD (ready for dyeing), bleached, dyed and printed finishes.',
        ],
        bullets: [
          { label: 'Compositions', value: 'Cotton 100% · Cotton/Linen · Cotton/Viscose · Cotton/Lycra · Cotton/Polyester' },
          { label: 'Finishes', value: 'Greige · RFD · Bleached · Piece-dyed · Yarn-dyed · Printed · Discharge · Pigment print' },
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Our cotton fabrics are available certified under BCI (Better Cotton Initiative), GOTS (Global Organic Textile Standard) and OCS (Organic Content Standard). OEKO-TEX Standard 100 certified. Full documentation provided with every export order.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Cotton fabrics from our range are used across shirting, bottom-weight garments, casualwear, workwear, uniforms, upholstery, home furnishing and technical textile applications.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom cotton fabric development from your specification. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
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
export default CottonFabric;
