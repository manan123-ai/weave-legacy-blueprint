import FabricCategoryPage from '@/components/FabricCategoryPage';
import ginghamImg from '@/assets/organic-cotton-yarn-dyed-gingham.jpg';
import blueCheckImg from '@/assets/organic-cotton-yarn-dyed-blue-check.jpg';
import redPlaidImg from '@/assets/organic-cotton-yarn-dyed-red-plaid.jpg';
import tartanImg from '@/assets/organic-cotton-yarn-dyed-tartan-check.jpg';
import plainWhiteImg from '@/assets/organic-cotton-plain-white.jpg';
import plainNaturalImg from '@/assets/organic-cotton-plain-natural.jpg';

const OrganicCottonFabric = () => (
  <FabricCategoryPage
    slug="organic-cotton"
    productName="Organic Cotton Fabric"
    title="Organic Cotton Fabric — GOTS Certified Woven Fabric from India"
    metaTitle="GOTS Certified Organic Cotton Fabric Manufacturer India | JNC"
    metaDescription="GOTS and OCS certified organic cotton woven fabric from India — plain, dobby, yarn-dyed and jacquard for garments and home. Small quantities to bulk."
    keywords="organic cotton fabric manufacturer India GOTS, GOTS certified fabric India, organic cotton woven fabric exporter"
    intro="Janki Nath & Co. is a woven fabric manufacturer and exporter in New Delhi, weaving since 1968. We make organic cotton fabric in plain, poplin, chambray, dobby, yarn-dyed and jacquard constructions for garments and home use. GOTS and OCS certified organic cotton is available, depending on the quality. Tell us which claim your product needs and we will advise which one applies."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: ginghamImg, alt: 'Yarn-dyed woven cotton gingham check in blue and white' },
      { src: blueCheckImg, alt: 'Yarn-dyed woven cotton check in blue and white' },
      { src: redPlaidImg, alt: 'Yarn-dyed woven plaid in red, black and white' },
      { src: tartanImg, alt: 'Yarn-dyed woven check in grey, blue and red' },
      { src: plainWhiteImg, alt: 'Plain woven cotton fabric in white' },
      { src: plainNaturalImg, alt: 'Plain woven cotton fabric in natural colour' },
    ]}
    sections={[
      {
        heading: 'Organic Cotton from Janki Nath & Co.',
        paragraphs: [
          'Buyers who need certified organic fabric for their product range can request GOTS transaction certificates from us per shipment. We weave organic cotton in plain, dobby, yarn-dyed and jacquard constructions for both garment and home furnishing use.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain · Poplin · Chambray · Dobby · Yarn-dyed · Jacquard' },
          { label: 'Certification', value: 'GOTS and OCS certified organic cotton available, depending on the quality' },
          { label: 'Documentation', value: 'Transaction certificates per shipment on request' },
        ],
      },
      {
        heading: 'Organic Cotton Fabric Manufacturer and Exporter from India',
        paragraphs: [
          'We are a mill-direct manufacturer and exporter, supplying brands, importers and garment manufacturers abroad. Fabric is exported with full documentation. We make as per your requirement: tell us the quality, construction, width and quantity and we confirm.',
        ],
      },
      {
        heading: 'Dyed Organic Cotton, Including Yarn-Dyed',
        paragraphs: [
          'We weave the fabric ourselves. Dyeing is done through our nominated, approved dyeing partners, so dyed GOTS organic cotton fabric is possible, including yarn-dyed. Tell us the colours and the construction you need.',
        ],
      },
      {
        heading: 'GOTS or OCS: Which Claim Does Your Product Need?',
        paragraphs: [
          'GOTS covers organic fibre and the processing chain, including environmental and social criteria, so a product can carry the GOTS label. OCS verifies organic content only, and suits blended constructions or products where the full GOTS processing criteria are not required. Tell us which claim your product needs and we will advise which certification applies.',
        ],
      },
      {
        heading: 'Why Source Organic Cotton Fabric',
        paragraphs: [
          'Brands choose certified organic fabric to support sustainability commitments and to back up organic claims with documentation, particularly in European markets where buyers ask for chain-of-custody evidence. Organic cotton is grown without synthetic pesticides and fertilisers, and GOTS adds restrictions on the chemicals used in dyeing and finishing.',
        ],
      },
      {
        heading: 'Garment Applications',
        paragraphs: [
          'Shirts, dresses, blouses, co-ord sets and resort wear, in lightweight plain weave, poplin and chambray in organic cotton. Suitable for brands building certified organic collections.',
        ],
      },
      {
        heading: 'Home Furnishing Applications',
        paragraphs: [
          'Table linen, napkins, cushion covers and bed linen accessories in organic cotton, in natural undyed and yarn-dyed options.',
        ],
        links: [{ label: 'Home furnishing fabric', to: '/fabrics/home-furnishing' }],
      },
      {
        heading: 'Certification',
        paragraphs: [
          'GOTS and OCS certified organic cotton is available, depending on the quality. Transaction certificates are provided per shipment on request, and our scope certificate is shared with buyers on request.',
        ],
        links: [{ label: 'See all our certified fabrics', to: '/fabrics/certified' }, { label: 'For how GOTS, OCS, GRS, OEKO-TEX and BCI differ, see our certification comparison', to: '/blog/gots-ocs-grs-oeko-tex-certification-comparison' }],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and custom construction development in organic cotton from 150 m depending on the quality. Full certification documentation is provided with each shipment. Lead time is confirmed per quality and quantity at the time of enquiry.',
        ],
        links: [{ label: 'How our sampling works', to: '/sampling' }],
      },
      {
        heading: 'Organic Cotton vs BCI Cotton',
        paragraphs: [
          'Organic cotton is grown without synthetic pesticides and fertilisers and certified to an organic standard. BCI (Better Cotton Initiative) cotton is not organic: it comes from a farmer training and sustainability programme that reduces water and pesticide use. We supply both. See our guide on what BCI cotton means, and our comparison of GOTS, OCS, GRS and OEKO-TEX, to decide which claim your product needs.',
        ],
        links: [
          { label: 'What is BCI cotton? Meaning and buyer guide', to: '/blog/what-is-bci-cotton-guide-textile-buyers' },
          { label: 'GOTS vs OCS vs GRS vs OEKO-TEX: which certification do you need?', to: '/blog/gots-ocs-grs-oeko-tex-certification-comparison' },
          { label: 'Cotton fabric', to: '/fabrics/cotton' },
          { label: 'Greige cotton for your own dyeing and processing', to: '/fabrics/greige' },
        ],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about GOTS certified organic cotton fabric: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
    faq={[
      { q: 'Who supplies GOTS certified organic cotton fabric in India?', a: 'Janki Nath & Co. weaves organic cotton fabric in plain, poplin, chambray, dobby, yarn-dyed and jacquard constructions, in development and bulk quantities. GOTS and OCS certified organic cotton is available, depending on the quality, with transaction certificates per shipment on request.' },
      { q: 'What is the minimum order for organic cotton fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Is all your cotton organic?', a: 'No. Organic cotton is one part of our range. We also supply BCI and other cotton.' },
      { q: 'Can you supply dyed organic cotton?', a: 'Yes, through our nominated, approved dyeing partners, including yarn-dyed.' },
      { q: 'Can you supply a transaction certificate?', a: 'Yes, per shipment on request.' },
      { q: 'How do I verify a GOTS certificate?', a: 'Ask the supplier for its current GOTS scope certificate and, for each order, the transaction certificate, and check the certified company in the public GOTS database. Both documents should name the products and the certified processing units.' },
      { q: 'What is the difference between GOTS organic and the "made with organic" label?', a: 'Under GOTS, a product can be labelled "organic" when at least 95 percent of its fibres are certified organic, and "made with organic" when at least 70 percent are. Tell us which label your product needs and we will advise on the construction.' },
    ]}
  />
);
export default OrganicCottonFabric;
