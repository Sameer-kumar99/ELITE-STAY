import Property from '../models/property.js';

export const listProperties = async (req, res) => {
  const properties = await Property.find();
  res.render('properties/index', { properties });
};

export const showProperty = async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.render('properties/show', { property });
};

export const newPropertyForm = (req, res) => {
  res.render('properties/new');
};

export const createProperty = async (req, res) => {
  const property = new Property(req.body.property);
  property.ownerId = req.user._id;
  await property.save();
  req.flash('success', 'Property created');
  res.redirect(`/properties/${property._id}`);
};

export const editPropertyForm = async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.render('properties/edit', { property });
};

export const updateProperty = async (req, res) => {
  await Property.findByIdAndUpdate(req.params.id, req.body.property);
  req.flash('success', 'Property updated');
  res.redirect(`/properties/${req.params.id}`);
};

export const deleteProperty = async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  req.flash('success', 'Property deleted');
  res.redirect('/properties');
};
