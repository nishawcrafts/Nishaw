import fs from "fs";
import path from "path";
import matter from "gray-matter";

const JOURNAL_DIR = path.join(process.cwd(), "src/content/journal");

export interface PostFrontmatter {
  title:                 string;
  date:                  string;
  excerpt:               string;
  readTime:              string;
  category:              string;
  relatedCollection?:    string;
  relatedCollectionLabel?: string;
}

export interface PostSummary extends PostFrontmatter {
  slug: string;
}

/** Return all posts sorted newest-first, for the index page. */
export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  const files = fs.readdirSync(JOURNAL_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw  = fs.readFileSync(path.join(JOURNAL_DIR, file), "utf8");
      const { data } = matter(raw);
      return { slug, ...data } as PostSummary;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Return raw MDX content + frontmatter for a single post. */
export function getPostRaw(
  slug: string
): { frontmatter: PostFrontmatter; content: string } | null {
  const filePath = path.join(JOURNAL_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}

/** All slugs for generateStaticParams. */
export function getJournalSlugs(): string[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

/** Format "2026-08-05" -> "5 August 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day:   "numeric",
    month: "long",
    year:  "numeric",
  });
}
