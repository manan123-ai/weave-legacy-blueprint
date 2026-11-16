import FabricCategoryPage from '@/components/FabricCategoryPage';
import stretchBlue from '@/assets/stretch-blue.jpg';
import stretchGrey from '@/assets/stretch-grey.jpg';
import stretchGreenGrey from '@/assets/stretch-green-grey.jpg';
import stretchStripe from '@/assets/stretch-stripe-green.jpg';

const LycraBlendsFabric = () => (
  <FabricCategoryPage
    slug="lycra-blends"
    productName="Lycra Blend Fabric"
    title="Lycra Blend Fabric Manufacturer & Exporter from India"
    metaTitle="Lycra Blend Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade Lycra blend woven fabric from India — 2-way and 4-way stretch constructions for activewear and swimwear. Mill-direct supply."
    keywords="lycra fabric manufacturer India, stretch fabric exporter, activewear fabric India, swimwear fabric supplier"
    intro="Janki Nath & Co. manufactures export-grade Lycra blend woven fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    images={[
      { src: stretchBlue, alt: 'Blue woven fabric with a soft finish' },
      { src: stretchGrey, alt: 'Grey woven fabric' },
      { src: stretchGreenGrey, alt: 'Woven fabric in grey-green' },
      { src: stretchStripe, alt: 'Woven fabric with fine stripes in green' },
    ]}
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    sections={[
      {
        heading: 'Our Lycra Blends Range',
        paragraphs: [
          'We produce Lycra blend woven fabrics with 2-way and 4-way stretch constructions, engineered for fit and recovery across activewear, swimwear and performance fashion applications.',
          'Lycra (elastane/spandex) yarns are incorporated into the warp, weft, or both — typically 2–8% of the construction — to add stretch and recovery to woven fabric while retaining a woven look and feel. 2-way stretch (Lycra in weft only) suits casual and fashion applications; 4-way stretch (Lycra in both directions) is required for close-fitting activewear and swimwear. Cotton/Lycra remains the most common construction, moving with the body while still feeling like cotton.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Cotton-Lycra · Viscose-Lycra · Poly-Lycra Wovens' },
          { label: 'Stretch', value: '2-way · 4-way · High Recovery' },
          { label: 'Certifications', value: 'Available on request, depending on the quality' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, with export documentation' },
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
          'Lycra blend fabrics from our range are used across activewear, swimwear, fashion garments and performance wear.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom Lycra blend fabric development from your specification, including stretch percentage and recovery testing. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
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
      { q: 'What is the minimum order for Lycra blend fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which stretch constructions do you make?', a: '2-way, 4-way and high recovery stretch, in cotton-Lycra, viscose-Lycra and poly-Lycra wovens.' },
      { q: 'Do you test stretch and recovery?', a: 'Development includes stretch percentage and recovery testing.' },
    ]}
  />
);
export default LycraBlendsFabric;
