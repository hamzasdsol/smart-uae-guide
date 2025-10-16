import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString();

  const categories = ["budget", "finance", "tools", "shopping", "expat"];

  const staticPages = [
    { url: "", priority: "1.0" },
    { url: "/categories", priority: "0.9" },
    { url: "/blog", priority: "0.9" },
    { url: "/about", priority: "0.7" },
    { url: "/contact", priority: "0.7" },
    { url: "/privacy", priority: "0.5" },
    { url: "/terms", priority: "0.5" },
    { url: "/disclaimer", priority: "0.5" },
  ];

  const categoryPages = categories.map((slug) => ({
    url: `/category/${slug}`,
    priority: "0.8",
  }));

  const allPages = [...staticPages, ...categoryPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
