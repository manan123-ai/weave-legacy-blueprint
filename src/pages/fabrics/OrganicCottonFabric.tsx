import FabricCategoryPage from '@/components/FabricCategoryPage';

const OrganicCottonFabric = () => (
  <FabricCategoryPage
    slug="organic-cotton"
    productName="Organic Cotton Fabric"
    title="Organic Cotton Fabric — GOTS Certified Woven Fabric from India"
    metaTitle="GOTS Certified Organic Cotton Fabric Manufacturer India | JNC"
    metaDescription="GOTS and OCS certified organic cotton woven fabric from India — plain, dobby, yarn-dyed and jacquard for garments and home. Small quantities to bulk."
    keywords="organic cotton fabric manufacturer India GOTS, GOTS certified fabric India, organic cotton woven fabric exporter"
    intro="Janki Nath & Co. is a GOTS and OCS certified organic cotton fabric manufacturer in India. We hold GOTS (Global Organic Textile Standard) certification, covering the full processing chain from organic fibre through to finished fabric. GOTS is widely regarded as the leading standard for organic textiles, covering not just the organic fibre content but also the processing, dyeing and finishing stages."
    sections={[
      {
        heading: 'Organic Cotton from Janki Nath & Co.',
        paragraphs: [
          'Buyers who need certified organic fabric for their product range can request GOTS transaction certificates from us per shipment. We weave organic cotton in plain, dobby, yarn-dyed and jacquard constructions for both garment and home furnishing use. The fabric is produced from OCS and GOTS-certified organic cotton yarn.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain · Poplin · Chambray · Dobby · Yarn-dyed · Jacquard' },
          { label: 'Certification', value: 'GOTS (processing chain) · OCS (organic content)' },
          { label: 'Documentation', value: 'Transaction certificates per shipment on request' },
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
      },
      {
        heading: 'Certification',
        paragraphs: [
          'GOTS certified (processing chain). OCS certified (organic content). Transaction certificates are available per shipment on request. Both certifications are independently audited annually.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'Small quantities to bulk, with no minimum order lock-in. Custom construction development in organic cotton, and full certification documentation provided with each shipment. Standard lead times are 15–30 days for running qualities and 30–45 days for custom development.',
        ],
      },
      {
        heading: 'FAQ: Organic Cotton Fabric Suppliers in India',
        paragraphs: [
          'Who supplies GOTS certified organic cotton fabric in India? Janki Nath & Co. weaves GOTS and OCS certified organic cotton fabric in plain, poplin, chambray, dobby, yarn-dyed and jacquard constructions, from small quantities to bulk, with transaction certificates per shipment on request.',
          'How do I verify a GOTS certificate? Ask the supplier for its current GOTS scope certificate and, for each order, the transaction certificate, and check the certified company in the public GOTS database. Both documents should name the products and the certified processing units.',
          'What is the difference between GOTS organic and the "made with organic" label? Under GOTS, a product can be labelled "organic" when at least 95 percent of its fibres are certified organic, and "made with organic" when at least 70 percent are. Tell us which label your product needs and we will advise on the construction.',
        ],
      },
      {
        heading: 'Organic Cotton vs BCI Cotton',
        paragraphs: [
          'Organic cotton is grown without synthetic pesticides and fertilisers and certified to an organic standard. BCI (Better Cotton Initiative) cotton is not organic: it comes from a farmer training and sustainability programme that reduces water and pesticide use. We supply both. See our guide on what BCI cotton means, and our comparison of GOTS, OCS, GRS and OEKO-TEX, to decide which claim your product needs.',
        ],
        links: [
          { label: 'What is BCI cotton? Meaning and buyer guide', to: '/blog/what-is-bci-cotton-guide-textile-buyers' },
          { label: 'GOTS vs OCS vs GRS vs OEKO-TEX: which certification do you need?', to: '/blog/gots-ocs-grs-oeko-tex-certification-comparison' },
        ],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about GOTS certified organic cotton fabric: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
  />
);
export default OrganicCottonFabric;
