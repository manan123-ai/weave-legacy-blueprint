import FabricCategoryPage from '@/components/FabricCategoryPage';

const CottonFabric = () => (
  <FabricCategoryPage
    slug="cotton"
    productName="Cotton Fabric"
    title="Cotton Fabric Manufacturer & Exporter from India"
    metaTitle="Cotton Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade cotton fabric from India. Plain weave, twill, dobby, poplin, canvas. Greige, RFD, dyed and printed. BCI and GOTS certified. Mill-direct supply."
    keywords="cotton fabric manufacturer India, cotton fabric exporter, BCI cotton fabric, GOTS cotton fabric India"
    intro="Janki Nath & Co. manufactures export-grade cotton fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    sections={[
      {
        heading: 'Our Cotton Fabric Range',
        paragraphs: [
          'We produce cotton fabrics across a full range of constructions — plain weave, twill, drill, poplin, canvas, sateen, oxford, dobby, voile and muslin — available in greige, RFD (ready for dyeing), bleached, dyed, printed and yarn-dyed finishes.',
          'Plain weave cotton is the most versatile construction, used in shirting, dress fabric and linings. Cotton twill is the diagonal-rib weave behind chinos, workwear and denim-weight trousers — stronger and more durable than plain weave at the same yarn weight. Cotton poplin is the standard for formal shirting: a tight plain weave with a slight cross-rib for a smooth, crisp hand feel. Cotton sateen has a lustrous, weft-faced surface for premium shirting and home furnishing, while cotton canvas and duck are heavy, tightly woven constructions for bags, workwear and upholstery.',
        ],
        bullets: [
          { label: 'Compositions', value: 'Cotton 100% · Cotton/Linen · Cotton/Viscose · Cotton/Modal · Cotton/Lycra · Cotton/Polyester · Organic Cotton (GOTS/OCS)' },
          { label: 'Finishes', value: 'Greige · RFD · Bleached · Piece-dyed · Yarn-dyed · Printed · Discharge · Mercerised · Sanforised · Enzyme washed' },
          { label: 'Constructions', value: 'Plain weave · Twill · Poplin · Canvas/Duck · Sateen · Oxford · Dobby · Voile/Lawn · Muslin' },
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
