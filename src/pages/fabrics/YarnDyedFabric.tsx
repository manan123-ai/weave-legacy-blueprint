import FabricCategoryPage from '@/components/FabricCategoryPage';
import ydCheckGreenBlue from '@/assets/yarn-dyed-check-green-blue.jpg';
import ydPlaidRed from '@/assets/yarn-dyed-plaid-red.jpg';
import yarnDyedImg from '@/assets/yarn-dyed-fabric.jpg';

const YarnDyedFabric = () => (
  <FabricCategoryPage
    slug="yarn-dyed"
    productName="Yarn Dyed Fabric"
    title="Yarn-Dyed Woven Fabrics — Checks, Stripes & Plaids"
    metaTitle="Yarn Dyed Fabric Manufacturer India — Stripes, Checks & Plaids | JNC"
    metaDescription="Yarn dyed fabric manufacturer in India: stripes, checks and plaids for shirting, apparel and home furnishing. Consistent colour on every reorder. Mill-direct export."
    keywords="yarn dyed fabric manufacturer India, checks stripes fabric India, yarn dyed export"
    intro="Yarn dyeing means the thread is dyed before weaving, so the colour is woven into the structure rather than printed on top. The result is richer depth of colour and better wash fastness."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: yarnDyedImg, alt: 'Yarn-dyed cotton plaid fabric in red, blue and yellow, woven by Janki Nath & Co., India' },
      { src: ydCheckGreenBlue, alt: 'Yarn-dyed woven check in green, blue and yellow' },
      { src: ydPlaidRed, alt: 'Yarn-dyed woven plaid in red, black and white' },
    ]}
    sections={[
      {
        heading: 'Yarn-Dyed Fabric from Janki Nath & Co.',
        paragraphs: [
          'Janki Nath & Co. has been weaving fabric in India since 1968, and yarn-dyed constructions are a core part of our range. We weave checks, stripes, plaids, windowpanes and houndstooth in cotton, linen, cotton-linen blends, viscose and blends with Lycra, from our own weaving units. Each construction is developed from yarn selection through to finished fabric.',
        ],
      },
      {
        heading: 'Garment Weight',
        paragraphs: [
          'Lightweight to medium-weight constructions for shirts, blouses, dresses, trousers and co-ord sets. Popular weaves include poplin, chambray, Oxford, twill and voile, available in solid yarns, melange yarns and space-dyed effects. Suitable for spring/summer and resort collections.',
        ],
      },
      {
        heading: 'Home Furnishing Weight',
        paragraphs: [
          'Heavier constructions for cushion covers, table linen, napkins, runners, curtain panels and upholstered accessories, with tighter weave counts, a heavier GSM range and wider loom widths available. Checks and windowpane patterns are especially popular.',
        ],
      },
      {
        heading: 'What Is Yarn-Dyed Fabric? Yarn-Dyed vs Piece-Dyed',
        paragraphs: [
          'Yarn-dyed fabric is woven from yarn that was dyed before weaving. Because the colour is in the thread, checks, stripes and plaids are woven in rather than printed.',
          'Piece-dyed fabric is woven in plain undyed yarn and dyed afterwards as a whole piece, which gives a single solid colour. Yarn-dyed is chosen when the design needs more than one colour in the weave, such as checks, stripes and woven plaids.',
        ],
        links: [{ label: 'Read our guide: Yarn-dyed vs piece-dyed fabric', to: '/blog/yarn-dyed-vs-piece-dyed-fabric-guide' }],
      },
      {
        heading: 'FAQ: Yarn Dyed Fabric for Which Season?',
        paragraphs: [
          'Yarn dyed fabric for which season? Yarn-dyed checks, plaids and stripes in heavier cotton and linen constructions are well suited for autumn-winter collections — the richer colour depth and structured hand feel complement the season.',
          'Which season is yarn-dyed fabric used in? Lighter yarn-dyed cottons in chambray, oxford and fine check constructions work naturally for spring-summer collections. Both seasonal directions are available from our range in development and bulk quantities.',
        ],
      },
      {
        heading: 'Our Yarn Dyed Range',
        bullets: [
          { label: 'Constructions', value: 'Checks · Stripes · Plaids · Windowpanes · Houndstooth · Madras · Chambray · Oxford' },
          { label: 'Compositions', value: 'Cotton · Linen · Cotton/Linen · Viscose · Blends with Lycra' },
          { label: 'Colour', value: 'Custom colour combinations developed to your specification, with lab dip matching available.' },
        ],
      },
      {
        heading: 'Where Yarn-Dyed Fabric Is Used',
        paragraphs: [
          'Shirts and blouses. Dresses. Trousers and co-ord sets. Cushion covers, table linen and curtain panels.',
        ],
        links: [{ label: 'Dobby fabric: textured weaves, also yarn-dyed', to: '/fabrics/dobby' }, { label: 'Cotton fabric range', to: '/fabrics/cotton' }, { label: 'Home furnishing fabric', to: '/fabrics/home-furnishing' }],
      },
      {
        heading: 'Checks, Stripes and Plaids at a Glance',
        paragraphs: [
          'Check: lines of colour crossing in both directions. Stripe: lines running in one direction. Plaid: wider, layered checks in several colours. Windowpane: fine lines forming large open squares. Houndstooth: a broken check with pointed shapes. Madras: a light cotton plaid. Chambray: a soft plain weave with a coloured warp. Oxford: a durable basket-style weave.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and custom development from 150 m depending on the quality, and lead time is confirmed per quality and quantity at the time of enquiry. We develop custom check and stripe repeats from yarn selection through to finished fabric, and sampling and lab dip matching are available. BCI cotton is used across most constructions, and GOTS-certified organic yarn is available on request.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: ['BCI certified cotton options available. OEKO-TEX Standard 100 and GRS certified. Available in certified and conventional constructions. Certifications on request.'],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about yarn-dyed constructions: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for yarn-dyed fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Can you match my colours?', a: 'Yes. We develop custom colour combinations and offer lab dip matching. Send us a Pantone reference or a swatch.' },
      { q: 'Which fibres do you weave yarn-dyed fabric in?', a: 'Cotton, linen, cotton-linen blends, viscose and blends with Lycra.' },
      { q: 'Does yarn-dyed fabric fade less than printed fabric?', a: 'Because the colour is dyed into the yarn before weaving, the pattern is woven in, not printed on top. Fastness depends on the dye and the quality, so tell us your wash and light requirements.' },
    ]}
  />
);
export default YarnDyedFabric;
