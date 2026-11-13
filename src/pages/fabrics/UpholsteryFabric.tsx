import FabricCategoryPage from '@/components/FabricCategoryPage';
import upholsterySamplesImg from '@/assets/upholstery-fabric-samples.jpg';
import upholsteryJacquardImg from '@/assets/upholstery-home-furnishing-new.jpg';
import upholsteryStackImg from '@/assets/upholstery-updated.jpg';

const UpholsteryFabric = () => (
  <FabricCategoryPage
    slug="upholstery"
    productName="Upholstery & Home Furnishing Fabric"
    title="Upholstery Fabric — Woven Furnishing Fabrics for Furniture, Contract & Hospitality"
    metaTitle="Upholstery Fabric Manufacturer & Exporter India | JNC Fabrics"
    metaDescription="Upholstery fabric export from India: sofa, curtain and drapery fabrics direct from the mill. OEKO-TEX and GRS certified, exported to the USA, UK and Europe."
    keywords="upholstery fabric manufacturer India, home furnishing fabric India, sofa fabric manufacturer"
    intro="JNC produces woven upholstery fabrics engineered for the mechanical stress of upholstered furniture — sofas, chairs, ottomans, headboards and banquettes."
    quickFacts={[
      'Bulk orders start at 1,500 m per quality',
      'Sampling and custom development from 150 m, depending on the quality',
      'Widths 48 to 120 inches, wider on order, ex Delhi',
      'Lead time confirmed per quality and quantity at the time of enquiry',
    ]}
    images={[
      { src: upholsterySamplesImg, alt: 'Woven upholstery fabric swatches in grey, brown and cream, from Janki Nath & Co., India' },
      { src: upholsteryJacquardImg, alt: 'Woven jacquard upholstery fabric in gold and grey, from Janki Nath & Co., India' },
      { src: upholsteryStackImg, alt: 'Folded woven upholstery fabrics in cream and tan, from Janki Nath & Co., India' },
    ]}
    sections={[
      {
        heading: 'Upholstery Fabric Export from India: Janki Nath & Co.',
        paragraphs: [
          'We weave jacquard brocade, dobby, yarn-dyed check and plain weave constructions in cotton, cotton-polyester and viscose-cotton blends. All constructions are woven on wider looms to reduce seaming. We also make linen upholstery fabric. Tell us the piece and the use and we recommend a construction.',
        ],
        bullets: [
          { label: 'Constructions', value: 'Plain · Dobby · Jacquard brocade · Yarn-dyed checks' },
          { label: 'Compositions', value: 'Cotton · Cotton/Polyester · Viscose/Cotton' },
          { label: 'Widths', value: 'Wider loom widths available to reduce seaming' },
        ],
      },
      {
        heading: 'Applications',
        paragraphs: [
          'Residential furniture: sofas, armchairs and dining chairs. Contract and hospitality: hotel headboards, restaurant banquettes and lobby seating. Retail and window display. Interior design and bespoke furniture studios.',
        ],
      },
      {
        heading: 'Construction Details',
        paragraphs: [
          'Upholstery fabric carries a heavier GSM than garment fabric, with tight weave counts for durability. It is available in plain, dobby, jacquard and yarn-dyed constructions, and wider loom widths can be matched to standard furniture panel dimensions. We can advise on construction selection based on end use, whether the piece is a dining chair that sees daily wear or a headboard that sees very little.',
        ],
      },
      {
        heading: 'Choosing a Construction',
        paragraphs: [
          'Plain weave gives a quiet, hard-wearing surface that suits tailored and contemporary pieces. Dobby adds texture that helps disguise everyday wear. Jacquard brocade brings pattern and a richer look to statement chairs and headboards, and yarn-dyed checks suit casual and country interiors. Tell us the piece, the traffic it will see and the look you want, and we will recommend a construction and weight.',
        ],
      },
      {
        heading: 'Performance Standards',
        paragraphs: [
          'Our upholstery fabrics are produced to export quality standards, suitable for residential and contract applications. Testing is available on request: Martindale and Wyzenbeek abrasion, pilling, colourfastness to light and rubbing, seam slippage, tensile and tear strength, and dimensional stability. Fire testing to the standard you need can be arranged, confirmed per quality. Contract and hospitality use calls for a higher abrasion rating than residential use.',
        ],
      },
      {
        heading: 'Certifications',
        paragraphs: [
          'OEKO-TEX Standard 100 available on request, depending on the quality. BCI cotton available. GRS recycled content constructions are available on request. Available in certified and conventional constructions. Certifications on request.',
        ],
      },
      {
        heading: 'Upholstery or Home Furnishing Fabric?',
        paragraphs: [
          'Upholstery fabric is for seating and headboards and is heavier and more tightly woven. For table linen, cushion covers and bed linen accessories, see home furnishing fabric.',
        ],
        links: [{ label: 'Home furnishing fabric', to: '/fabrics/home-furnishing' }, { label: 'Jacquard fabric', to: '/fabrics/jacquard' }, { label: 'Dobby fabric', to: '/fabrics/dobby' }, { label: 'Yarn-dyed fabric', to: '/fabrics/yarn-dyed' }, { label: 'Upholstery and home furnishing fabric: sourcing from India', to: '/blog/upholstery-home-furnishing-fabric-sourcing-india' }],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'From small quantities to bulk: bulk orders start at 1,500 m per quality, with sampling and custom construction and colour development from 150 m depending on the quality, for furniture programmes. Fabric is export-ready with full documentation. Flame-retardant and water-repellent finishes can be applied on order. The minimum order is higher for these finishes and confirmed per quality.',
        ],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about upholstery fabric: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
    faq={[
      { q: 'What is the minimum order for upholstery fabric?', a: 'Bulk orders start at 1,500 m per quality. Sampling and custom development start from 150 m. Both depend on the quality.' },
      { q: 'How long does it take?', a: 'It depends on the quality, construction and quantity. Send us your requirement and we confirm on enquiry.' },
      { q: 'Which construction suits which piece?', a: 'Plain weave suits tailored and contemporary pieces, dobby helps disguise everyday wear, jacquard brocade suits statement chairs and headboards, and yarn-dyed checks suit casual interiors.' },
      { q: 'Do you supply contract and hospitality fabric?', a: 'Yes. Tell us the piece and the traffic it will see, and we recommend a construction and weight.' },
      { q: 'Can you develop our own colours or constructions?', a: 'Yes. Custom construction and colour development from 150 m, depending on the quality.' },
      { q: 'Do you offer testing?', a: 'Testing is available on request: Martindale and Wyzenbeek abrasion, pilling, colourfastness to light and rubbing, seam slippage, tensile and tear strength, and dimensional stability. Fire testing to the standard you need can be arranged, confirmed per quality.' },
      { q: 'Which certifications are available?', a: 'OEKO-TEX Standard 100 is available on request, depending on the quality. BCI cotton available. GRS recycled content is available on request.' },
    ]}
  />
);
export default UpholsteryFabric;
