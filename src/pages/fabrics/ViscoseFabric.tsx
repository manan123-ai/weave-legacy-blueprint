import FabricCategoryPage from '@/components/FabricCategoryPage';
import viscoseNewImg from '@/assets/viscose-new.jpg';
import viscoseUpdatedImg from '@/assets/viscose-updated.jpg';

const ViscoseFabric = () => (
  <FabricCategoryPage
    slug="viscose"
    productName="Viscose Fabric"
    title="Viscose Fabric Manufacturer & Exporter from India"
    metaTitle="Viscose Fabric Manufacturer in India — Woven Viscose & Blends"
    metaDescription="Woven viscose fabric manufacturer in India: viscose twill, crepe and plain weaves, plus cotton/viscose blends with fluid drape. Mill-direct export supply."
    keywords="viscose fabric manufacturer India, viscose fabric exporter, viscose twill India"
    intro="Janki Nath & Co. manufactures viscose and viscose blend fabrics — supplying fashion brands, dress manufacturers and resort wear labels worldwide."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: viscoseNewImg, alt: 'Woven viscose fabric with soft fluid drape in peach, from Janki Nath & Co., India' },
      { src: viscoseUpdatedImg, alt: 'Woven viscose fabric in cream, from Janki Nath & Co., India' },
    ]}
    sections={[
      {
        heading: 'What Is Woven Viscose Fabric?',
        paragraphs: [
          'Viscose is a regenerated cellulose fibre made from wood pulp. It sits between natural and synthetic fibres. In woven fabric it is known for fluid drape, deep colour and a soft hand, and it is more breathable than polyester. How it performs depends on the construction, the yarn and the finishing, not only on the fibre.',
        ],
      },
      {
        heading: 'Our Viscose Fabric Range',
        paragraphs: [
          'Viscose takes dye to deeper, more saturated colours than most natural fibres, and falls like silk. A well-constructed woven viscose drapes and wears well.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Viscose plain · Twill · Crepe · Georgette weight · Slub · Jacquard' },
          { label: 'Compositions', value: '100% Viscose · Cotton/Viscose · Linen/Viscose · Viscose/Lycra' },
          { label: 'Finishes', value: 'Piece-dyed · Printed · Yarn-dyed viscose' },
        ],
      },
      {
        heading: 'Where Viscose Fabric Is Used',
        paragraphs: [
          'Evening wear, resort wear, fluid trousers, draped dresses, blouses, linings, scarves and summer collections.',
        ],
        links: [{ label: 'Crepe and high twist fabric', to: '/fabrics/crepe' }, { label: 'Jacquard fabric', to: '/fabrics/jacquard' }, { label: 'Dobby fabric', to: '/fabrics/dobby' }, { label: 'Cotton fabric', to: '/fabrics/cotton' }, { label: 'How our sampling works', to: '/sampling' }],
      },
      {
        heading: 'Choosing a Blend',
        paragraphs: [
          'Cotton in the blend adds body, linen gives a drier hand, and a little Lycra adds stretch. Tell us the garment and the drape you want and we will propose a construction.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['OEKO-TEX Standard 100 and GRS certification are available on request, depending on the quality.'],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for viscose fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Is viscose a natural or synthetic fibre?', a: 'Semi-synthetic. It is made from natural wood pulp through a chemical process.' },
      { q: 'Is viscose the same as rayon?', a: 'In most markets the two names describe the same regenerated cellulose fibre.' },
      { q: 'Which blends do you make?', a: 'Cotton/viscose, linen/viscose and viscose/Lycra, as well as 100% viscose.' },
      { q: 'Do you make printed or dyed viscose?', a: 'Yes: piece-dyed, printed and yarn-dyed viscose.' },
      { q: 'Is certified viscose available?', a: 'OEKO-TEX Standard 100 and GRS are available on request, depending on the quality.' },
    ]}
  />
);
export default ViscoseFabric;
