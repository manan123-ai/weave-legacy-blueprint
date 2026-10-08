import FabricCategoryPage from '@/components/FabricCategoryPage';

const RecycledFabric = () => (
  <FabricCategoryPage
    slug="recycled"
    productName="Recycled Fabric"
    title="Recycled Fabric — GRS Certified Recycled Cotton & Recycled Polyester Blends"
    metaTitle="GRS Certified Recycled Fabric Manufacturer & Exporter India | JNC"
    metaDescription="GRS certified recycled cotton and recycled polyester blend woven fabric from India for garments and home furnishing. Small quantities to bulk."
    keywords="recycled fabric manufacturer India GRS certified, recycled cotton fabric India, recycled polyester blend fabric exporter"
    intro="JNC holds GRS (Global Recycled Standard) certification, which verifies the recycled content in our fabric and confirms responsible social, environmental and chemical practices in our supply chain. GRS is a widely recognised standard for recycled content claims in textiles, and is requested by many sustainability-focused brands and retailers."
    sections={[
      {
        heading: 'Recycled Fabric from Janki Nath & Co.',
        paragraphs: [
          'We offer woven constructions using recycled cotton yarn and recycled polyester blend yarn. These can be used in garment fabrics and home furnishing fabrics, depending on the construction.',
        ],
        bullets: [
          { label: 'Fibres', value: 'Recycled cotton · Recycled polyester blended with cotton or viscose' },
          { label: 'Certification', value: 'GRS certified, with transaction certificates per shipment' },
          { label: 'Applications', value: 'Casualwear · Workwear · Home textiles · Upholstery and furnishing' },
        ],
      },
      {
        heading: 'Recycled Cotton',
        paragraphs: [
          'Made from pre-consumer or post-consumer cotton waste, and available in yarn-dyed and plain weave constructions. The handle is slightly more textured than virgin cotton. Suitable for casualwear, workwear and home textiles where recycled content is the primary requirement.',
        ],
      },
      {
        heading: 'Recycled Polyester Blends',
        paragraphs: [
          'Recycled polyester blended with cotton or viscose, used in heavier constructions for upholstery and furnishing applications where durability is required alongside recycled content credentials.',
        ],
      },
      {
        heading: 'Recycled Content and Handle',
        paragraphs: [
          'Recycled yarns can behave a little differently from virgin yarns, with more natural variation, so we recommend a strike-off sample before bulk to confirm handle, colour and performance for your end use. Constructions can be matched to the weight and finish you need, and we will advise where recycled content works best.',
        ],
      },
      {
        heading: 'What GRS Means for Your Claims',
        paragraphs: [
          'GRS verifies the recycled content of a product and tracks it through the supply chain, so your brand has documentation behind a recycled-content claim. What you can claim on the finished product depends on the recycled content percentage of the construction, so tell us the claim you need and we will confirm which construction fits.',
        ],
      },
      {
        heading: 'Certification',
        paragraphs: [
          'GRS certified. Transaction certificates are available per shipment. Recycled content percentage is confirmed per construction and is available on request.',
        ],
      },
      {
        heading: 'What We Offer',
        paragraphs: [
          'Small quantities to bulk, with no minimum order lock-in. Full GRS documentation and transaction certificates are provided, and custom development of recycled constructions is available. Standard lead times are 15–30 days for running qualities and 30–45 days for custom development.',
        ],
      },
      {
        heading: 'Enquire',
        links: [{ label: 'Enquire about GRS certified recycled fabric: wa.me/919891542727', to: 'https://wa.me/919891542727' }],
      },
    ]}
  />
);
export default RecycledFabric;
