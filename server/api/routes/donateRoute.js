import { Router } from 'express';
import { donate } from '../controllers/donateController.js';

const donateRouter = Router();

// POST route to handle donations
donateRouter.post('/donate', donate);

export default donateRouter;
