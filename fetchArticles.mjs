
import fs from 'fs';
import fetch from 'node-fetch';

const API_URL = 'https://doylestowncardinal.com/wp-json/wp/v2/posts?per_page=100&_embed';
const OUTPUT_DIR = './src/components/layout/articles';

async function fetchArticles() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const post of posts) {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
      const data = {
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        date: post.date,
        author: post._embedded?.author?.[0]?.name || 'Unknown',
        category: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [],
        tags: post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [],
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        thumbnail: featuredMedia
      };

      const filePath = `${OUTPUT_DIR}/${post.slug}.json`;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`✅ Saved: ${filePath}`);
    }

    console.log('🎉 All articles fetched and saved.');
  } catch (err) {
    console.error('❌ Error fetching articles:', err.message);
  }
}

fetchArticles();
