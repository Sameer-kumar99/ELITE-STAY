import express from 'express';
import Property from '../models/property.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const properties = await Property.find().limit(10);
  res.render('home', { properties });
});

export default router;
