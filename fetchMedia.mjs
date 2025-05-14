
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const API_URL = 'https://doylestowncardinal.com/wp-json/wp/v2/media';
const OUTPUT_DIR = './client/src/data/media';
const MEDIA_INDEX_PATH = './client/src/data/mediaIndex.json';
const PER_PAGE = 100;

async function downloadFile(url, outputPath) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFileSync(outputPath, buffer);
}

async function fetchAllMedia() {
  let page = 1;
  let more = true;
  const mediaIndex = {};
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  while (more) {
    try {
      const res = await fetch(`${API_URL}?per_page=${PER_PAGE}&page=${page}`);
      const media = await res.json();

      if (!Array.isArray(media) || media.length === 0) {
        more = false;
        continue;
      }

      console.log(`✅ Processing page ${page} (${media.length} items)`);

      for (const item of media) {
        if (!item.source_url || !item.mime_type.startsWith('image/')) {
          continue;
        }

        const filename = path.basename(item.source_url);
        const outputPath = path.join(OUTPUT_DIR, filename);

        // Skip if file already exists
        if (fs.existsSync(outputPath)) {
          console.log(`⏭️  Skipping existing file: ${filename}`);
          continue;
        }

        try {
          await downloadFile(item.source_url, outputPath);
          console.log(`📥 Downloaded: ${filename}`);

          // Add to media index
          mediaIndex[item.id] = {
            filename,
            originalUrl: item.source_url,
            slug: item.slug,
            alt: item.alt_text || '',
            caption: item.caption?.rendered || ''
          };
        } catch (err) {
          console.error(`❌ Failed to download ${filename}:`, err.message);
        }
      }

      page++;
    } catch (err) {
      console.error(`❌ Error fetching page ${page}:`, err.message);
      more = false;
    }
  }

  // Save media index
  fs.writeFileSync(MEDIA_INDEX_PATH, JSON.stringify(mediaIndex, null, 2));
  console.log(`🎉 Done! Total media items indexed: ${Object.keys(mediaIndex).length}`);
}

fetchAllMedia().catch(err => console.error('❌ Error:', err.message));
