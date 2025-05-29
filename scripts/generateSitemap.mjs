
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://cardinalcommunitynews.com';
const ARTICLES_INDEX_FILE = './client/public/data/articles.json';
const WRITERS_FILE = './client/src/data/writerDirectory.ts';
const OUTPUT_FILE = './client/public/sitemap.xml';

// Static routes from App.tsx
const staticRoutes = [
  '/',
  '/articles',
  '/writers',
  '/about',
  '/contact',
  '/editorial-submissions',
  '/current-issue',
  '/support-us',
  '/locations'
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  let urls = [];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push({
      loc: `${BASE_URL}${route}`,
      lastmod: currentDate,
      priority: route === '/' ? '1.0' : '0.8'
    });
  });

  // Add dynamic article routes
  try {
    if (fs.existsSync(ARTICLES_INDEX_FILE)) {
      const articlesData = JSON.parse(fs.readFileSync(ARTICLES_INDEX_FILE, 'utf-8'));
      articlesData.forEach(article => {
        if (article.slug) {
          urls.push({
            loc: `${BASE_URL}/articles/${article.slug}`,
            lastmod: article.date ? new Date(article.date).toISOString().split('T')[0] : currentDate,
            priority: '0.7'
          });
        }
      });
      console.log(`✅ Added ${articlesData.length} article URLs`);
    }
  } catch (error) {
    console.warn('⚠️ Could not load articles data, using mock slugs');
    const mockArticleSlugs = [
      'local-hero-story',
      'spring-festival',
      'mayors-award',
      'community-garden-project',
      'school-district-news'
    ];
    mockArticleSlugs.forEach(slug => {
      urls.push({
        loc: `${BASE_URL}/articles/${slug}`,
        lastmod: currentDate,
        priority: '0.7'
      });
    });
  }

  // Add dynamic writer routes
  try {
    if (fs.existsSync(WRITERS_FILE)) {
      const writersContent = fs.readFileSync(WRITERS_FILE, 'utf-8');
      // Extract writer IDs from the TypeScript file
      const writerMatches = writersContent.match(/id:\s*'([^']+)'/g);
      if (writerMatches) {
        const writerIds = writerMatches.map(match => match.match(/'([^']+)'/)[1]);
        writerIds.forEach(writerId => {
          urls.push({
            loc: `${BASE_URL}/writer/${writerId}`,
            lastmod: currentDate,
            priority: '0.6'
          });
        });
        console.log(`✅ Added ${writerIds.length} writer URLs`);
      }
    }
  } catch (error) {
    console.warn('⚠️ Could not load writers data, using mock IDs');
    const mockWriterIds = ['jessica-ramoy', 'natalya-bucuy', 'dana-roberts'];
    mockWriterIds.forEach(writerId => {
      urls.push({
        loc: `${BASE_URL}/writer/${writerId}`,
        lastmod: currentDate,
        priority: '0.6'
      });
    });
  }

  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to file
  fs.writeFileSync(OUTPUT_FILE, xmlContent, 'utf-8');
  console.log(`✅ Generated sitemap with ${urls.length} URLs`);
  console.log(`📁 Saved to: ${OUTPUT_FILE}`);
}

generateSitemap();
