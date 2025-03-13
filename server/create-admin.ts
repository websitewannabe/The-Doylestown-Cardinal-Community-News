
import { db } from './db';
import { users } from '../shared/schema';
import bcrypt from 'bcryptjs';

async function createAdminUser() {
  try {
    // Check if admin user already exists
    const existingAdmin = await db.select().from(users).where(users.username).equals('admin');
    
    if (existingAdmin.length > 0) {
      console.log('Admin user already exists - updating password');
      
      // Update password for existing admin
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('cardinal', salt);
      
      await db.update(users)
        .set({ password: hashedPassword })
        .where(users.username).equals('admin');
      
      console.log('Admin password updated successfully');
    } else {
      // Create new admin user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('cardinal', salt);
      
      const [adminUser] = await db.insert(users).values({
        username: 'admin',
        password: hashedPassword
      }).returning();
      
      console.log('Admin user created successfully:', adminUser);
    }
  } catch (error) {
    console.error('Error managing admin user:', error);
  }
}

createAdminUser()
  .catch(console.error)
  .finally(async () => {
    console.log('Done');
    process.exit(0);
  });
