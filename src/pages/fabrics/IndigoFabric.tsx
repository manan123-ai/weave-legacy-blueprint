import FabricCategoryPage from '@/components/FabricCategoryPage';
import indigoStripe from '@/assets/indigo-stripe.jpg';
import indigoShibori from '@/assets/indigo-shibori.jpg';
import indigoCrinkle from '@/assets/indigo-crinkle.jpg';
import indigoLight from '@/assets/indigo-light.jpg';

const IndigoFabric = () => (
  <FabricCategoryPage
    slug="indigo"
    productName="Indigo Dyed Fabric"
    title="Indigo Dyed Fabric Manufacturer & Exporter from India"
    metaTitle="Indigo Dyed Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade indigo dyed fabric from India — light to deep indigo shades for denim and traditional wear. Traditional and modern indigo dyeing. Mill-direct supply."
    keywords="indigo fabric manufacturer India, indigo dyed fabric exporter, denim fabric India, indigo woven fabric"
    intro="Janki Nath & Co. manufactures export-grade indigo dyed fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    images={[
      { src: indigoStripe, alt: 'Indigo-dyed woven fabric with a natural stripe' },
      { src: indigoShibori, alt: 'Indigo-dyed fabric with a shibori pattern' },
      { src: indigoCrinkle, alt: 'Indigo-dyed woven fabric' },
      { src: indigoLight, alt: 'Draped indigo-dyed fabric in light blue' },
    ]}
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    sections={[
      {
        heading: 'Our Indigo Dyed Range',
        paragraphs: [
          'We produce indigo dyed fabrics across a range of shades — from light washed indigo to deep, saturated tones — using both traditional and modern dyeing processes for denim, workwear and traditional wear applications.',
          'Indigo is unique among dyes: rather than penetrating the fibre core, it attaches to the yarn surface in successive layers with each dip into the dye bath. This layered surface attachment is what gives indigo its distinctive fading characteristic — abrasion removes the outermost colour layers gradually, creating the patina indigo-dyed fabric is known for. Traditional warp indigo, with indigo-dyed warp and natural/white weft, produces the classic indigo-white contrast.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain Weave · Twill · Denim-weight · Yarn-dyed' },
          { label: 'Finishes', value: 'Light to Deep Indigo · Washed · Enzyme-washed · RFD' },
          { label: 'Certifications', value: 'Available on request, depending on the quality' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, with export documentation' },
        ],
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
          'Mill-direct supply. No agents between buyer and production. Documentation: commercial invoice, packing list, certificate of origin, GST invoice, certification documentation.',
        ],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for indigo fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which indigo shades can you make?', a: 'From light washed indigo to deep, saturated tones, with custom shade matching during development.' },
      { q: 'Which constructions do you weave in indigo?', a: 'Plain weave, twill, denim-weight and yarn-dyed constructions.' },
    ]}
  />
);
export default IndigoFabric;
