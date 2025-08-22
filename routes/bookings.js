import express from 'express';
import { createBooking, listBookings } from '../controllers/bookingController.js';

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'You must be logged in');
  res.redirect('/login');
}

router.post('/:propertyId', isLoggedIn, createBooking);
router.get('/', isLoggedIn, listBookings);

export default router;
