import Booking from '../models/booking.js';
import Property from '../models/property.js';

export const createBooking = async (req, res) => {
  const booking = new Booking({
    userId: req.user._id,
    propertyId: req.params.propertyId,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate
  });
  await booking.save();
  req.flash('success', 'Booking request sent');
  res.redirect(`/properties/${req.params.propertyId}`);
};

export const listBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.user._id }).populate('propertyId');
  res.render('bookings/index', { bookings });
};
