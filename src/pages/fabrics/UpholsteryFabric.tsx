import FabricCategoryPage from '@/components/FabricCategoryPage';

const UpholsteryFabric = () => (
  <FabricCategoryPage
    slug="upholstery"
    productName="Upholstery & Home Furnishing Fabric"
    title="Upholstery & Home Furnishing Fabric Manufacturer from India"
    metaTitle="Upholstery Fabric Manufacturer India — Home Furnishing Export | JNC Fabrics"
    metaDescription="Upholstery and home furnishing fabric manufacturer from India. Sofa, curtain, drapery fabric. OEKO-TEX certified. Export to home furnishing brands worldwide."
    keywords="upholstery fabric manufacturer India, home furnishing fabric India, sofa fabric manufacturer"
    intro="Janki Nath & Co. manufactures upholstery, furnishing and home textile fabrics — supplying home furnishing brands, interior design companies and furniture manufacturers across USA, UK, Europe and UAE."
    sections={[
      {
        heading: 'Our Home Furnishing Fabric Range',
        bullets: [
          { label: 'Fabric Types', value: 'Upholstery · Sofa · Curtain · Drapery · Cushion · Table linen · Bed linen · Decorative' },
          { label: 'Constructions', value: 'Plain · Twill · Jacquard · Dobby · Yarn dyed · Printed furnishing' },
          { label: 'Compositions', value: 'Cotton · Cotton/Polyester · Linen · Cotton/Linen · Viscose furnishing' },
        ],
      },
      {
        heading: 'Performance Standards',
        paragraphs: [
          'Our upholstery fabrics are produced to export quality standards — suitable for residential and contract applications. Fabric testing available on request including Martindale abrasion, colourfastness to light and rubbing, dimensional stability.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100 certified — tested for harmful substances. GOTS certified options available for organic furnishing fabric.',
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Residential upholstery, hospitality furnishing, office furniture, curtains, drapery, cushions, decorative home textiles.',
        ],
      },
    ]}
  />
);
export default UpholsteryFabric;
