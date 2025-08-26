import express from 'express';
import Property from '../models/property.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const properties = await Property.find();
  res.render('home', { properties });
});

export default router;
