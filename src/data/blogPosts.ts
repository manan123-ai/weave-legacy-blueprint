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
      "Related reading: [Export documentation from India](/export) | [About Janki Nath & Co.](/about)",
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
      "GOTS (Global Organic Textile Standard) is the world's leading textile processing standard for organic fibres. Unlike certifications that only cover the raw fibre, GOTS covers the entire supply chain — from raw fibre through spinning, weaving, dyeing, finishing and labelling. For a fashion brand building a genuinely certified organic supply chain, every stage has to be GOTS certified independently, including your fabric supplier — a brand can't inherit certification from an organic farm alone if the mill weaving and finishing the fabric isn't itself certified.",
      "## What GOTS Actually Requires",
      "GOTS sets requirements at every stage, not just at the farm:",
      "Organic fibre at source: the raw cotton, linen or other natural fibre must be certified to GOTS or an equivalent recognised organic standard before processing begins.",
      "Restricted chemical inputs throughout processing: GOTS maintains a positive list of approved dyes, auxiliaries and accessories, and prohibits a long list of substances (including azo dyes releasing carcinogenic amines, formaldehyde, and heavy metals) at every stage from spinning through to the finished, labelled garment.",
      "Wastewater treatment: processing facilities — dyeing and finishing units in particular — must operate functioning wastewater treatment before discharge, and this is checked during audit.",
      "Social criteria: GOTS incorporates International Labour Organization (ILO) core conventions — fair wages, no child or forced labour, safe working conditions, freedom of association — audited alongside the technical/chemical requirements, not as a separate add-on scheme.",
      "Annual third-party auditing: every facility in the certified chain — from ginning through to the final make-up unit — is independently audited annually, not self-declared.",
      "## GOTS vs. BCI vs. OCS — Which Claim Applies",
      "These three certifications are frequently confused because they all relate to cotton sustainability, but they answer different questions. GOTS certifies organic fibre plus the entire processing chain plus social criteria — it's the most comprehensive of the three, and the only one of the three that regulates dyeing/finishing chemistry and requires full chain-of-custody documentation. OCS (Organic Content Standard) verifies the organic content of a product through chain of custody, but without GOTS's processing and social requirements — it answers \"how much organic fibre is really in this,\" not \"was it processed responsibly.\" BCI (Better Cotton Initiative) operates on a mass-balance model at the farming level and isn't an organic standard at all — see our [BCI guide](/blog/what-is-bci-cotton-guide-textile-buyers) for the full distinction. A supplier genuinely committed to sustainability across a range typically holds more than one of these, applied to different parts of the product range depending on what claim each garment needs to support.",
      "## How to Verify a Supplier's GOTS Certificate",
      "Never take a GOTS claim on trust from a price list or a hangtag description alone. Request your supplier's GOTS certificate number and verify it directly on the public GOTS database at global-standard.org — this is free and takes under a minute. A genuine, current certificate will show the company's legal name, the certificate number, the specific scope of certification (which product categories and processing stages are covered), and the validity date. If a supplier's certificate has lapsed, or the scope doesn't cover the specific product category you're ordering, the claim doesn't apply to your order even if the company holds a GOTS certificate for a different part of its business.",
      "## GOTS Certified Fabric Manufacturers in India",
      "Janki Nath & Co. is one of the GOTS certified fabric manufacturers in India, holding current GOTS certification alongside BCI, OCS and OEKO-TEX Standard 100. Our certified [fabrics](/fabrics) cover cotton, linen and blended constructions, manufactured across our own weaving units in Meerut, Bhiwandi, Ichalkaranji, Erode, Salem and Surat — mill-direct, not through a trading intermediary. Full certification documentation, including our current GOTS scope and certificate number, is provided as standard with every export order.",
      "Related reading: [Our certifications](/certifications) | [Cotton fabric range](/fabrics/cotton) | [BCI cotton guide](/blog/what-is-bci-cotton-guide-textile-buyers)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we weave [jacquard fabrics](/fabrics) in cotton, viscose, linen and blended compositions. Custom patterns developed from your design brief. Development quantities and bulk both available.",
      "Related reading: [Jacquard fabric range](/fabrics/jacquard) | [Sampling process](/sampling)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we manufacture 100% [linen and linen blends](/fabrics) from our weaving units in India. GOTS and OCS certified. Development from small quantities.",
      "Related reading: [Linen fabric range](/fabrics/linen) | [Our certifications](/certifications)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "BCI stands for Better Cotton Initiative. It is the world's largest cotton sustainability programme, covering over 2.5 million farmers across 23 countries and roughly a fifth of global cotton production. For a fabric buyer sourcing from India, BCI is the certification you'll see most often on supplier documentation — but it's also the most misunderstood, because it works differently from the organic and full-traceability standards buyers usually assume it means.",
      "## What Is BCI Cotton, Exactly?",
      "BCI cotton is not certified organic. It is cotton grown by farmers trained and audited against Better Cotton's field-level standards, which focus on reduced water use, reduced and safer pesticide use, improved soil health, biodiversity, decent work, and fair labour conditions. Better Cotton doesn't certify a finished product as \"BCI cotton\" the way GOTS certifies a garment — it certifies the farming practice and licenses the use of the Better Cotton claim across a mass-balance supply chain.",
      "That distinction matters for how buyers should read the claim. \"Better Cotton\" describes how the raw fibre was grown; it says nothing about the dyeing, finishing, or chemical inputs used later in the supply chain, which is where GOTS and OEKO-TEX certifications come in instead.",
      "## Mass Balance vs. Chain of Custody",
      "The single most important thing for a buyer to understand: BCI uses a mass balance system, not physical traceability. When a mill or brand buys a volume of Better Cotton, they are buying the right to make that claim against an equivalent volume of cotton grown by licensed Better Cotton farmers somewhere in the sourcing region — not necessarily the specific bales that end up in your fabric. The cotton fibres in a given shipment of finished fabric are not individually traced back to a single certified farm.",
      "This is a deliberate design choice by Better Cotton, intended to make the standard scalable across millions of smallholder farmers who couldn't otherwise afford segregated, fully-traced supply chains. It's a real, verifiable sustainability improvement at the farm level — but it is structurally different from GOTS or OCS (Organic Content Standard), which both require full chain-of-custody documentation from farm to finished product, with each transaction certified and each certificate traceable.",
      "## When BCI Is the Right Claim — and When It Isn't",
      "For brands with broad, portfolio-level sustainability commitments (\"X% of our cotton is more sustainably sourced\"), BCI is a credible, internationally recognised baseline, and it's usually the easiest and most cost-effective certification for a mill to maintain across large cotton volumes.",
      "For brands making a specific claim on a garment hangtag — \"organic cotton,\" \"this exact fabric is traceable to this farm\" — BCI is the wrong certification to cite. That claim needs GOTS (for organic fibre with full chain of custody) or OCS (organic content verification without the processing-standard requirements GOTS adds). Using a BCI claim on a garment as if it were an organic claim is a common labelling mistake that can create compliance risk in markets with strict green-claims regulation, including the EU.",
      "## How to Verify a Supplier's BCI Claim",
      "BCI membership and volume claims are tracked through the Better Cotton Platform. A legitimate supplier should be able to provide their Better Cotton membership number and their annual claim volume on request — if a supplier can't produce this when asked, that's a reason to ask more questions before accepting the claim on your documentation.",
      "## Where This Fits at Janki Nath & Co.",
      "We are active BCI members alongside our GOTS, OCS and OEKO-TEX Standard 100 certifications across our [woven fabric range](/fabrics) — cotton, cotton blends, linen and specialty constructions manufactured across our weaving units in Meerut, Bhiwandi, Ichalkaranji, Erode, Salem and Surat. Certification documentation, including membership numbers, is provided as standard with every export order — see our [certifications page](/certifications) for the full list and what each one verifies.",
      "Related reading: [Cotton fabric range](/fabrics/cotton) | [Our certifications](/certifications) | [GOTS certified fabric guide](/blog/gots-certified-fabric-india-brand-guide)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we manufacture [upholstery and home furnishing fabrics](/fabrics) across cotton, linen, jacquard and dobby constructions — available in widths suitable for furniture and drapery applications. BCI, GOTS and OEKO-TEX certified.",
      "Related reading: [Upholstery fabric range](/fabrics/upholstery) | [Export from India](/export)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we manufacture [yarn-dyed fabrics](/fabrics) in cotton, linen and viscose — custom colour combinations, development quantities and bulk.",
      "Related reading: [Yarn dyed fabric range](/fabrics/yarn-dyed) | [Sampling process](/sampling)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we supply [woven fabrics](/fabrics) mill-direct to brands and manufacturers across 20+ countries.",
      "Related reading: [Sampling process](/sampling) | [Export from India](/export)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in | www.jcofabrics.com",
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
      "Dobby fabric is woven using a dobby attachment fitted to the loom — a mechanism that allows individual groups of warp yarns to be controlled independently, rather than moving as a single sheet the way plain weave does. That independent control is what creates small geometric patterns directly within the weave structure. The pattern is structural — woven in, not printed or embroidered afterward — which is the whole reason dobby fabric behaves and ages differently from a printed equivalent: the design can't crack, peel, or fade out of registration, because it's built into the cloth itself rather than sitting on top of it.",
      "## What Is Dobby Fabric Used For?",
      "Formal shirting is the single biggest application — a subtle woven texture elevates a plain white or blue shirt from basic to premium without the fabric reading as \"patterned\" from a distance. Beyond shirting, dobby shows up in premium casualwear, suiting and tailored trousers, and home furnishing (cushion covers, table linen, light upholstery). The common thread across all of these applications is the same: dobby reads as elevated without being obviously patterned. Buyers in the trade often describe it as fabric that \"looks better up close\" — the texture only becomes apparent on inspection, which is exactly the quality signal a premium shirting brand wants without shouting about it.",
      "## Common Dobby Constructions",
      "Geometric repeats — diamonds, squares, small florals — are the most familiar dobby pattern family, sized small enough to read as texture rather than print at a normal viewing distance.",
      "Textured surface effects — birds eye, honeycomb, and waffle constructions — use the dobby mechanism to create a raised or dimpled surface rather than a flat repeating shape, often used where a slightly grippier or more absorbent hand-feel is wanted alongside the visual interest.",
      "Self-stripe effects use the dobby attachment to weave a subtle stripe from the same base yarn colour, giving tonal texture without introducing a second colour into the fabric at all.",
      "## Self-Dobby vs. Colour Dobby",
      "The construction splits into two main types, and the distinction matters for both cost and how the finished fabric reads. Self-dobby uses the same yarn colour for the pattern as for the background — the design is visible only through the weave structure catching light differently, not through colour contrast, which is exactly why it's the standard choice for premium formal shirting where subtlety is the point. Colour dobby uses a contrasting yarn colour for the pattern, making the design immediately visible as a two-colour or multi-colour effect rather than a tonal texture — a more decorative, more visually assertive version of the same weaving technique.",
      "## Construction Considerations When Sourcing",
      "A few technical variables determine what a mill can actually produce and at what cost: thread count and yarn count set the fineness and hand-feel of the base cloth; pattern repeat size affects both the visual scale of the design and the complexity of the loom setup; and the choice between self-dobby and colour dobby affects yarn requirements and, in turn, cost. When briefing a mill, specifying these upfront — along with end use — gets a faster, more accurate development quote than a general \"dobby fabric\" request.",
      "## Sourcing Dobby Fabric from India",
      "At Janki Nath & Co., we manufacture [dobby fabrics](/fabrics) in cotton and cotton blends — self-dobby and yarn-dyed dobby constructions — from our own weaving units, with both development quantities and bulk production available from the same facilities. As with our full range, dobby fabric is available with BCI-certified cotton on request, alongside our OEKO-TEX Standard 100 certification.",
      "Related reading: [Dobby fabric range](/fabrics/dobby) | [Cotton fabric range](/fabrics/cotton) | [Yarn-dyed vs. piece-dyed fabric guide](/blog/yarn-dyed-vs-piece-dyed-fabric-guide)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in",
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
      "At Janki Nath & Co., we hold BCI, GOTS, OCS and OEKO-TEX Standard 100 certifications across our [manufacturing operations](/fabrics).",
      "Related reading: [Our certifications](/certifications) | [Linen fabric range](/fabrics/linen)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in | www.jcofabrics.com",
    ],
  },
  {
    slug: 'minimum-order-quantity-fabric-india',
    title: 'Minimum Order Quantity for Fabric from India — What Buyers Need to Know',
    metaDescription:
      'Guide to MOQ for woven fabric from Indian manufacturers — development quantities, sampling, bulk production minimums explained.',
    excerpt:
      'MOQ depends on construction, not an arbitrary number. Here is how Indian mills actually price development vs bulk.',
    date: '2026-03-14',
    dateDisplay: 'March 14, 2026',
    author: 'Manan Bhasin',
    content: [
      "One of the most common questions fabric buyers ask Indian manufacturers is about minimum order quantity. The honest answer is: it depends on the construction, not on an arbitrary number.",
      "For fabrics already in a manufacturer's running range — constructions they weave regularly — MOQ is typically lower because no new setup is required. For custom development — a new construction, specific blend, or particular finish not in the existing range — MOQ applies from the development stage, not the bulk stage.",
      "At Janki Nath & Co., we work on both development quantities and bulk production. We do not require buyers to commit to bulk before sampling. The typical process is: sample development first, bulk approval after. This protects buyers from committing to large quantities before the fabric quality is confirmed.",
      "Key factors that affect MOQ at any Indian mill: whether the construction is in the running range, the yarn count and composition (specialty yarns have minimum purchase quantities from the spinning mill), the width required (standard widths have lower minimums than custom widths), and the finish required (dyed and printed fabrics have minimum batch sizes for dyeing).",
      "For buyers evaluating Indian fabric suppliers: always ask for development quantity pricing separately from bulk pricing. A manufacturer willing to work on development quantities is a genuine manufacturing partner. One that demands large minimum orders before sampling may not have the development capability they claim.",
      "Related reading: [Sampling process](/sampling) | [How to source from an Indian mill](/blog/how-to-source-fabric-directly-indian-mill)",
      "[Contact us](/contact) to discuss your specific requirement: jcofabrics@yahoo.co.in | WhatsApp: +91 9891542727",
    ],
  },
  {
    slug: 'how-to-request-fabric-samples-india',
    title: 'How to Request Fabric Samples from an Indian Manufacturer',
    metaDescription:
      'Step by step guide to requesting fabric samples from Indian mills — what information to provide, what to expect, lead times and costs.',
    excerpt:
      'A precise sample brief gets you a precise sample. Here is exactly what to include in your first request.',
    date: '2026-03-21',
    dateDisplay: 'March 21, 2026',
    author: 'Manan Bhasin',
    content: [
      "Requesting fabric samples from an Indian manufacturer is straightforward if you know what information to provide upfront. The more specific your brief, the faster and more accurate the sample development.",
      "What to include in your sample request:",
      "Fabric type — be specific. Not just \"cotton\" but \"cotton plain weave, medium weight, for summer casualwear.\" The end use tells the manufacturer which constructions are appropriate.",
      "Composition — percentage breakdown if you have a preference. 100% cotton, cotton/linen blend, cotton/viscose — each behaves differently and is priced differently.",
      "Finish — how do you want the fabric? Greige (undyed), RFD (ready for dyeing), piece-dyed solid colour, yarn-dyed pattern, or printed? If colour, provide Pantone references.",
      "Width — standard fabric widths are 44/45 inches and 58/60 inches. Let the manufacturer know your preference or your cutting requirement.",
      "Quantity — for initial samples, 3-5 metres is standard for evaluation. Mention if you need more for internal approval processes.",
      "Certifications — if GOTS, BCI or OEKO-TEX is required, state this upfront. Not all constructions are available in certified versions and it affects pricing.",
      "What to expect: for constructions in the manufacturer's running range — lab dip (colour sample) in 5-7 days, fabric sample in 10-15 days. For custom development — discuss timeline at inquiry stage, typically 2-4 weeks for first sample depending on complexity.",
      "Sample charges: most Indian manufacturers charge for sample development, particularly for custom constructions. Charges are typically adjustable against bulk order. Ask upfront — a transparent manufacturer will tell you clearly.",
      "Related reading: [Sampling process](/sampling) | [Minimum order quantity guide](/blog/minimum-order-quantity-fabric-india)",
      "[Contact us](/contact) with your fabric brief: jcofabrics@yahoo.co.in | WhatsApp: +91 9891542727",
    ],
  },
  {
    slug: 'fabric-export-documentation-india',
    title: 'Fabric Export Documentation from India — Complete Guide for Buyers',
    metaDescription:
      'Complete guide to fabric export documentation from India — commercial invoice, certificate of origin, GOTS certificates, GST invoice, packing list explained.',
    excerpt:
      'Every document that ships with a fabric consignment from India — and why each one matters at your border.',
    date: '2026-03-28',
    dateDisplay: 'March 28, 2026',
    author: 'Manan Bhasin',
    content: [
      "When sourcing fabric from India, understanding the export documentation ensures smooth customs clearance and compliance in your destination country.",
      "Standard export documents from every Indian fabric shipment:",
      "Commercial Invoice — lists the buyer, seller, fabric description, quantity, unit price, total value, and payment terms. Required for customs clearance in all countries.",
      "Packing List — detailed breakdown of what is in each package: fabric rolls, metres per roll, gross weight, net weight, dimensions. Required for customs and logistics.",
      "Bill of Lading (sea freight) or Airway Bill (air freight) — issued by the shipping carrier confirming goods are in transit.",
      "Certificate of Origin — confirms the fabric was manufactured in India. Required for preferential duty rates under trade agreements (GSP, India-UAE CEPA etc.). Issued by Export Promotion Councils or Chambers of Commerce.",
      "GST Invoice — Indian tax invoice required for export from India.",
      "Certification documents (where applicable): GOTS Transaction Certificate — issued per shipment confirming the specific fabric lot is GOTS certified. OCS Transaction Certificate — same for OCS certified fabric. BCI Claim Documents — for BCI certified cotton fabric. OEKO-TEX Certificate — scope certificate confirming the fabric type is certified.",
      "Pre-shipment inspection reports: available on request from third-party inspection companies (SGS, Intertek, Bureau Veritas). Recommended for first orders and large bulk orders.",
      "At Janki Nath & Co., all export documentation is prepared and provided with every shipment. Certification documentation is available on request for every order.",
      "Related reading: [Export from India](/export) | [Our certifications](/certifications)",
      "[Contact us](/contact): jcofabrics@yahoo.co.in | WhatsApp: +91 9891542727",
    ],
  },
  {
    slug: 'cotton-fabric-gsm-guide',
    title: 'Cotton Fabric Weight Guide — GSM Explained for Fashion Buyers',
    metaDescription:
      'Guide to cotton fabric weight and GSM for fashion buyers — lightweight to heavy weight cotton explained with applications for each weight range.',
    excerpt:
      'From voile to denim — how GSM translates to hand feel, drape and end use across the cotton weight range.',
    date: '2026-04-04',
    dateDisplay: 'April 4, 2026',
    author: 'Manan Bhasin',
    content: [
      "GSM stands for grams per square metre — the standard measure of fabric weight used by manufacturers and buyers worldwide. Understanding GSM helps you specify the right fabric weight for your end product and evaluate samples accurately.",
      "Cotton fabric weight ranges and applications:",
      "Lightweight cotton (60-120 GSM) — voile, muslin, lawn, batiste. Used for summer blouses, lingerie, linings, scarves. Sheer to semi-sheer. Soft drape, breathable.",
      "Light-medium weight cotton (120-160 GSM) — fine shirting, poplin, fine lawn. Used for formal shirts, blouses, summer dresses. Opaque, crisp hand feel.",
      "Medium weight cotton (160-200 GSM) — standard shirting, chambray, fine canvas. Used for casual shirts, light trousers, dresses. Versatile weight for most apparel.",
      "Medium-heavy weight cotton (200-260 GSM) — denim shirting, heavier canvas, twill. Used for casual trousers, workwear shirts, light jackets.",
      "Heavy weight cotton (260-400 GSM) — denim, heavy canvas, duck cloth. Used for jeans, heavy workwear, bags, upholstery.",
      "How GSM affects your product: higher GSM = heavier, more structured, less drape, warmer, more durable. Lower GSM = lighter, more fluid drape, cooler, more delicate.",
      "What GSM doesn't tell you: GSM alone doesn't define quality. A 160 GSM cotton can be fine combed yarn or coarse carded yarn — completely different hand feel and durability at the same weight. Always evaluate hand feel alongside GSM.",
      "At Janki Nath & Co., we manufacture cotton fabrics across the full weight range.",
      "Related reading: [Cotton fabric range](/fabrics/cotton) | [Sampling process](/sampling)",
      "[Contact us](/contact) with your weight requirement and end use for recommendations: jcofabrics@yahoo.co.in",
    ],
  },
  {
    slug: 'india-vs-china-fabric-sourcing',
    title: 'India vs China for Fabric Sourcing — Honest Comparison for Buyers',
    metaDescription:
      'Honest comparison of India vs China for woven fabric sourcing — quality, pricing, certifications, lead times, MOQ and sustainability credentials compared.',
    excerpt:
      'Both are legitimate sourcing options. Here is where each country actually leads — and where the other wins.',
    date: '2026-04-11',
    dateDisplay: 'April 11, 2026',
    author: 'Manan Bhasin',
    content: [
      "India and China are the two largest woven fabric producing countries in the world. Both are legitimate sourcing options — the right choice depends on your specific requirements.",
      "Pricing: China generally offers lower prices on commodity fabrics due to scale and infrastructure investment. India is competitive on specialty constructions, certified fabrics and fabrics where hand skills matter (handloom, traditional techniques). For GOTS and organic certified fabrics specifically, Indian pricing is often more competitive than Chinese equivalents.",
      "Certifications: India has a stronger infrastructure for international textile certifications — GOTS, OCS, BCI, OEKO-TEX are well established across Indian mills. For brands with certification requirements, India is generally easier to work with on documentation and compliance.",
      "Quality: both countries produce across a wide quality range. Quality is determined by the specific mill, not the country. Evaluate mills individually rather than by country of origin.",
      "Lead times: similar for standard constructions — typically 30-45 days for bulk production. Custom development lead times are comparable.",
      "Minimum order quantities: similar across both countries for comparable quality levels.",
      "Sustainability positioning: India has stronger brand perception for sustainable and ethical sourcing, particularly in European markets. Made in India positioning carries positive connotations for sustainability-focused brands in a way that Made in China currently does not.",
      "When to source from India: certified fabric (GOTS, OCS, BCI), specialty constructions (handloom, jacquard, traditional techniques), sustainable brand positioning, European market positioning.",
      "When China may be more appropriate: very high volume commodity fabrics where price is the primary driver and certifications are not required.",
      "At Janki Nath & Co., we have been manufacturing and exporting woven fabrics since 1968.",
      "Related reading: [Our certifications](/certifications) | [Export from India](/export)",
      "[Contact us](/contact) to discuss your specific sourcing requirement: jcofabrics@yahoo.co.in | WhatsApp: +91 9891542727",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
