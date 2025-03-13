
import { db } from './db';
import { categories } from '../shared/schema';

async function checkDatabase() {
  try {
    console.log('Testing database connection...');
    
    // Check categories table
    const allCategories = await db.query.categories.findMany();
    console.log(`Successfully retrieved ${allCategories.length} categories:`);
    allCategories.forEach(cat => console.log(` - ${cat.name} (${cat.slug})`));
    
    console.log('Database connection is working correctly!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

// Run the check function
checkDatabase().catch(console.error);
