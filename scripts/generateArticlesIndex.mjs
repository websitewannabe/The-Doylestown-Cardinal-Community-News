
import fs from 'fs';
import path from 'path';

const ARTICLES_DIR = './client/public/data/articles';
const OUTPUT_FILE = './client/public/data/articles.json';

const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.json'));

const index = files.map(filename => {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8');
  const data = JSON.parse(raw);
  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt?.replace(/<[^>]*>/g, '') || '',
    category: data.category?.[0] || 'Uncategorized',
    author: data.author || 'Staff',
    date: data.date,
    image: data.thumbnail || '/images/article-placeholder.jpg',
    tags: data.tags || [],
  };
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2));
console.log(`✅ Wrote ${index.length} articles to ${OUTPUT_FILE}`);
