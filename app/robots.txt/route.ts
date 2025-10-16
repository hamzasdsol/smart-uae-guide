import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
