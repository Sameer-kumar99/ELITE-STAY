import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  price: Number,
  images: [String],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Property', propertySchema);
