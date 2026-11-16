import FabricCategoryPage from '@/components/FabricCategoryPage';
import twillTeal from '@/assets/twill-teal.jpg';
import twillCheckBlue from '@/assets/twill-check-blue.jpg';
import twillDiagGreen from '@/assets/twill-diagonal-green.jpg';
import twillSoftGreen from '@/assets/twill-soft-green.jpg';
import twillDrillsImg from '@/assets/twill-drills-new.jpg';

const TwillFabric = () => (
  <FabricCategoryPage
    slug="twill"
    productName="Twill & Drills Fabric"
    title="Twill & Drills Fabric Manufacturer & Exporter from India"
    metaTitle="Twill & Drills Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade twill and drill fabric from India — cotton twill, gabardine, structured weaves for workwear, uniforms and casualwear. Mill-direct supply."
    keywords="twill fabric manufacturer India, drill fabric exporter, gabardine fabric India, workwear fabric supplier"
    intro="Janki Nath & Co. manufactures export-grade twill and drill fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: twillDrillsImg, alt: 'Cotton twill fabric folded, showing the diagonal rib, from Janki Nath & Co., India' },
      { src: twillTeal, alt: 'Woven twill fabric in teal with a diagonal weave' },
      { src: twillCheckBlue, alt: 'Woven twill check fabric in blue' },
      { src: twillDiagGreen, alt: 'Close-up of a diagonal twill weave in green' },
      { src: twillSoftGreen, alt: 'Soft woven twill fabric in green' },
    ]}
    sections={[
      {
        heading: 'Our Twill & Drills Range',
        paragraphs: [
          'We produce twill and drill fabrics across a range of weave angles and weights — cotton twill, drill and gabardine constructions — built for durability in workwear, uniforms and heavy-duty casualwear applications.',
          'Twill weave creates a diagonal rib pattern by passing the weft thread over multiple warp threads before going under, rather than the simple over-one-under-one of plain weave — giving greater strength and durability at the same yarn weight. Drill is typically a heavier 2/1 or 3/1 twill used in workwear and uniforms; gabardine is a tightly woven, smooth-faced twill with excellent wrinkle resistance used in suits and formal trousers.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Cotton Twill · Drill · Gabardine · 45° / 63° Twill' },
          { label: 'Finishes', value: 'Greige · RFD · Sanforized · Piece-dyed · Yarn-dyed' },
          { label: 'Certifications', value: 'GOTS and OCS certified cotton available · BCI cotton available · OEKO-TEX Standard 100 and GRS on request' },
          { label: 'Supply', value: 'Development quantities and bulk' },
          { label: 'Export', value: 'Mill-direct, with export documentation' },
        ],
      },
      {
        heading: 'What Is Twill and Drill Fabric?',
        paragraphs: [
          'Twill is a weave, not a fibre. The weft yarn passes over two or more warp yarns before going under, and each row steps across, which makes the diagonal rib you can see on the cloth. Drill is a heavier twill, usually 2/1 or 3/1, used where strength matters. Gabardine is a tightly woven, smooth-faced twill. We make all three to your requirement, in any weight, in cotton, cotton blends and other fibres to your requirement.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'Twill is a weave, so it can be made in certified cotton. Our twill and drill fabrics are available in GOTS (Global Organic Textile Standard) and OCS (Organic Content Standard) certified cotton, BCI (Better Cotton Initiative) cotton is available, and OEKO-TEX Standard 100 and GRS are available on request. We confirm what applies to each quality. Full documentation is provided with every export order.',
        ],
      },
      {
        heading: 'Where Our Twill and Drill Fabrics Are Used',
        paragraphs: [
          'Workwear and uniforms. Trousers and chinos. Shirts and casualwear. Jackets. Dresses. Bags. Home use. Heavy-duty industrial applications. Tell us the end use and we will suggest the construction.',
        ],
        links: [{ label: 'How to read GSM: fabric weight guide', to: '/blog/cotton-fabric-gsm-guide' }, { label: 'Greige fabric for your own dyeing and finishing', to: '/fabrics/greige' }, { label: 'How our sampling works', to: '/sampling' }],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom twill fabric development from your specification. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
          'From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and custom development from 150 m depending on the quality. We weave in our own units and sell mill-direct, with no agent between you and production.',
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
      { q: 'What is the minimum order for twill and drill fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'What weight and width can you make?', a: 'Any weight, made to your requirement. Widths are 48 to 120 inches, wider on order.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Is twill available in certified cotton?', a: 'Yes. Twill is a weave, so it can be made in certified cotton. It is available in GOTS and OCS certified cotton, BCI cotton is available, and OEKO-TEX Standard 100 and GRS are available on request. Not every twill is certified, so tell us which certification you need and we confirm it for the quality.' },
      { q: 'What is the difference between twill, drill and gabardine?', a: 'All three are twill weaves. Drill is a heavier twill, and gabardine is a tightly woven, smooth-faced twill.' },
      { q: 'Can you develop twill to our specification?', a: 'Yes. Send us your weave, weight and colour and we make strike-off samples. Development and bulk production are handled from our own weaving units.' },
    ]}
  />
);
export default TwillFabric;
