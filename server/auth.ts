
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { storage } from './storage';
import bcrypt from 'bcryptjs';

// Set up passport authentication
export function setupAuth(app) {
  // Sessions setup
  import session from 'express-session';
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // Configure local strategy
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        
        if (!user) {
          return done(null, false, { message: 'Incorrect username' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }
        
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  // Serialize and deserialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await storage.getUserById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Auth routes
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    // If this function gets called, authentication was successful
    res.json({ success: true, user: req.user });
  });

  app.post('/api/logout', (req, res, next) => {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.json({ success: true });
    });
  });

  app.get('/api/current-user', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ 
        isAuthenticated: true, 
        user: { 
          id: req.user.id, 
          username: req.user.username 
        } 
      });
    } else {
      res.json({ isAuthenticated: false });
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
