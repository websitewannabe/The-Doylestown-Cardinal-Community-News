
import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/instagram-feed', async (req, res) => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    );
    
    if (!response.ok) {
      throw new Error('Instagram API request failed');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Instagram feed error:', error);
    res.status(500).json({ error: 'Failed to fetch Instagram feed' });
  }
});

export default router;
