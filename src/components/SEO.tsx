import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://jcofabrics.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Per-page SEO. Sets <title>, meta description, canonical, OpenGraph,
 * Twitter cards, and optional JSON-LD structured data so search engines
 * and social crawlers can index every route correctly.
 */
const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
  jsonLd,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title.length > 60 ? title.slice(0, 57) + '…' : title;
  const desc =
    description.length > 160 ? description.slice(0, 157) + '…' : description;

  const structured = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="JNC Fabrics" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      {structured.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
