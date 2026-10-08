import FabricCategoryPage from '@/components/FabricCategoryPage';

const HomeFurnishingFabric = () => (
  <FabricCategoryPage
    slug="home-furnishing"
    productName="Home Furnishing Fabric"
    title="Home Furnishing Fabrics — Woven Textiles for Table, Bed & Living"
    metaTitle="Home Furnishing Fabric Manufacturer & Exporter India | JNC"
    metaDescription="Woven home furnishing fabrics from India for table linen, cushion covers and bed linen accessories. Cotton, linen and blends. Small quantities to bulk."
    keywords="home furnishing fabric manufacturer India, table linen fabric India, cushion cover fabric exporter, home textile fabric supplier"
    intro="JNC produces woven home furnishing fabrics across all our manufacturing units. These are lighter constructions than upholstery fabric, designed for table linen, bed linen accessories, cushion covers, napkins, placemats, runners and decorative panels."
    sections={[
      {
        heading: 'Home Furnishing Fabric from Janki Nath & Co.',
        paragraphs: [
          'We weave in cotton, linen, cotton-linen blend and viscose in plain, yarn-dyed, dobby, jacquard and IKAT constructions. Buyers include home textiles brands, interior designers, hospitality procurement teams and retailers building private-label home collections.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain · Yarn-dyed · Dobby · Jacquard · IKAT' },
          { label: 'Compositions', value: 'Cotton · Linen · Cotton/Linen · Viscose' },
        ],
      },
      {
        heading: 'Table Linen',
        paragraphs: [
          'Tablecloths, table runners, napkins and placemats, available in plain, yarn-dyed checks, dobby weave and jacquard constructions. Cotton and linen blends are the most popular for table use. Restaurant, hotel and retail quantities are welcomed. Cotton-linen blends combine the absorbency of cotton with the crisp, textured look of linen, and both launder well, which matters for hospitality wash cycles.',
        ],
      },
      {
        heading: 'Cushion Covers & Decorative',
        paragraphs: [
          'Cushion panel fabric, IKAT constructions, jacquard brocade and yarn-dyed checks, suitable for cut-and-sew cushion production. Available in garment-weight and home-furnishing-weight versions, with pattern repeats and widths matched to your panel size to reduce wastage in cutting.',
        ],
      },
      {
        heading: 'Bed Linen Accessories',
        paragraphs: [
          'Lighter plain weave and dobby constructions for bed runners, pillowcase fabric and duvet border panels. Fabrics are developed to suit the weight and handle of the finished piece, from crisp plain weaves to softer dobby textures.',
        ],
      },
      {
        heading: 'Choosing the Right Construction',
        paragraphs: [
          'Plain weave suits everyday pieces where a clean, quiet surface is wanted. Yarn-dyed checks bring colour and pattern to casual tables and cushions without printing. Dobby adds texture without bulk, which suits napkins, runners and bed linen accessories. Jacquard and brocade suit formal tables and statement cushions, and IKAT gives a handmade look for artisan collections. Tell us the end use and the feel you want and we will propose the construction.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100. BCI cotton. GOTS-certified organic cotton constructions are available for certified product lines. Available in certified and conventional constructions. Certifications on request.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'Small quantities to bulk with no minimum order lock-in, and custom construction development to your brief. Fabric is export-ready with full documentation, FOB New Delhi.',
        ],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about home furnishing fabrics: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
  />
);
export default HomeFurnishingFabric;
