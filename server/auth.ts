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

  // Debug endpoint to check session
  app.get('/api/auth/debug', (req: Request, res: Response) => {
    console.log('Session ID:', req.sessionID);
    console.log('Session:', req.session);
    console.log('Is authenticated:', req.isAuthenticated());
    console.log('User:', req.user);
    
    res.json({
      sessionID: req.sessionID,
      isAuthenticated: req.isAuthenticated(),
      user: req.user || null,
      session: req.session
    });
  });

  // Configure passport local strategy
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (err) {
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
  app.post('/api/login', (req: Request, res: Response, next: NextFunction) => {
    console.log('Login attempt:', req.body);
    
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error('Auth error:', err);
        return next(err);
      }
      
      if (!user) {
        console.log('Auth failed:', info);
        return res.status(401).json({ success: false, message: info?.message || 'Authentication failed' });
      }
      
      req.login(user, (loginErr) => {
        if (loginErr) {
          console.error('Login error:', loginErr);
          return next(loginErr);
        }
        
        console.log('User logged in successfully:', user.username);
        return res.json({ success: true, user: req.user });
      });
    })(req, res, next);
  });

  app.post('/api/logout', (req: Request, res: Response, next: NextFunction) => {
    console.log('Logout request for user:', req.user);
    req.logout(function(err) {
      if (err) { 
        console.error('Logout error:', err);
        return next(err); 
      }
      console.log('User logged out successfully');
      res.json({ success: true });
    });
  });
}

// Middleware to check if user is authenticated
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}