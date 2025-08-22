import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import passport from 'passport';

export const getSignup = (req, res) => {
  res.render('signup');
};

export const postSignup = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({ username, email, passwordHash: hash });
  await user.save();
  req.flash('success', 'Account created. Please login.');
  res.redirect('/login');
};

export const getLogin = (req, res) => {
  res.render('login');
};

export const postLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
});

export const logout = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.flash('success', 'Logged out');
    res.redirect('/');
  });
};
