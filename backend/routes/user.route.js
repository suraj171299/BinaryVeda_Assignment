import express from 'express';
import { login, logout, signup } from '../controllers/user.controller.js';
import { validate } from '../middlewares/input-validation.js';
import { loginValidationSchema, signupValidationSchema } from '../utils/input-validation.js';


const router = express.Router();

router.post('/signup', validate(signupValidationSchema), signup);
router.post('/login', validate(loginValidationSchema), login)
router.get('/logout', logout)

export default router;