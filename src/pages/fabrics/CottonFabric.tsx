import FabricCategoryPage from '@/components/FabricCategoryPage';
import cotRolls from '@/assets/cotton-rolls-plain.jpg';
import cotRolls2 from '@/assets/cotton-rolls-colour.jpg';
import cotGrey from '@/assets/cotton-plain-grey.jpg';
import cotLight from '@/assets/cotton-plain-light.jpg';

const CottonFabric = () => (
  <FabricCategoryPage
    slug="cotton"
    productName="Cotton Fabric"
    title="Cotton Fabric Manufacturer & Exporter from India"
    metaTitle="Cotton Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade cotton fabric from India. Plain weave, twill, dobby, poplin, canvas. Greige, RFD, dyed and printed. BCI and GOTS certified. Mill-direct supply."
    keywords="cotton fabric manufacturer India, cotton fabric exporter, BCI cotton fabric, GOTS cotton fabric India"
    intro="Janki Nath & Co. manufactures export-grade cotton fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    images={[
      { src: cotRolls, alt: 'Rolls of woven cotton fabric in plain colours' },
      { src: cotRolls2, alt: 'Rolls of woven cotton fabric in blue, brown and red' },
      { src: cotGrey, alt: 'Plain woven cotton fabric in grey' },
      { src: cotLight, alt: 'Plain woven cotton fabric in light grey' },
    ]}
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
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
        links: [{ label: 'Greige cotton for your own dyeing, printing and processing', to: '/fabrics/greige' }, { label: 'Cotton/viscose blends: see viscose fabric', to: '/fabrics/viscose' }],
      },
      {
        heading: 'Cotton Fabric Manufacturer and Exporter from India',
        paragraphs: [
          'We are a mill-direct manufacturer and exporter of woven cotton fabric, supplying brands, importers and garment manufacturers abroad. Fabric is exported with full documentation. We make as per your requirement: tell us the quality, construction, width and quantity and we confirm.',
        ],
        links: [{ label: 'Organic cotton fabric', to: '/fabrics/organic-cotton' }, { label: 'Home furnishing fabric', to: '/fabrics/home-furnishing' }, { label: 'How our sampling works', to: '/sampling' }],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'GOTS and OCS certified cotton is available, BCI cotton is available, and OEKO-TEX Standard 100 and GRS are available on request, depending on the quality. We confirm what applies to each quality. Full documentation is provided with every export order.',
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
          'Mill-direct supply. No agents between buyer and production. Documentation: commercial invoice, packing list, certificate of origin, GST invoice, certification documentation.',
        ],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for cotton fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which cotton fabrics do you make?', a: 'Plain weave, twill, drill, poplin, canvas, sateen, oxford, dobby, voile and muslin, in greige, RFD, bleached, dyed, printed and yarn-dyed finishes.' },
      { q: 'Do you supply greige cotton for our own dyeing?', a: 'Yes. Greige cotton is available for your own dyeing, printing and processing.' },
      { q: 'Is certified cotton available?', a: 'GOTS and OCS certified cotton and BCI cotton are available, and OEKO-TEX Standard 100 and GRS are available on request, depending on the quality.' },
    ]}
  />
);
export default CottonFabric;
