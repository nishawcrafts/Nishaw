import type { Metadata }         from "next";
import { notFound }                from "next/navigation";
import Link                        from "next/link";
import { compileMDX }              from "next-mdx-remote/rsc";
import type { MDXComponents }      from "mdx/types";
import { getPostRaw, getJournalSlugs, formatDate } from "@/lib/journal";
import { collections }             from "@/content/collections";
import { ScrollReveal }            from "@/components/ui/ScrollReveal";
import { Eyebrow }                 from "@/components/ui/Eyebrow";
import { Divider }                 from "@/components/ui/Divider";
import { Button }                  from "@/components/ui/Button";

/* ── generateStaticParams ─────────────────────────────────────────────── */
export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostRaw(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title:       post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type:        "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

/* ── Custom MDX components (Nishaw design system) ─────────────────────── */
const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily:   "var(--font-heading)",
        fontSize:     "var(--text-h3)",
        fontWeight:   400,
        letterSpacing:"-0.02em",
        lineHeight:   1.25,
        color:        "var(--color-ink)",
        marginTop:    48,
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily:  "var(--font-heading)",
        fontStyle:   "italic",
        fontWeight:  300,
        fontSize:    "var(--text-h4)",
        color:       "var(--color-ink)",
        marginTop:   32,
        marginBottom:10,
        lineHeight:  1.3,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontFamily:  "var(--font-body)",
        fontSize:    "var(--text-body-lg)",
        color:       "var(--color-ink-soft)",
        lineHeight:  1.78,
        marginBottom:24,
      }}
    >
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        listStyle:   "none",
        paddingLeft: 0,
        marginBottom:24,
        display:     "flex",
        flexDirection:"column",
        gap:         8,
      }}
    >
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li
      style={{
        fontFamily:  "var(--font-body)",
        fontSize:    "var(--text-body-lg)",
        color:       "var(--color-ink-soft)",
        lineHeight:  1.72,
        display:     "flex",
        alignItems:  "flex-start",
        gap:         10,
      }}
    >
      <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 7, fontSize: 9 }}>♦</span>
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 600, color: "var(--color-ink)" }}>{children}</strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: "italic", color: "var(--color-ink)" }}>{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft:  "3px solid var(--color-gold)",
        paddingLeft: 20,
        marginLeft:  0,
        marginRight: 0,
        marginBottom:24,
      }}
    >
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr
      style={{
        border:       "none",
        borderTop:    "1px solid var(--color-gold-soft)",
        margin:       "36px 0",
      }}
    />
  ),
};

/* ═══════════════════════════════════════════════════════════════════════ */
export default async function JournalSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostRaw(slug);
  if (!post) notFound();

  const { frontmatter, content: rawContent } = post;

  /* Compile MDX on the server */
  const { content } = await compileMDX({
    source:     rawContent,
    components: mdxComponents,
    options:    {
      mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
    },
  });

  /* Related collection */
  const relatedCollection = frontmatter.relatedCollection
    ? collections.find((c) => c.slug === frontmatter.relatedCollection)
    : null;

  /* JSON-LD */
  const articleLd = {
    "@context":     "https://schema.org",
    "@type":        "Article",
    headline:       frontmatter.title,
    description:    frontmatter.excerpt,
    datePublished:  frontmatter.date,
    dateModified:   frontmatter.date,
    author:         { "@type": "Organization", name: "Nishaw", url: "https://nishaw.com" },
    publisher:      { "@type": "Organization", name: "Nishaw", url: "https://nishaw.com" },
    url:            `https://nishaw.com/journal/${slug}`,
    inLanguage:     "en-IN",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",              item: "https://nishaw.com" },
      { "@type": "ListItem", position: 2, name: "The Art of Giving", item: "https://nishaw.com/journal" },
      { "@type": "ListItem", position: 3, name: frontmatter.title,   item: `https://nishaw.com/journal/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── ARTICLE HEADER ── */}
      <div
        style={{
          background:    "var(--color-paper-deep)",
          borderBottom:  "1px solid var(--color-gold-soft)",
          paddingTop:    "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(56px, 8vw, 80px)",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <li><Link href="/" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>Home</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><Link href="/journal" className="link-draw" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>The Art of Giving</Link></li>
              <li aria-hidden style={{ color: "var(--color-gold-soft)", fontSize: 12 }}>♦</li>
              <li><span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink)" }}>{frontmatter.category}</span></li>
            </ol>
          </nav>

          {/* Category + meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
            <Eyebrow style={{ color: "var(--color-gold)" }}>{frontmatter.category}</Eyebrow>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-gold-soft)", flexShrink: 0 }} aria-hidden />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
              {formatDate(frontmatter.date)}
            </span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-gold-soft)", flexShrink: 0 }} aria-hidden />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)" }}>
              {frontmatter.readTime}
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "var(--text-h1)",
              fontWeight:    400,
              letterSpacing: "-0.025em",
              lineHeight:    1.08,
              marginBottom:  24,
              maxWidth:      760,
            }}
          >
            {frontmatter.title}
          </h1>

          {/* Excerpt lead */}
          <p
            style={{
              fontFamily:  "var(--font-body)",
              fontSize:    "var(--text-body-lg)",
              color:       "var(--color-ink-soft)",
              lineHeight:  1.65,
              maxWidth:    580,
              fontStyle:   "italic",
            }}
          >
            {frontmatter.excerpt}
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <section
        style={{
          background:  "var(--color-paper)",
          paddingTop:  "clamp(48px, 7vw, 80px)",
          paddingBottom:"clamp(48px, 7vw, 80px)",
        }}
      >
        <div className="container">
          <div
            style={{
              display:             "grid",
              gridTemplateColumns: "minmax(0, 720px) 1fr",
              gap:                 "clamp(40px, 5vw, 64px)",
              alignItems:          "start",
            }}
          >
            {/* Main content */}
            <article>{content}</article>

            {/* Sticky sidebar */}
            <aside style={{ position: "sticky", top: 96 }}>
              {/* Related collection card */}
              {relatedCollection && (
                <ScrollReveal>
                  <div
                    style={{
                      border:       "1px solid var(--color-gold-soft)",
                      borderRadius: "var(--radius-card)",
                      padding:      "24px",
                      background:   "var(--color-paper-deep)",
                      marginBottom: 20,
                    }}
                  >
                    <Eyebrow style={{ marginBottom: 12 }}>For your next gift</Eyebrow>
                    <h3
                      style={{
                        fontFamily:  "var(--font-heading)",
                        fontSize:    "var(--text-h4)",
                        lineHeight:  1.2,
                        marginBottom:10,
                      }}
                    >
                      {relatedCollection.displayName}
                    </h3>
                    <p
                      style={{
                        fontFamily:  "var(--font-body)",
                        fontSize:    "var(--text-body-sm)",
                        color:       "var(--color-ink-soft)",
                        lineHeight:  1.65,
                        marginBottom:16,
                      }}
                    >
                      {relatedCollection.promiseLine}
                    </p>
                    <Link
                      href={`/collections/${relatedCollection.slug}`}
                      className="btn btn-gold"
                      style={{ display: "block", textAlign: "center", width: "100%" }}
                    >
                      Explore this collection
                    </Link>
                  </div>
                </ScrollReveal>
              )}

              {/* "Start a Conversation" card */}
              <ScrollReveal delay={80}>
                <div
                  style={{
                    border:       "1px dashed var(--color-gold-soft)",
                    borderRadius: "var(--radius-card)",
                    padding:      "24px",
                    background:   "var(--color-paper-deep)",
                  }}
                >
                  <span
                    className="script"
                    style={{ display: "block", fontSize: "1.75rem", color: "var(--color-gold)", marginBottom: 8, lineHeight: 1 }}
                  >
                    Say more than thank you.
                  </span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--color-ink-soft)", lineHeight: 1.65, marginBottom: 16 }}>
                    Ready to put this into practice? Start a conversation and we will take it from there.
                  </p>
                  <Link href="/contact" className="btn btn-gold" style={{ display: "block", textAlign: "center", width: "100%" }}>
                    Start a Conversation
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <div className="container"><Divider variant="diamond" /></div>

      {/* ── BACK TO JOURNAL ── */}
      <section className="section-py" style={{ background: "var(--color-paper-deep)" }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div>
                <Eyebrow style={{ marginBottom: 10 }}>The Art of Giving</Eyebrow>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--color-ink-soft)" }}>
                  More guides and ideas from the Nishaw journal.
                </p>
              </div>
              <Button href="/journal" variant="ghost">Browse all articles</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
