
// fetchArticles.mjs
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const API_URL = 'https://doylestowncardinal.com/wp-json/wp/v2/posts';
const OUTPUT_DIR = './public/data/articles';
const PER_PAGE = 100;

function rewriteImageUrls(content) {
  // Regular expression to match WordPress media URLs
  const wpImageRegex = /<img[^>]*src="(https:\/\/doylestowncardinal\.com\/wp-content\/uploads\/[^"]+)"[^>]*>/g;
  
  return content.replace(wpImageRegex, (match, url) => {
    const filename = path.basename(url);
    return match.replace(url, `/data/media/${filename}`);
  });
}

function extractFilenameFromUrl(url) {
  if (!url) return null;
  return path.basename(url);
}

async function fetchAllArticles() {
  let page = 1;
  let more = true;
  const allPosts = [];

  while (more) {
    const res = await fetch(`${API_URL}?per_page=${PER_PAGE}&page=${page}&_embed`);
    const posts = await res.json();

    if (posts.length > 0) {
      allPosts.push(...posts);
      console.log(`✅ Pulled page ${page} (${posts.length} posts)`);
      page++;
    } else {
      more = false;
    }
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const post of allPosts) {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    const localThumbnail = featuredMedia ? `/data/media/${extractFilenameFromUrl(featuredMedia)}` : null;
    
    // Process content to rewrite image URLs
    const processedContent = rewriteImageUrls(post.content.rendered);
    
    const data = {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      date: post.date,
      author: post._embedded?.author?.[0]?.name || 'Unknown',
      category: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || [],
      tags: post._embedded?.['wp:term']?.[1]?.map(tag => tag.name) || [],
      excerpt: post.excerpt.rendered,
      content: processedContent,
      thumbnail: localThumbnail
    };

    const filePath = `${OUTPUT_DIR}/${post.slug}.json`;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`📁 Saved: ${filePath}`);
  }

  console.log(`🎉 Done! Total articles saved: ${allPosts.length}`);
}

fetchAllArticles().catch(err => console.error('❌ Error:', err.message));
