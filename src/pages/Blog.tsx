import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import KineticHeading from '@/components/motion/KineticHeading';
import Reveal from '@/components/motion/Reveal';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog & Resources | JNC Fabrics"
        description="JNC Fabrics blog — guides for international fabric buyers on sourcing woven fabric from India. GOTS certification, linen sourcing, jacquard fabric and more."
        path="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'JNC Fabrics Blog',
          url: 'https://jcofabrics.com/blog',
          publisher: {
            '@type': 'Organization',
            name: 'Janki Nath & Co.',
          },
          blogPost: blogPosts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            datePublished: p.date,
            url: `https://jcofabrics.com/blog/${p.slug}`,
          })),
        }}
      />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-32 bg-secondary relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Blog & Resources
              </p>
            </Reveal>
            <KineticHeading
              as="h1"
              text="Insights from the Mill"
              className="font-serif text-5xl md:text-7xl font-bold text-primary mb-8 leading-[1.05]"
            />
            <Reveal delay={0.3}>
              <p className="font-body text-xl text-muted-foreground font-light">
                Guides for fabric buyers — sourcing, certifications, constructions and best practice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Posts */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.05}>
                  <article className="group border-t border-border pt-8 h-full flex flex-col">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                      {post.dateDisplay}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4 leading-tight">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="transition-colors group-hover:text-muted-foreground"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="font-body text-base text-muted-foreground font-light leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="font-body text-sm uppercase tracking-[0.3em] text-primary border-b border-primary/40 self-start pb-1 hover:border-primary transition-colors"
                    >
                      Read more
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
