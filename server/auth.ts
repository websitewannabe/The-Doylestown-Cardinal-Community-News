import { storage } from './storage';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import type { Express, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

// Set up passport authentication
export function setupAuth(app: Express) {
  // Sessions setup
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      store: storage.sessionStore,
      cookie: { 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
      }
    })
  );

  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure passport local strategy
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user) {
        console.log('Login failed: User not found -', username);
        return done(null, false, { message: 'Incorrect username.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Login failed: Invalid password -', username);
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('Login successful:', username);
      return done(null, user);
    } catch (err) {
      console.error('Login error:', err);
      return done(err);
    }
  }));

  // Serialize and deserialize user
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUserById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Authentication routes
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({ success: true, user: req.user });
  });

  app.post('/api/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.json({ success: true });
    });
  });

  // Password reset request endpoint
  app.post('/api/reset-password/request', async (req: Request, res: Response) => {
    try {
      const { username } = req.body;
      const user = await storage.getUserByUsername(username);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Generate reset token
      const token = crypto.randomBytes(32).toString('hex');
      const expires = new Date();
      expires.setHours(expires.getHours() + 1); // Token expires in 1 hour

      await storage.storeResetToken(user.id, token, expires);

      // In a real application, you would send this token via email
      // For development, we'll just return it in the response
      res.json({ 
        message: 'Password reset requested successfully',
        resetToken: token // Remove this in production
      });
    } catch (error) {
      console.error('Password reset request error:', error);
      res.status(500).json({ message: 'Error processing password reset request' });
    }
  });

  // Reset password with token endpoint
  app.post('/api/reset-password/reset', async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;
      const user = await storage.getUserByResetToken(token);

      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired reset token' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await storage.updateUserPassword(user.id, hashedPassword);
      await storage.clearResetToken(user.id);

      res.json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Password reset error:', error);
      res.status(500).json({ message: 'Error resetting password' });
    }
  });

  // Add a route to check authentication status
  app.get('/api/auth/check', (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  });
}

// Middleware to check if user is authenticated
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}