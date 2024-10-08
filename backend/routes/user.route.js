import express from 'express';
import { signup } from '../controllers/user.controller.js';
import { validate } from '../middlewares/input-validation.js';
import { signupValidationSchema } from '../utils/input-validation.js';


const router = express.Router();

router.post('/signup', validate(signupValidationSchema), signup);


export default router;