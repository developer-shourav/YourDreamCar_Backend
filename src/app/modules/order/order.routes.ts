import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

/* -------Create an Order */
router.post('/', OrderControllers.createAnOrder);



export const OrderRoutes = router;
