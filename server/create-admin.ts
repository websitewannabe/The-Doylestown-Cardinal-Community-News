
import { db } from './db';
import { users } from '../shared/schema';
import bcrypt from 'bcryptjs';

async function createAdminUser() {
  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('cardinal', salt);
    
    // Insert admin user
    const [adminUser] = await db.insert(users).values({
      username: 'admin',
      password: hashedPassword
    }).returning();
    
    console.log('Admin user created successfully:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    // Close the database connection
    await db.pool.end();
  }
}

createAdminUser().catch(console.error);
