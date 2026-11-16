import FabricCategoryPage from '@/components/FabricCategoryPage';
import lurexSheen from '@/assets/lurex-gold-sheen.jpg';
import lurexFolds from '@/assets/lurex-gold-folds.jpg';
import lurexCrinkle from '@/assets/lurex-gold-crinkle.jpg';
import lurexSilver from '@/assets/lurex-silver.jpg';

const LurexFabric = () => (
  <FabricCategoryPage
    slug="lurex"
    productName="Lurex & Sequins Fabric"
    title="Lurex & Sequins Fabric Manufacturer & Exporter from India"
    metaTitle="Lurex & Sequins Fabric Manufacturer India — Export Quality | JNC Fabrics"
    metaDescription="Export-grade lurex and sequin fabric from India — woven metallic and reflective textiles for evening and occasion wear. Mill-direct supply."
    keywords="lurex fabric manufacturer India, sequin fabric exporter, metallic fabric India, occasion wear fabric"
    intro="Janki Nath & Co. manufactures export-grade lurex and sequin fabrics from our weaving units across India — supplying fashion brands, garment manufacturers and buying houses across USA, UK, Germany, France, Japan and Australia."
    images={[
      { src: lurexSheen, alt: 'Woven fabric with a gold metallic shine' },
      { src: lurexFolds, alt: 'Gold metallic fabric with soft folds' },
      { src: lurexCrinkle, alt: 'Crinkled gold metallic fabric' },
      { src: lurexSilver, alt: 'Silver metallic fabric with folds' },
    ]}
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    sections={[
      {
        heading: 'Our Lurex & Sequins Range',
        paragraphs: [
          'We produce woven lurex and sequin fabrics with metallic and reflective surface effects, developed for evening wear, party dresses and stage costume collections.',
          'Lurex is a metallic yarn — a core thread wrapped or laminated with a thin metallic film — woven alongside standard yarns as weft or warp to create a glittering effect within the fabric structure itself. Because the metallic yarn is structural rather than printed or embroidered, the effect cannot scratch off or wash away. Available as lurex jacquard, lurex stripes and checks, or all-over lurex for maximum metallic coverage.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Woven Lurex · Sequin-embellished · Metallic Yarn Blends' },
          { label: 'Finishes', value: 'Metallic · Reflective · Decorative · Custom Colourways' },
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
          'Lurex and sequin fabrics from our range are used across evening wear, party dresses, stage costumes and fashion accessories.',
        ],
      },
      {
        heading: 'Sampling & Development',
        paragraphs: [
          'We offer custom lurex and sequin fabric development from your specification. Strike-off samples available. Development quantities and bulk production both handled from the same facility.',
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
      { q: 'What is the minimum order for lurex fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which lurex constructions do you make?', a: 'Woven lurex, sequin-embellished and metallic yarn blends, in metallic, reflective and decorative finishes, with custom colourways.' },
      { q: 'Is development available?', a: 'Yes. We develop lurex and sequin fabric to your specification, and strike-off samples are available.' },
    ]}
  />
);
export default LurexFabric;
