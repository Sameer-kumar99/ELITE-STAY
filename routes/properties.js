import express from 'express';
import {
  listProperties,
  showProperty,
  newPropertyForm,
  createProperty,
  editPropertyForm,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js';

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'You must be logged in');
  res.redirect('/login');
}

router.get('/', listProperties);
router.get('/new', isLoggedIn, newPropertyForm);
router.post('/', isLoggedIn, createProperty);
router.get('/:id', showProperty);
router.get('/:id/edit', isLoggedIn, editPropertyForm);
router.put('/:id', isLoggedIn, updateProperty);
router.delete('/:id', isLoggedIn, deleteProperty);

export default router;
