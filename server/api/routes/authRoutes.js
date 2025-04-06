import express from 'express';
import { registerUser, loginUser, getUser, updateUser } from '../controllers/authController.js';
import { validateRegister, validateLogin } from '../middleware/validationMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';


const authRouter = express.Router();
// Public routes
authRouter.post('/register', validateRegister, registerUser);
authRouter.post('/login', validateLogin, loginUser);

// Protected routes (require auth token) 
authRouter.get('/user', authMiddleware, getUser);
authRouter.put('/user', authMiddleware, updateUser);

export default authRouter;