import { storage } from './storage';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import type { Express, Request, Response, NextFunction } from 'express';

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