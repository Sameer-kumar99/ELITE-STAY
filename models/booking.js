import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  checkInDate: Date,
  checkOutDate: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
});

export default mongoose.model('Booking', bookingSchema);
