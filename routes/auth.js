import express from 'express';
import { getSignup, postSignup, getLogin, postLogin, logout } from '../controllers/authController.js';

const router = express.Router();

router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/logout', logout);

export default router;
