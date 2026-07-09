import { Link, useParams, Navigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/motion/Reveal';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';

/**
 * Render a paragraph with markdown-style [text](url) links converted to
 * real <Link> elements for internal routes and <a> for external URLs.
 */
const renderParagraph = (text: string, key: number) => {
  const parts: Array<string | { text: string; href: string }> = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push({ text: m[1], href: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return (
    <p
      key={key}
      className="font-body text-lg text-muted-foreground leading-relaxed font-light mb-6"
    >
      {parts.map((p, i) => {
        if (typeof p === 'string') return <span key={i}>{p}</span>;
        if (p.href.startsWith('/')) {
          return (
            <Link
              key={i}
              to={p.href}
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              {p.text}
            </Link>
          );
        }
        return (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {p.text}
          </a>
        );
      })}
    </p>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://jcofabrics.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen">
      <SEO
        title={`${post.title} | JNC Fabrics`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Person', name: post.author },
          publisher: {
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
            logo: {
              '@type': 'ImageObject',
              url: 'https://jcofabrics.com/logo.png',
            },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          url,
        }}
      />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-32 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                to="/blog"
                className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6 inline-block hover:text-primary transition-colors"
              >
                ← Blog & Resources
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {post.dateDisplay} · {post.author}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <article className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {post.content.map((para, i) => renderParagraph(para, i))}

            <div className="mt-16 pt-10 border-t border-border">
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
                Continue reading
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/fabrics"
                  className="font-serif text-xl text-primary underline underline-offset-4 hover:no-underline"
                >
                  Explore our fabrics →
                </Link>
                <Link
                  to="/contact"
                  className="font-serif text-xl text-primary underline underline-offset-4 hover:no-underline"
                >
                  Contact the mill →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
