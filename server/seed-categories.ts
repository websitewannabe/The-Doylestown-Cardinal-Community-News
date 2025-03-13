
import { db } from './db';
import { categories } from '../shared/schema';

async function seedCategories() {
  try {
    console.log('Starting to seed categories...');
    
    // Data from your front-end components
    const categoryData = [
      {
        name: 'Restaurants',
        slug: 'restaurants',
        description: 'Discover local dining establishments, from casual eateries to fine dining experiences.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'
      },
      {
        name: 'Wineries',
        slug: 'wineries',
        description: 'Explore local vineyards and wine-tasting rooms in Bucks County.',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80'
      },
      {
        name: 'Distilleries',
        slug: 'distilleries',
        description: 'Sample craft spirits and learn about local distilling traditions.',
        image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80'
      },
      {
        name: 'Bakeries',
        slug: 'bakeries',
        description: 'Find fresh-baked goods and artisanal treats from local bakeries.',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80'
      },
      // Add other categories from your front-end components
      {
        name: 'Things To Do',
        slug: 'things-to-do',
        description: 'Activities and attractions in the Doylestown area',
        image: ''
      },
      {
        name: 'Hotels',
        slug: 'hotels',
        description: 'Places to stay in and around Doylestown',
        image: ''
      },
      {
        name: 'Art/Music',
        slug: 'art-music',
        description: 'Local art galleries and music venues',
        image: ''
      },
      {
        name: 'Style',
        slug: 'style',
        description: 'Fashion and style in Doylestown',
        image: ''
      }
    ];
    
    for (const category of categoryData) {
      // Check if category already exists
      const existing = await db.query.categories.findFirst({
        where: (categories, { eq }) => eq(categories.slug, category.slug)
      });
      
      if (!existing) {
        console.log(`Adding category: ${category.name}`);
        await db.insert(categories).values(category);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    }
    
    console.log('Categories seeding completed!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    // Close the database connection if needed
    // await db.end();
  }
}

// Run the seed function
seedCategories().catch(console.error);
