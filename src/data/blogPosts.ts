export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  dateDisplay: string;
  author: string;
  /** Paragraphs of body content. */
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'woven-fabric-manufacturers-india-buyers-guide-2026',
    title: "Woven Fabric Manufacturers in India: Complete Buyer's Guide 2026",
    metaDescription:
      "Guide to sourcing woven fabric from Indian manufacturers — certifications, pricing, lead times, and what to look for.",
    excerpt:
      "How to evaluate Indian woven fabric mills — hubs, certifications, and what separates a mill from a trading house.",
    date: '2026-01-12',
    dateDisplay: 'January 12, 2026',
    author: 'Manan Bhasin',
    content: [
      "India produces over 7 billion square metres of woven fabric annually, supplying fashion brands and garment manufacturers across 100+ countries. The major weaving hubs are Bhiwandi and Ichalkaranji (Maharashtra) for synthetic blends, Erode and Salem (Tamil Nadu) for cotton and technical fabrics, Surat (Gujarat) for viscose and blended fabrics, and Meerut (Uttar Pradesh) for structured cotton constructions.",
      "When evaluating Indian fabric manufacturers, buyers should verify: direct mill ownership (not a trading house reselling fabric), in-house weaving capacity, certifications held (BCI, GOTS, OCS, OEKO-TEX), development capability for custom constructions, and export experience in your target market.",
      "Janki Nath & Co. (JNC Fabrics) has manufactured and exported woven fabrics since 1968 from five in-house weaving units across Meerut, Bhiwandi, Erode, Salem and Surat. Our [range of fabrics](/fabrics) covers cotton, linen, jacquard, viscose, dobby, yarn-dyed, crepe, twill and upholstery — available in greige, RFD, dyed and printed finishes. BCI, GOTS, OCS and OEKO-TEX Standard 100 certified.",
      "[Contact us](/contact): jcofabrics@yahoo.co.in | +91 9891542727 | www.jcofabrics.com",
    ],
  },
  {
    slug: 'gots-certified-fabric-india-brand-guide',
    title: 'GOTS Certified Fabric from India: What Brands Need to Know',
    metaDescription:
      'What GOTS certification means for woven fabric buyers — supply chain requirements, documentation, and certified Indian suppliers.',
    excerpt:
      'How GOTS actually works across the supply chain — and how to verify a supplier’s certificate before you order.',
    date: '2026-01-18',
    dateDisplay: 'January 18, 2026',
    author: 'Manan Bhasin',
    content: [
      "GOTS (Global Organic Textile Standard) is the world's leading textile processing standard for organic fibres. It covers the entire supply chain — from raw fibre through spinning, weaving, dyeing, finishing and labelling. For fashion brands building a certified supply chain, every step must be GOTS certified, including your fabric supplier.",
      "What GOTS actually requires: organic fibre at source (certified to GOTS or equivalent organic standard), restricted chemical inputs throughout processing (approved dyes, auxiliaries, accessories), wastewater treatment at processing facilities, social criteria including fair wages and safe working conditions, and annual third-party auditing of every facility in the chain.",
      "For buyers, this means requesting your supplier's GOTS certificate number and verifying it on the GOTS public database at global-standard.org. A genuine certificate shows the company name, certificate number, scope of certification, and validity date.",
      "At Janki Nath & Co., we hold current GOTS certification alongside BCI, OCS and OEKO-TEX Standard 100. Our certified [fabrics](/fabrics) cover cotton, linen and blended constructions — documentation available on request for every order. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'jacquard-fabric-guide-fashion-buyers',
    title: 'Jacquard Fabric: A Complete Guide for Fashion Buyers',
    metaDescription:
      'Everything fashion buyers need to know about jacquard fabric — constructions, applications, sourcing, and what to look for in a manufacturer.',
    excerpt:
      'Damask, brocade, matelassé and cutwork — how each jacquard construction is used and what to check when sourcing.',
    date: '2026-01-24',
    dateDisplay: 'January 24, 2026',
    author: 'Manan Bhasin',
    content: [
      "Jacquard fabric is woven on a Jacquard loom — a mechanism that controls individual warp yarns independently, allowing complex patterns to be built directly into the weave structure. The pattern is not printed or embroidered — it is structural, which means it cannot fade, crack or peel.",
      "Types of jacquard fabric: Damask — typically single-colour with a reversible pattern, used in upholstery and formal wear. Brocade — multi-colour, with a raised pattern effect, used in occasion wear and luxury garments. Matelassé — quilted appearance, used in jackets, bags and structured garments. Cutwork jacquard — open areas within the weave, used in lightweight fashion applications.",
      "What to check when sourcing jacquard: weave complexity the manufacturer can handle, minimum order for custom patterns, repeat size limitations, and whether pattern development is done in-house.",
      "At Janki Nath & Co., we weave [jacquard fabrics](/fabrics) in cotton, viscose, linen and blended compositions. Custom patterns developed from your design brief. Development quantities and bulk both available. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'linen-fabric-sourcing-india-vs-europe-vs-china',
    title: 'Linen Fabric Sourcing Guide: India vs Europe vs China',
    metaDescription:
      'Comparing linen fabric sourcing from India, Europe and China — quality, pricing, certifications and lead times for fashion buyers.',
    excerpt:
      'Where to source linen, what each region does best, and why India is increasingly competitive on quality and certification.',
    date: '2026-01-30',
    dateDisplay: 'January 30, 2026',
    author: 'Manan Bhasin',
    content: [
      "Linen is manufactured primarily in three regions: Europe (Belgium, France, Lithuania) for premium long-staple linen with centuries of heritage; China for volume production at competitive pricing; and India for a middle ground — quality linen and linen blends with strong certification infrastructure and competitive mill-direct pricing.",
      "European linen: the benchmark for quality, particularly Belgian and French linen from the Normandy/Flanders flax-growing region. Higher cost, longer lead times, limited volume capacity. Strong for luxury and heritage positioning.",
      "Chinese linen: high volume, competitive pricing, but variable quality and certification infrastructure is weaker for organic/sustainable claims.",
      "Indian linen: increasingly competitive on quality, particularly for linen blends (cotton/linen, viscose/linen). Strong certification infrastructure (GOTS, OCS, BCI) for brands with sustainability requirements. Mill-direct pricing without European price premiums.",
      "At Janki Nath & Co., we manufacture 100% [linen and linen blends](/fabrics) from our weaving units in India. GOTS and OCS certified. Development from small quantities. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'what-is-bci-cotton-guide-textile-buyers',
    title: 'What is BCI Cotton? A Guide for Textile Buyers',
    metaDescription:
      'What Better Cotton Initiative membership means for fabric buyers — sourcing standards, traceability, and how to verify BCI claims.',
    excerpt:
      'BCI is the largest cotton sustainability programme — but it works differently from GOTS. Here’s what that means for your claims.',
    date: '2026-02-05',
    dateDisplay: 'February 5, 2026',
    author: 'Manan Bhasin',
    content: [
      "BCI (Better Cotton Initiative) is the world's largest cotton sustainability programme, covering over 2.5 million farmers across 23 countries. BCI cotton is not certified organic — it is cotton grown according to Better Cotton standards, which focus on reduced water use, reduced pesticide use, improved soil health, and fair labour conditions.",
      "The key distinction for buyers: BCI uses a mass balance system, meaning you buy the equivalent volume of Better Cotton grown somewhere in the supply chain — not necessarily the specific bales traced to a farm. This is different from GOTS or OCS, which require full chain-of-custody tracing.",
      "For brands with broad sustainability commitments, BCI is a credible baseline. For brands making specific organic or traceability claims, GOTS or OCS is more appropriate. BCI membership is verified through the Better Cotton Platform — your supplier should be able to provide their BCI membership number and annual claim volume.",
      "At Janki Nath & Co., we are active BCI members alongside our GOTS, OCS and OEKO-TEX certifications across our [woven fabric range](/fabrics). [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'upholstery-home-furnishing-fabric-sourcing-india',
    title: 'Upholstery and Home Furnishing Fabric: Sourcing from India',
    metaDescription:
      'Guide to sourcing upholstery and home furnishing fabric from India — constructions, durability standards, certifications and suppliers.',
    excerpt:
      'Martindale ratings, jacquard vs dobby, and the Indian hubs supplying furnishing fabric to global buyers.',
    date: '2026-02-11',
    dateDisplay: 'February 11, 2026',
    author: 'Manan Bhasin',
    content: [
      "Home furnishing fabric operates to different standards than garment fabric. The key performance measures are: Martindale rub test (abrasion resistance — residential minimum 15,000 rubs, contract minimum 30,000 rubs), pilling resistance, colourfastness to light and cleaning, and dimensional stability after washing.",
      "Constructions used in upholstery: woven jacquard (for patterned upholstery), plain weave and twill (for solid and textured upholstery), dobby (for subtle geometric patterns), and yarn-dyed fabrics (for stripes and checks).",
      "India has a strong manufacturing base for home furnishing fabrics, particularly for cotton, cotton-linen, jacquard and dobby constructions. Key sourcing hubs are Panipat (Haryana) for blankets and flat weaves, and Bhiwandi/Surat for furnishing fabrics.",
      "At Janki Nath & Co., we manufacture [upholstery and home furnishing fabrics](/fabrics) across cotton, linen, jacquard and dobby constructions — available in widths suitable for furniture and drapery applications. BCI, GOTS and OEKO-TEX certified. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'yarn-dyed-vs-piece-dyed-fabric-guide',
    title: 'Yarn-Dyed vs Piece-Dyed Fabric: What Buyers Need to Know',
    metaDescription:
      'The real difference between yarn-dyed and piece-dyed fabric — colour consistency, applications, and which is right for your product.',
    excerpt:
      'When yarn-dyed is worth the premium — and when piece-dyed is the right call for volume and speed.',
    date: '2026-02-17',
    dateDisplay: 'February 17, 2026',
    author: 'Manan Bhasin',
    content: [
      "The difference between yarn-dyed and piece-dyed fabric is when colour is applied in the production process, and it affects everything from colour consistency to design possibilities.",
      "Piece-dyed fabric: the fabric is woven first from undyed yarn, then the finished cloth is dyed. This produces solid-colour fabric efficiently. The limitation is dye lot variation — colour can shift slightly between production runs, making exact colour matching across seasons difficult.",
      "Yarn-dyed fabric: individual yarns are dyed before weaving. This enables stripes, checks, plaids and multicolour designs that are woven in rather than printed. Because the colour is in the fibre before weaving, yarn-dyed fabric has deeper colour penetration and better colourfastness than piece-dyed alternatives.",
      "For brands: if you have a signature stripe, recurring check, or colour-blocked design that needs to be consistent season after season — yarn-dyed is the only reliable way to achieve this. If you need solid colours at volume — piece-dyed is faster and more cost-efficient.",
      "At Janki Nath & Co., we manufacture [yarn-dyed fabrics](/fabrics) in cotton, linen and viscose — custom colour combinations, development quantities and bulk. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'how-to-source-fabric-directly-indian-mill',
    title: 'How to Source Fabric Directly from an Indian Mill',
    metaDescription:
      'Step-by-step guide to sourcing woven fabric directly from Indian mills — sampling process, certifications, pricing and what to expect.',
    excerpt:
      'From first inquiry to shipment — the five steps of a mill-direct fabric sourcing process, done properly.',
    date: '2026-02-23',
    dateDisplay: 'February 23, 2026',
    author: 'Manan Bhasin',
    content: [
      "Sourcing fabric directly from an Indian mill rather than through an agent or trading house gives brands mill-direct pricing, direct access to the production team for development, faster problem resolution, and transparent supply chain documentation for certification purposes.",
      "The typical process: Step 1 — Initial inquiry. Send your fabric brief: construction type (woven, what weave structure), fibre content, approximate weight, finish required, and target end use. A good mill should respond with relevant options from their range and indicate development feasibility.",
      "Step 2 — Sample development. Request strike-off samples (small lab dip samples) for colour approval, then lab samples (1-3 metres of the actual construction) for hand feel and quality approval.",
      "Step 3 — Pricing and terms. Mill-direct pricing is quoted FOB (Free on Board) from the nearest port. Request pricing at your development quantity and your anticipated bulk quantity — there is typically a volume break.",
      "Step 4 — Production and quality control. Establish inspection milestones — mid-production and pre-shipment inspection are standard for first orders.",
      "Step 5 — Documentation. For certified fabric, request the relevant certificates (GOTS, OCS, BCI, OEKO-TEX) with the production batch reference.",
      "At Janki Nath & Co., we supply [woven fabrics](/fabrics) mill-direct to brands and manufacturers across 20+ countries. [Contact us](/contact): jcofabrics@yahoo.co.in | www.jcofabrics.com",
    ],
  },
  {
    slug: 'dobby-fabric-uses-construction-sourcing-guide',
    title: 'Dobby Fabric: Uses, Construction and Sourcing Guide',
    metaDescription:
      'What dobby fabric is, how it is made, where it is used in fashion and home furnishing, and how to source it from India.',
    excerpt:
      'The subtle geometric weave that elevates plain shirting — and how to spec dobby for your next collection.',
    date: '2026-03-01',
    dateDisplay: 'March 1, 2026',
    author: 'Manan Bhasin',
    content: [
      "Dobby fabric is woven using a dobby attachment on the loom — a mechanism that allows individual groups of warp yarns to be controlled independently, creating small geometric patterns within the weave structure. The pattern is structural (woven in) rather than printed or embroidered.",
      "Common dobby constructions: geometric repeats (diamonds, squares, small florals), textured surface effects (birds eye, honeycomb, waffle), and self-stripe effects. Dobby is used in formal shirting (where a subtle texture elevates a plain white or blue shirt), premium casualwear, suiting, and home furnishing. The fabric reads as elevated without being obviously patterned — buyers describe it as fabric that looks better up close.",
      "Construction considerations: thread count, yarn count, pattern repeat size, and whether the pattern is woven from the same yarn as the base (self-dobby) or with contrast yarn (colour dobby).",
      "At Janki Nath & Co., we manufacture [dobby fabrics](/fabrics) in cotton and cotton blends — self-dobby and yarn-dyed dobby constructions. Development and bulk available. [Contact us](/contact): jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'sustainable-fabric-sourcing-india-certifications',
    title: 'Sustainable Fabric Sourcing from India: Certifications and What They Mean',
    metaDescription:
      'Complete guide to sustainable fabric certifications for buyers — GOTS, BCI, OCS, OEKO-TEX explained with India sourcing context.',
    excerpt:
      'GOTS, OCS, BCI and OEKO-TEX — what each one actually covers, and which claim fits which product.',
    date: '2026-03-07',
    dateDisplay: 'March 7, 2026',
    author: 'Manan Bhasin',
    content: [
      "Sustainable fabric sourcing has moved from a niche requirement to a mainstream expectation. Understanding what each certification actually covers — and what it does not — is essential for making credible claims.",
      "GOTS (Global Organic Textile Standard): Covers the full supply chain from organic fibre to finished fabric. Requires organic raw material, restricted chemical processing, wastewater treatment, and fair labour. The most comprehensive textile certification available.",
      "OCS (Organic Content Standard): Verifies that a product contains a specified percentage of organic material. Covers chain of custody only — not processing standards. Less rigorous than GOTS but appropriate for blended fabrics where full GOTS is not feasible.",
      "BCI (Better Cotton Initiative): Covers responsible cotton farming — reduced water, reduced pesticides, fair labour at farm level. Uses mass balance (not physical tracing). Appropriate as a baseline commitment, not for specific organic or traceability claims.",
      "OEKO-TEX Standard 100: Tests the finished product for harmful substances — over 100 chemicals checked. Does not cover supply chain or farming practices. Appropriate for any fabric regardless of fibre source.",
      "For brands: GOTS is the strongest claim. OCS is appropriate for blends. BCI demonstrates responsible sourcing commitment. OEKO-TEX demonstrates product safety.",
      "At Janki Nath & Co., we hold BCI, GOTS, OCS and OEKO-TEX Standard 100 certifications across our [manufacturing operations](/fabrics). [Contact us](/contact): jcofabrics@yahoo.co.in | www.jcofabrics.com",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
