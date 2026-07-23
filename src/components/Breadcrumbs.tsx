import { Link } from 'react-router-dom';

export interface Crumb {
  name: string;
  path?: string; // omit for current page
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** Current page path, used as the self-referencing URL on the last crumb. */
  currentPath?: string;
}

const SITE = 'https://jcofabrics.com';

/**
 * Visible breadcrumb navigation with matching BreadcrumbList JSON-LD.
 * Sits below the fixed nav (h-16/20) and above the page hero.
 */
const Breadcrumbs = ({ items, currentPath }: BreadcrumbsProps) => {
  const trail: Crumb[] = [{ name: 'Home', path: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i, arr) => {
      const isLast = i === arr.length - 1;
      // Google prefers the final crumb to carry a self-referencing item URL
      // rather than omitting it.
      const item = c.path ? `${SITE}${c.path}` : isLast && currentPath ? `${SITE}${currentPath}` : undefined;
      return { '@type': 'ListItem', position: i + 1, name: c.name, item };
    }),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-20 pb-2 bg-background/60 backdrop-blur-sm border-b border-border/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {c.path && !last ? (
                  <Link to={c.path} className="hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                ) : (
                  <span className={last ? 'text-primary' : ''}>{c.name}</span>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
};

export default Breadcrumbs;
